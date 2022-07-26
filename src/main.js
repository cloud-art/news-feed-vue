import Vue from 'vue'
import store from './store'
import App from './App.vue'

import { BootstrapVue, IconsPlugin   } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')

