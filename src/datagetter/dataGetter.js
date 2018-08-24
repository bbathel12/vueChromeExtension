import axios from 'axios';
export const dataGetter = {
    data(){
        return {
            endpoint:'_services/dashboard_mobile.php',
            accounts:[],
        }
    },
    methods:{
        getData(){
            // save a reference to the app
            let app = this;
            // get proper account
            let accounts   = this.allAccounts();
            // create the request with proper headers
            let request   = axios.create({
                headers:{
                    "content-type":"application/x-www-form-urlencoded"
                }
            });
            for(let accountid in accounts){
                let _account = accounts[accountid]
                // build request body using javascript fordata
                let body = new FormData();
                body.set("apikey",_account.apikey);
                body.set("func","plugin_data");
                // post the request
                request.post(
                    _account.url+"/"+app.endpoint,
                    body
                ).then( function(response){
                    app.saveAccountData(_account,response.data);
                }).catch( function(response){
                    console.log("FAIL: "+ response)
                });
                
            }
            this.accounts[0] = this.chosenAccount;
        },
        saveAccountData(account,data){
            this.$store.commit(
                "addAccount",
                Object.assign(account,data)
            );
        },
        allAccounts(){
            return this.$store.getters.accounts;
        },
        firstAccount(){
            let key = Object.keys(this.allAccounts())[0];
            return this.allAccounts()[key];
        },
        accountId(){
            return this.$route.params.accountid;
        },
    },
    computed:{
        chosenAccount(){
            if( this.accountId() != undefined ){
                let accounts = this.allAccounts();

                return this.allAccounts()[this.accountId()];
            }else{
                return this.firstAccount();
            }
        },
        allNamedAccounts(){
            let accounts = this.allAccounts();
            let clean = [];
            for(let account in accounts){
                if( accounts[account] != undefined){
                    clean.push(accounts[account]);
                }
            }
            return clean;
        },

    },
}
