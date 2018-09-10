<template>
    <div id="container" >
        <div id="header">
            <img style="height: 20px; width:20px" src="./images/extension-icon-48x48.png"/> Account Settings
            <router-link :to="{ name: 'SummaryWId', params: { accountid: chosenAccount.apikey}}" text="summary"><span class="glyphicon glyphicon-th" aria-hidden="true" style="float: right; margin-top: 2px; cursor: pointer;" title="Summary"></span></router-link>
        </div>
        <div id="content" >
            <div id="settings">
                <table class="table" style="margin-bottom:0px;">
                    <tr class="settingsDetails">
                        <td><strong>Network:</strong></td>
                        <td><span v-text="chosenAccount.network_name"></span></td>
                    </tr>
                    <tr class="settingsDetails">
                        <td><strong>URL:</strong></td>
                        <td><span v-text="chosenAccount.url_login"></span></td>
                    </tr>
                    <tr class="settingsDetails">
                        <td><strong>API Key:</strong></td>
                        <td><span v-text="chosenAccount.apikey"></span></td>
                    </tr>
                    <tr class="settingsDetails">
                        <td><strong>User:</strong></td>
                        <td><span v-text="chosenAccount.login"></span></td>
                    </tr>
                    <tr class="settingsDetails">
                        <td><strong>Updated:</strong></td>
                        <td><span v-text="chosenAccount.timestamp"></span></td>
                    </tr>
                    <tr class="settingsRemoveAccount">
                        <td></td>
                        <td>
                            <!--<router-link :to="{ name: 'RemovedWId', params: { accountid: chosenAccount.apikey}}" text="delete_account"><span class="glyphicon glyphicon-trash" aria-hidden="true" style="margin-top: 2px; cursor: pointer;"></span> Remove Account</router-link>-->
                            <router-link @click.native="remove($event, chosenAccount.url_login, chosenAccount.apikey)" :to="{ name: 'RemovedWId', params: { accountid: chosenAccount.apikey}}"><span class="glyphicon glyphicon-trash" aria-hidden="true" style="margin-top: 2px; cursor: pointer;"></span> Remove Account</router-link>
                            <!--<button v-on:click="remove($event, chosenAccount.url_login, chosenAccount.apikey)" id="button_remove"  class="btn btn-default" style="float: right;">Remove Account</button>-->
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div id="footer">
            <div id="dropdown"><accountDropDownSettings @linkfollow="getNewData" /></div>
            <router-link to="/" text="add_new_account"><span class="glyphicon glyphicon-plus" aria-hidden="true"> Add New Account</span></router-link>
        </div>
        
    </div>
</template>

<script>
import axios from "axios"
import accountDropDownSettings from "@/components/accountDropDownSettings";
import {dataGetter} from "@/datagetter/dataGetter";
export default{
    name:"settings",
    components:{accountDropDownSettings},
    mixins:[dataGetter],
    data(){
        return{
        }
    },
    methods:{
        getNewData(){
            this.getData();
        },
        remove: function(event, url, apikey){
            this.method = 'remove';
            let app = this;
            app.getAccountData(url,apikey,this.method);
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
<style scoped>
    .table tr.settingsDetails td {
        padding: 8px !important;
        line-height: 1.42857143 !important;
        vertical-align: top !important;
        border-top: 1px solid #ddd !important;
    }
    .table tr.settingsRemoveAccount td {
        padding: 8px !important;
        line-height: 1.42857143 !important;
        vertical-align: top !important;
        border-top: 1px solid #ddd !important;
        color: #317dcd !important;
        font-weight: bold;
        text-decoration: none !important;
        font-size: .8em;
    }
</style>
