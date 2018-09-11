<template>
    <div id="container" >
        <div id="header">
            <img style="height: 20px; width:20px" src="./images/extension-icon-48x48.png"/> Account Removed
            <router-link @click.native="remove(chosenAccount, $event)" to="/summary/" text="summary"><span class="glyphicon glyphicon-th" aria-hidden="true" style="float: right; margin-top: 2px; cursor: pointer;" title="Summary"></span></router-link>
        </div>
        <div id="content" >
            <div id="settings" class="text-center" style="margin-left: -4px;">
                <h3 style="color:#1173BD;"><span v-text="chosenAccount.network_name"></span></h3>
                <h4>has been removed</h4>
                <h3>
                <span @click="remove($event,chosenAccount)" ><span class="glyphicon glyphicon-th" aria-hidden="true" style="margin-top: 2px; cursor: pointer;" title="Summary"></span>
                    <!--<router-link @click.native="close" to="/"><span style="font-size:17px; font-weight:500; color:#2498EF;">Extension must be restarted in order for the changes to take effect</span></router-link>-->
                </h3>
            </div>
        </div>
        <div id="footer" style="text-align:center;">
            <!--<router-link @click.native="close" to="/"><span style="color:#2498EF; font-size:12px;">Extension must be restarted in order for the changes to take effect</span></router-link>-->
            <router-link to="/" text="add_new_account"><span class="glyphicon glyphicon-plus" aria-hidden="true"> Add New Account</span></router-link>
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
        remove(e,account){
            window.alert(account.apikey);
            this.removeAccountData(account);
            this.$router.push(
                {
                    name:"Summary"
                }
            );
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
