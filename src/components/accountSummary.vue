<template>
    <div id="container" >
        <div id="header">
            <img style="height: 20px; width:20px" src="./images/extension-icon-48x48.png"> Monthly Network Stats
            <span id="icon_info" class="glyphicon glyphicon-info-sign" aria-hidden="true" style="float: right; margin-top: 2px; cursor: pointer;" title="Settings"></span>
        </div>
        <div id="content" >
            <metric />
        </div>
        <div id="footer">
            <!--<div id="network_login"><a href="" target="_blank" style="outline: none; color: black"><span id="icon_info" class="glyphicon glyphicon-log-in" aria-hidden="true" style="cursor: pointer;" title="Login"></span></a></div>-->
            <div id="last_update">Last Updated: <span id="last_update_timestamp" v-text="chosenAccount.timestamp"></span></div>
            <div id="dropdown"><accountDropDown @linkfollow="getNewData" /></div>
            <router-link to="/" text="login"><span class="glyphicon glyphicon-log-in" aria-hidden="true" style="cursor: pointer; left:8px; top: 0px;" title="Login"></router-link>
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
