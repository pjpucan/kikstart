let mix = require('laravel-mix');
require('laravel-mix-purgecss');

// Main theme files
mix.js('src/js/kickstartjs.js', 'assets/')
   .sass('src/scss/kickstart.scss', 'assets/')
   .options({
     processCssUrls: false,
     hmrOptions: {
       https: false,
       host: 'localhost',
       port: '8080'
     }
   });

// Collection tabs component (compile separately)
mix.js('src/js/modules/collection-tabs.js', 'assets/collection-tabs.js')
   .sass('src/scss/sections/collection-tabs.scss', 'assets/collection-tabs.css')
   .options({
     processCssUrls: false
   });

// Modal ingredients component (compile separately)
mix.sass('src/scss/sections/section-product-ingredients.scss', 'assets/section-product-ingredients.css')
   .options({
     processCssUrls: false,
     watchOptions: {
       ignored: /node_modules/,
       aggregateTimeout: 300
     }
   });

mix.js('src/js/components/modal-ingredients.js', 'assets/modal-ingredients.js')
   .options({
     processCssUrls: false
   });

// Enable source maps
mix.sourceMaps(true, 'source-map');

// Enable automatic reloading
mix.disableNotifications()
   .webpackConfig({
     watchOptions: {
       ignored: /node_modules/,
       aggregateTimeout: 300
     }
   });