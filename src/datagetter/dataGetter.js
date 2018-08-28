import axios from 'axios';
export const dataGetter = {
    data(){
        return {
            endpoint:'_services/dashboard_mobile.php',
            accounts:[],
        }
    },
    methods:{
        getAccountData(apiUrl,apiKey) {
            if(apiUrl == undefined || apiKey == undefined || apiUrl == 'http://' || apiKey == ''){
                return false;
            }
            // save a reference to the app
            let app = this;
            // build request body using javascript fordata
            let body = new FormData();
            // create the request with proper headers
            let request   = axios.create({
                headers:{
                    "content-type":"application/x-www-form-urlencoded"
                }
            });
            body.set("apikey",apiKey);
            body.set("func","plugin_data");
            // post the request
            return new Promise(function(resolve,reject){
                request.post(
                    apiUrl+"/"+app.endpoint,
                    body
                ).then( function(response){
                    if (response.data.length != 2){
                        app.saveAccountData({
                            'apikey':apiKey,
                            'url':apiUrl,
                        },response.data);
                        resolve(response.data);
                    }
                    else
                        reject('Credentials are incorrect.');
                }).catch( function(response){
                    reject('Credentials are incorrect.');
                })
            })
        },
        getData(){
            // get proper account
            let accounts   = this.allAccounts();
            for(let accountid in accounts){
                let _account = accounts[accountid]
                this.getAccountData(_account.url,_account.apikey);
            }
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
