<template>
    <div>
        <h1>summary</h1>
    </div>
</template>

<script>
import axios from "axios"
export default{
    name:"summary",
    data(){
        return {};
    },
    mounted(){
        console.log("HELLO MOTHER FUCKER");
        this.getData();
    },
    methods:{
        getData(){
            // save a reference to the app
            let app = this;
            // get the parameter
            let accountid = this.$route.params.accountid
            // get proper account
            let account   = this.accounts[accountid];
            // this is the page that has the data
            let endpoint  = "_services/dashboard_mobile.php";
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
                account.url+"/"+endpoint,
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
    },
}

</script>

<style>
</style
