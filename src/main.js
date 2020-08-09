/*
 * main.js
 * Created on Sat Aug 08 2020
 * by Jeremy Gouveia
 *
 * Copyright (c) 2020 Kismet Creative LLC
*/

// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// import styles
import '~/assets/styles/styles.scss'

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400;700&display=swap'
  })
  // Install BootstrapVue
  Vue.use(BootstrapVue)
  // Optionally install the BootstrapVue icon components plugin
  Vue.use(IconsPlugin)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
