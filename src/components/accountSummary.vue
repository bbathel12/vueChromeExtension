<template>
    <div v-if="chosenAccount != undefined" id="container" >
        <div id="header">
            <img style="height: 20px; width:20px" src="./images/extension-icon-48x48.png"> Monthly Account Stats
            <router-link :to="{ name: 'SettingsWId', params: { accountid: chosenAccount.apikey}}" text="settings"><span class="glyphicon glyphicon-info-sign" aria-hidden="true" style="float: right; margin-top: 2px; cursor: pointer;" title="Settings"></span></router-link>
        </div>
        <div id="content" >
            <metric />
        </div>
        <div id="footer">
            <div id="network_login"><a href="" target="_blank" style="outline:none; color:black; padding-top:5px;"><span id="icon_info" class="glyphicon glyphicon-log-in" aria-hidden="true" style="cursor: pointer;" title="Login"></span></a></div>
            <div id="last_update" style="padding-top:5px;">Last Updated: <span id="last_update_timestamp" style="padding-top:5px;" v-text="chosenAccount.timestamp"></span></div>
            <div id="dropdown"><accountDropDown @linkfollow="getNewData" /></div>
            <router-link to="/login" text="login"><span class="glyphicon glyphicon-log-in" aria-hidden="true" style="cursor:pointer; margin-left:8px; top:0px; padding-top:5px;" title="Login"></span></router-link>
        </div>
        
    </div>
</template>

<script>
import axios from "axios"
import metric from "@/components/metric";
import accountDropDown from "@/components/accountDropDown";
import {dataGetter} from "@/datagetter/dataGetter";
export default{
    name:"accountSummary",
    components:{metric,accountDropDown},
    mixins:[dataGetter],
    data(){
        return{
        }
    },
    methods:{
        getNewData(){
            this.getData();
        }
    },
    beforeMount(){
        if (this.allNamedAccounts.length == 0){
            this.$router.push({name:'Login'});
        }
    },
    computed:{
        networkName(){
            let account = this.account;
            if( account != undefined){
                return account.network_name;
            }
            return "";
        },
    }
}

</script>

<style>
</style
