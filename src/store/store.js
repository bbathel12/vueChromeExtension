import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    sync: localStorage,
    state:{
        accounts:{}
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
            // if the state.accounts is empty we need
            // to check the localstorage, if that's not
            // empty set accounts to that and then continue
            // if both are empty just use an empty object
            if (Object.keys(state.accounts).length ===0  ) {
                let storedAccounts = JSON.parse(localStorage.getItem('accounts'));
                if ( storedAccounts != null && storedAccounts != undefined){
                    state.accounts = storedAccounts;
                }
            }
            return state.accounts;
        }
    }
})