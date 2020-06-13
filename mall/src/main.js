import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclic from 'fastclick'

import 'assets/scss/index.scss'

fastclic.attack(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
