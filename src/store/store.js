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
            const accounts = JSON.parse(localStorage.getItem('accounts'));
            delete accounts[account.apikey];
            localStorage.setItem(
                "accounts",
                JSON.stringify(accounts)
            );
        }
    },
    getters:{
        accounts(state){
            return state.accounts;
        }
    }
})
