// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

/*
 * gridsome.config.js
 * Created on Sat Aug 08 2020
 * by Jeremy Gouveia
 *
 * Copyright (c) 2020 Kismet Creative LLC
*/

// style-resources-loader code
const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/_globals.sass'),
        // or if you use scss
        path.resolve(__dirname, './src/assets/sass/_globals.scss'),
        // you can also use a glob if you'd prefer
        path.resolve(__dirname, './src/assets/sass/*.sass'),
        // or scss
        path.resolve(__dirname, './src/assets/sass/*.scss'),
      ],
    })
}

module.exports = {
  // This snippet allows for the use of mixins in all vue files
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  }, 
  siteName: 'Gojeflone',
  siteUrl: 'https://gojeflone.github.io',
  pathPrefix: '/Gojeflone.github.io',
  plugins: [],
  // Icon
  icon: {
    favicon: './src/assets/images/favicon_io/favicon-32x32.png',
    touchicon: './src/assets/images/favicon_io/favicon-32x32.png'
  },
}
