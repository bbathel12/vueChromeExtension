<template>
    <div id="container" >
        <div id="header">
            <img src="./images/extension-icon.png"/> Monthly Network Stats
            <span id="icon_info" class="glyphicon glyphicon-info-sign" aria-hidden="true" style="float: right; mar
            gin-top: 2px; cursor: pointer;" title="Settings"></span>
        </div>
        <div id="content" >
            <metric :data="chosenAccount"/>
        </div>
        <div id="footer">
            <div id="network_name" v-text="networkName"></div>
            <div id="network_login"><a href="" target="_blank" style="outline: none; color: black"><span id="icon_
            info" class="glyphicon glyphicon-log-in" aria-hidden="true" style="cursor: pointer;" title="Login"></span></a></div>
            <div id="last_update">Last Updated: <span id="last_update_timestamp">-</span></div>
            <div class="clear_div"></div>
            {{allNamedAccounts}}
            <accountDropDown @linkfollow="getNewData" :accounts="allNamedAccounts" />
            <router-link to="/" text="login">Login</router-link>
        </div>
        
    </div>
</template>

<script>
import axios from "axios"
import metric from "@/components/metric";
import accountDropDown from "@/components/accountDropDown";
import {dataGetter} from "@/datagetter/dataGetter";
export default{
    name:"summary",
    components:{metric,accountDropDown},
    mixins:[dataGetter],
    data(){
        return{
        }
    },
    beforeMount(){
        this.getData()
    },
    methods:{
        getNewData(){
            this.getData();
        },
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
