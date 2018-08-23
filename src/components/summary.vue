<template>
    <div id="container">
        <div id="header">
            <img src="/images/extension-icon.png"/> Monthly Network Stats
            <span id="icon_info" class="glyphicon glyphicon-info-sign" aria-hidden="true" style="float: right; mar
            gin-top: 2px; cursor: pointer;" title="Settings"></span>
        </div>
        <div id="content">

            <div id="content">
                <div class="metric metric_small">
                    <img src="https://logos.hitpath.com/a41b5fa679733fb0cc71f952586b4f02.png">
                </div>
                <div class="metric metric_small metric_gradient">
                    <div class="metric_label">Hits
                    </div>
                    <div class="metric_value">127
                    </div>
                </div>
                <div class="metric metric_small metric_gradient">
                    <div class="metric_label">Sales
                    </div>
                    <div class="metric_value">63
                    </div>
                </div>
                <div class="metric metric_medium metric_gradient"><span class="metric_label">Conversion </span><span class="metric_value">49.61%</span>
                </div>
                <div class="metric metric_medium metric_gradient"><span class="metric_label">EPC </span><span class="metric_value">$5.48</span>
                </div>
                <div class="metric metric_large metric_gradient"><span class="metric_label">Commission </span><span class="metric_value">$696.00</span>
                </div>
                <div class="clear_div">
                </div>
            </div>
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
export default{
    name:"summary",
    data(){
        return{
            endpoint:"_services/dashboard_mobile.php",
        }
    },
    mounted(){
        this.getData();
    },
    methods:{
        getData(){
            // save a reference to the app
            let app = this;
            // get proper account
            let account   = app.chosenAccount;
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
            }).catch( function(response){
                console.log("FAIL: "+ response)
            });
        },
        saveAccountData(account,data){
            this.$store.commit(
                "addAccount",
                Object.assign(account,data)
            );
        }
    },
    computed:{
        accounts(){
            return this.$store.getters.accounts;
        },
        firstAccount(){
            return this.$store.getters.accounts;
        },
        accountId(){
            return this.$route.params.accountid;
        }
        chosenAccount(){
            return this.$store.getters.accounts[this.accountId];
        }
    },
}

</script>

<style>
</style
