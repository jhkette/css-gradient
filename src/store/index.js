import Vuex from 'vuex'
import Vue from 'vue'
import gradient from './modules/gradient'




Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        // wires up auth module
        // vuex instance
        // which is hooked up to vue 
        //(above  -- Vue.use(Vuex))
        gradient
       
    }
})