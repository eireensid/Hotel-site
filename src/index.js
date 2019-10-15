// JS
import './js/'

import './libs/northwalker-vue-hotel-datepicker/lib/vue-hotel-datepicker.common'
import './libs/northwalker-vue-hotel-datepicker/lib/vue-hotel-datepicker.umd'
// import './libs/jslider/bin/jquery.slider.min.css'
import 'bootstrap-slider/dist/bootstrap-slider.js'
import 'bootstrap-slider/dist/css/bootstrap-slider.css'

import 'air-datepicker/dist/js/datepicker.min.js'
import 'air-datepicker/dist/css/datepicker.min.css'

// SCSS
import './assets/scss/main.scss'

import App from './components/App.vue'

// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')

// Vue components (for use in html)
Vue.component('example-component', require('./components/Example.vue').default)

// Vue init
// const app = new Vue({
//   el: '#app'
// })

// Router
import router from './router'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// Bootstrap
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'


