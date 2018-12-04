import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import './common/stylus/index.styl'

Vue.config.productionTip = false

// Vue.prototype.$ajax = axios

fastclick.attach(document.body)

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
