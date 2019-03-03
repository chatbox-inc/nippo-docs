// Base dependencies
import Vue from 'vue'
import Vuex from 'vuex'

import docs from "@/stores/documents.js"

Vue.use(Vuex)
// import octokit from './service/octokit'
// import createPersistedState from 'vuex-persistedstate'

const store = new Vuex.Store({
    modules:{
        docs
    }
})
export default store
