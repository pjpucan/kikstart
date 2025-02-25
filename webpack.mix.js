let mix = require('laravel-mix');
require('laravel-mix-purgecss');


mix.js('src/js/kickstart.js','assets/kickstart.min.js')
  
mix.sass('src/scss/kickstart.scss', 'assets/')
    .options({
      PurgeCss: true,
      processCssUrls: false,
    });