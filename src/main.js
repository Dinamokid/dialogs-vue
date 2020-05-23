import Vue from 'vue'
import VueRouter from 'vue-router'

import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import App from './App.vue'

import Dialogs from "./components/Dialogs.vue";
import Index from "./components/Index.vue";

export const bus = new Vue();

const routes = [
  { path: '/Index', component: Index },
  { path: '/Dialogs', component: Dialogs }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
