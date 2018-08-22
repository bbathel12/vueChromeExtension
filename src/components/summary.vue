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
            let accountid = this.$route.params.accountid
            let account   = this.accounts[accountid];
            let endpoint  = "_services/dashboard_mobile.php";
            let request   = axios.create();
            request.post(
                account.url+"/"+endpoint,
                {
                    apikey:account.apikey,
                },
            ).then( function(response){
                console.log(response)
            }).catch( function(response){
                console.log("FAIL: "+ response)
            });
        },
    },
    computed:{
        accounts(){
            return this.$store.getters.accounts;
        },
    }
}

</script>

<style>
</style
