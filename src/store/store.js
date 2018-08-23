import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    sync: sessionStorage,
    state:{
        accounts:JSON.parse(localStorage.getItem('accounts')) || {}
    },
    mutations:{
        addAccount(state,account){
            state.accounts[account.apikey] = account
            localStorage.setItem(
                "accounts",
                JSON.stringify(state.accounts)
            );
        },
        removeAccount(state,account){
            delete(state.accounts[account.apikey]);
        }
    },
    getters:{
        accounts(state){
            return state.accounts;
        }
    }
})
