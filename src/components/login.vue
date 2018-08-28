<template>
    <div>
        <div id="container">
            <div id="header"><img style="height: 20px; width:20px" src="./images/extension-icon-48x48.png"> Login</div>
            <div id="content" class="content_bump">


                <div class="form-group">
                    <label class="control-label col-sm-2" for="name" style="float:left">Url:</label>
                    <div class="col-sm-5">
                        <input  v-model="url" type="url" class="form-control" id="url" name="url" placeholder="Enter url" value="" autocomplete="off" required>
                        <span class="glyphicon form-control-feedback glyphicon_bump" aria-hidden="true"></span>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="name" style="float:left">API Key:</label>
                    <div class="col-sm-5">
                        <input type="text" v-model="apikey" class="form-control" id="key" name="key" placeholder="Enter key" value="" autocomplete="off" required>
                        <span class="glyphicon form-control-feedback glyphicon_bump" aria-hidden="true"></span>
                    </div>
                </div>
                <div v-if="error != ''">
                    <span v-text="error" style="color:red; margin-left:10px; "></span>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <button id="button_import" type="button" class="btn btn-default" style="color: #317dcd;">
                            <span class="glyphicon glyphicon-export" aria-hidden="true" @click="importCreds()">
                                <span style="font-size:4px;">&nbsp;</span>Import
                            </span>
                        </button>
                        <button @click="resetLogin" class="btn btn-default" style="margin-left: 2px;">Reset</button>
                        <button @click="saveLogin" id="button_login"  class="btn btn-default" style="float: right;">Login</button>
                        <button @click="accountSummaryButton" class="btn btn-default" style="float: right; margin-right: 6px;">Account Summary</button>
                    </div>
                </div>


            </div>
            <div id="footer">
                <div id="general_info">For assistance logging in, please click the <img src="./images/icon_gear.png"/> gear icon in your footer.</div>
                <div class="clear_div"></div>
            </div>
        </div>


    </div>
</template>

<script>
import {dataGetter} from "@/datagetter/dataGetter";
export default{
    name:"Login",
    data(){
        return {
        url:'',
        apikey:'',
        error:'',
        }
    },
    created(){
    },
    mixins:[dataGetter],
    methods:{
        accountSummaryButton(){
            if (localStorage.getItem("accounts") == null) {
                this.error = 'There are no available accounts.';
            }
            else
                this.$router.push("/summary/");
        },
        saveLogin(event){
            this.url = this.addHttpIfMissing(this.url);
            let app = this;
            if (!app.getAccountData(app.url,app.apikey))
                this.error = 'An error has occured, please check Url and API Key.';
            else {
                app.getAccountData(app.url,app.apikey)
                .then(
                    function(data){
                        console.log("Here's your account: ",data);
                        app.summary();
                    }
                ).catch(function(data){
                    app.error = data;
                    console.log("Here's your problem: ",data)
                })
            }
        },
        addHttpIfMissing(url){
            let regex = /^http:\/\//;
            if (!regex.test(url))
                return "http://"+url;
            else
                return url;
        },
        resetLogin(){
            //resets form with original data
            Object.assign(this.$data,{
                url:"",
                apikey:"",
            })
        },
        summary(){
            this.$router.push("/summary/");
        },
        importCreds(){
            let app = this;
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                chrome.tabs.sendMessage(
                    tabs[0].id,
                    {action: "import_creds"},
                    function(response) {
                        if (response){
                            app.url = response.affiliateurl
                            app.apikey = response.apikey
                        }
                    }
                );
            });
        },
    },
    computed:{
    },
}
</script>

<style scoped>

</style
