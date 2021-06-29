import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import videosStore from './videosStore'
import articlesStore from './articlesStore'

Vue.use(Vuex);

export default new Vuex.Store( {
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        auth, videosStore, articlesStore
    }

})