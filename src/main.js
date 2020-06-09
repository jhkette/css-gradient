import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWindowClose, faCross, faTimes } from '@fortawesome/free-solid-svg-icons'
// import { faCross } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faWindowClose, faCross, faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
