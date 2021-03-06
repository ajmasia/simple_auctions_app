import Vue from 'vue'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'

import en from '../locale/en.json'
import es from '../locale/es.json'

import * as mutations from './store.mutations.js'
import * as actions from './store.actions'
import { state } from './store.state'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {},
})

Vue.use(vuexI18n.plugin, store)
// Vue.i18n.set('es')
Vue.i18n.add('en', en)
Vue.i18n.add('es', es)

export default store
