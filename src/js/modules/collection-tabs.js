class CollectionTabs extends HTMLElement {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.tabs = this.querySelectorAll('.collection-tabs__tab');
    this.tabSelect = this.querySelector('.collection-tabs__select-input');
    this.currentCollection = null;
    this.isLoading = false;
    this.mainContent = document.getElementById('MainContent');
    
    // Get collection banner elements
    this.collectionBanner = document.querySelector('.collection-hero');
    this.collectionTitle = document.querySelector('.collection-hero__title');
    this.collectionDescription = document.querySelector('.collection-hero__description');
    
    console.log('Collection elements found:', {
      banner: !!this.collectionBanner,
      title: !!this.collectionTitle,
      description: !!this.collectionDescription,
      titleText: this.collectionTitle?.textContent
    });
    
    this.bindEvents();
  }

  bindEvents() {
    if (this.tabs) {
      this.tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
          event.preventDefault();
          console.log('Tab clicked:', tab.dataset.collectionHandle);
          this.handleTabClick(event);
        });
      });
    }

    if (this.tabSelect) {
      this.tabSelect.addEventListener('change', (event) => {
        console.log('Select changed:', event.target.value);
        this.handleSelectChange(event);
      });
    }

    window.addEventListener('popstate', (event) => {
      if (event.state && event.state.collectionHandle) {
        this.switchCollection(event.state.collectionHandle, false);
      }
    });
  }

  handleTabClick(event) {
    const tab = event.currentTarget;
    const collectionHandle = tab.dataset.collectionHandle;
    console.log('Switching to collection:', collectionHandle);
    if (collectionHandle) {
      this.switchCollection(collectionHandle);
    }
  }

  handleSelectChange(event) {
    const collectionHandle = event.target.value;
    if (collectionHandle) {
      this.switchCollection(collectionHandle);
    }
  }

  async switchCollection(collectionHandle, pushState = true) {
    if (this.isLoading || this.currentCollection === collectionHandle) return;
    console.log('Starting collection switch to:', collectionHandle);
    this.isLoading = true;

    try {
      this.updateActiveTab(collectionHandle);
      
      const currentUrl = new URL(window.location.href);
      const searchParams = currentUrl.search;
      
      if (pushState) {
        const newUrl = `/collections/${collectionHandle}${searchParams}`;
        window.history.pushState({ collectionHandle }, '', newUrl);
      }

      // First, fetch collection data via the JSON API
      const collectionResponse = await fetch(`/collections/${collectionHandle}.json`);
      if (!collectionResponse.ok) throw new Error('Collection fetch failed');
      const collectionData = await collectionResponse.json();
      
      // Update collection title and description
      this.updateCollectionDetails(collectionData.collection);

      // Then fetch the collection page HTML for products
      const response = await fetch(`/collections/${collectionHandle}${searchParams}`);
      if (!response.ok) throw new Error('Collection page fetch failed');
      const html = await response.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      const newMainContent = doc.getElementById('MainContent');
      if (newMainContent && this.mainContent) {
        // Update collection banner
        const newBanner = doc.querySelector('.collection-hero');
        if (newBanner && this.collectionBanner) {
          // Instead of replacing the entire banner, update specific elements
          const newTitle = newBanner.querySelector('.collection-hero__title');
          const newDescription = newBanner.querySelector('.collection-hero__description');
          
          if (newTitle && this.collectionTitle) {
            this.collectionTitle.innerHTML = newTitle.innerHTML;
          }
          
          if (newDescription && this.collectionDescription) {
            this.collectionDescription.innerHTML = newDescription.innerHTML;
          } else if (this.collectionDescription) {
            this.collectionDescription.style.display = 'none';
          }
        }

        // Update product grid
        const productGrid = newMainContent.querySelector('.product-grid');
        const currentGrid = this.mainContent.querySelector('.product-grid');
        if (productGrid && currentGrid) {
          currentGrid.innerHTML = productGrid.innerHTML;
        }

        // Update faceted filters
        const facetedFilters = newMainContent.querySelector('.faceted-filters');
        const currentFilters = this.mainContent.querySelector('.faceted-filters');
        if (facetedFilters && currentFilters) {
          currentFilters.innerHTML = facetedFilters.innerHTML;
        }

        this.initializeComponents();
        console.log('Collection switch completed');
      }

    } catch (error) {
      console.error('Error switching collection:', error);
    } finally {
      this.isLoading = false;
      this.currentCollection = collectionHandle;
    }
  }

  updateCollectionDetails(collection) {
    console.log('Updating collection details:', collection);

    if (this.collectionTitle) {
      // Keep the visually-hidden span and update only the collection title
      const titleSpan = this.collectionTitle.querySelector('.visually-hidden');
      if (titleSpan) {
        // Remove any text nodes after the span
        let node = titleSpan.nextSibling;
        while (node) {
          const nextNode = node.nextSibling;
          node.remove();
          node = nextNode;
        }
        // Add the new title text after the span
        titleSpan.after(collection.title);
      } else {
        this.collectionTitle.textContent = collection.title;
      }
    }

    if (this.collectionDescription) {
      if (collection.description) {
        this.collectionDescription.innerHTML = collection.description;
        this.collectionDescription.style.display = '';
      } else {
        this.collectionDescription.style.display = 'none';
      }
    }

    // Update page title
    document.title = collection.title + ' – ' + window.Shopify.shop;
  }

  updateActiveTab(collectionHandle) {
    this.tabs.forEach(tab => {
      const isActive = tab.dataset.collectionHandle === collectionHandle;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', isActive);
    });

    if (this.tabSelect) {
      this.tabSelect.value = collectionHandle;
    }
  }

  initializeComponents() {
    document.dispatchEvent(new CustomEvent('collection:updated'));
    
    if (typeof window.initFacetedFiltering === 'function') {
      window.initFacetedFiltering();
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    customElements.define('collection-tabs', CollectionTabs);
  });
} else {
  customElements.define('collection-tabs', CollectionTabs);
}
