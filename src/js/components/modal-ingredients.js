class ModalIngredients {
  constructor() {
    this.init();
  }

  init() {
    this.modalOpeners = document.querySelectorAll('[data-modal-opener]');
    this.modalClosers = document.querySelectorAll('[data-modal-close]');
    this.modals = document.querySelectorAll('.product-ingredients__modal');
    this.body = document.querySelector('body');

    this.bindEvents();
  }

  bindEvents() {
    // Open modal
    this.modalOpeners.forEach(opener => {
      opener.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = opener.getAttribute('data-modal-opener');
        this.openModal(modalId);
      });
    });

    // Close modal
    this.modalClosers.forEach(closer => {
      closer.addEventListener('click', (e) => {
        e.preventDefault();
        const modal = closer.closest('.product-ingredients__modal');
        this.closeModal(modal);
      });
    });

    // Close on outside click
    this.modals.forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          this.closeModal(modal);
        }
      });
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const activeModal = document.querySelector('.product-ingredients__modal.active');
        if (activeModal) {
          this.closeModal(activeModal);
        }
      }
    });
  }

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    this.body.style.overflow = 'hidden';
    modal.classList.add('active');

    // Set focus on close button
    const closeButton = modal.querySelector('[data-modal-close]');
    if (closeButton) {
      closeButton.focus();
    }
  }

  closeModal(modal) {
    if (!modal) return;

    this.body.style.overflow = '';
    modal.classList.remove('active');

    // Return focus to opener
    const modalId = modal.getAttribute('id');
    const opener = document.querySelector(`[data-modal-opener="${modalId}"]`);
    if (opener) {
      opener.focus();
    }
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new ModalIngredients();
});
