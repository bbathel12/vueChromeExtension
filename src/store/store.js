import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        accounts:{}
    },
    mutations:{
        addAccount(state,account){
            state.accounts[account.apikey] = account
        },
        removeAccount(state,account){

        }
    },
    getters:{
        accounts:(state)=>state.accounts
    }
})
