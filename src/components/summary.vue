<template>
    <div id="container">
        <div id="header">
            <img src="/images/extension-icon.png"/> Monthly Network Stats
            <span id="icon_info" class="glyphicon glyphicon-info-sign" aria-hidden="true" style="float: right; mar
            gin-top: 2px; cursor: pointer;" title="Settings"></span>
        </div>
        <div id="content" >
            <span v-for="account in accounts">
                <metric v-for="metric in account.data" :metric="metric"/>
            </span>
        </div>
        <div id="footer">
            <div id="network_name"></div>
            <div id="network_login"><a href="" target="_blank" style="outline: none; color: black"><span id="icon_
            info" class="glyphicon glyphicon-log-in" aria-hidden="true" style="cursor: pointer;" title="Login"></span></a></div>
            <div id="last_update">Last Updated: <span id="last_update_timestamp">-</span></div>
            <div class="clear_div"></div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import metric from "@/components/metric";
export default{
    name:"summary",
    components:{metric},
    data(){
        return{
            endpoint:"_services/dashboard_mobile.php",
            accounts:[],
        }
    },
    created(){
        this.getData()
    },
    methods:{
        getData(){
            // save a reference to the app
            let app = this;
            // get proper account
            let account   = app.chosenAccount();
            // create the request with proper headers
            let request   = axios.create({
                headers:{
                    "content-type":"application/x-www-form-urlencoded"
                }
            });

            // build request body using javascript fordata
            let body = new FormData();
            body.set("apikey",account.apikey);
            body.set("func","plugin_data");
            // post the request
            request.post(
                account.url+"/"+app.endpoint,
                body
            ).then( function(response){
                app.saveAccountData(account,response.data);
                console.log(app.chosenAccount());
                app.accounts = [app.chosenAccount()];
            }).catch( function(response){
                console.log("FAIL: "+ response)
            });
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
        chosenAccount(){
            if( this.accountId() != undefined ){
                return this.allAccounts()[this.accountId];
            }else{
                return this.firstAccount();
            }
        },
    },
}

</script>

<style>
</style
