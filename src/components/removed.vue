<template>
    <div id="container" >
        <div id="header">
            <img style="height: 20px; width:20px" src="./images/extension-icon-48x48.png"/> Account Removed
            <span @click="remove($event,chosenAccount,'summary')"><span class="glyphicon glyphicon-th" aria-hidden="true" style="float: right; margin-top: 2px; cursor: pointer;" title="Summary"></span>
        </div>
        <div id="content" >
            <div id="settings" class="text-center" style="margin-left: -4px;">
                <h3 style="color:#1173BD;"><span v-text="chosenAccount.network_name"></span></h3>
                <h4>has been removed</h4>
                <h3>
                    <span @click="remove($event,chosenAccount,'summary')"><span class="glyphicon glyphicon-th" aria-hidden="true" style="margin-top: 2px; cursor: pointer;" title="Summary"></span>
                </h3>
            </div>
        </div>
        <div id="footer" style="text-align:center;">
            <span @click="remove($event,chosenAccount,'login')"><span class="glyphicon glyphicon-plus" aria-hidden="true"> Add New Account</span></span>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import {dataGetter} from "@/datagetter/dataGetter";
export default{
    name:"removed",
    mixins:[dataGetter],
    data(){
        return{
        }
    },
    methods:{
        getNewData(){
            this.getData();
        },
        close(){
            window.close();
        },
        remove(e,account,page){
            this.removeAccountData(account);
            if (page == 'summary'){
                this.$router.push(
                    {
                        name:"Summary"
                    }
                );
            } else {
                this.$router.push(
                    {
                        name:"Login"
                    }
                );
            }
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
