let mix = require('laravel-mix');
require('laravel-mix-purgecss');

// Main theme files
mix.js('src/js/kickstartjs.js', 'assets/')
   .sass('src/scss/kickstart.scss', 'assets/')
   .options({
     processCssUrls: false
   });

// Collection tabs component (compile separately)
mix.js('src/js/modules/collection-tabs.js', 'assets/collection-tabs.js')
   .sass('src/scss/sections/collection-tabs.scss', 'assets/collection-tabs.css');
