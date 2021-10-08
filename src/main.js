import Vue from 'vue'
import App from './App.vue'
// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Star icons
library.add(faStar, faStarEmpty)

Vue.component('font-awesome-icon', FontAwesomeIcon)
// /Fontawesome
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')