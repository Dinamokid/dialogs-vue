import Vue from 'vue'
import store from './store/main'
import VueRouter from 'vue-router'

import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import 'es6-promise/auto';

import App from './App.vue'

import Index from "./components/Index.vue";
import DialogList from "./components/DialogList.vue";
import Dialog from "./components/Dialog.vue";

export const bus = new Vue();

const routes = [
  { path: '/Index', component: Index },
  { path: '/Dialogs', component: DialogList },
  { path: '/Dialog/:id', component: Dialog, props: true }
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
  store,
}).$mount('#app')
