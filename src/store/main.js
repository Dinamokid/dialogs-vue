import Vue from 'vue'
import Vuex from 'vuex'
import Message from './modules/message'
import Dialog from './modules/dialog'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Message,
    Dialog
  }
})