<template>
    <div>
        <div id="container">
            <div id="header"><img style="height: 20px; width:20px" src="/images/extension-icon-48x48.png"> Login</div>
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
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <button id="button_import" type="button" class="btn btn-default" style="color: #D95E25; display: none;">
                            <span class="glyphicon glyphicon-export" aria-hidden="true"></span> Import
                        </button>
                        <button @click="saveLogin" id="button_login"  class="btn btn-default" style="float: right;">Login</button>
                        <button @click="resetLogin" class="btn btn-default" style="float: right; margin-right: 6px;">Reset</button>
                    </div>
                </div>


            </div>
            <div id="footer">
                <div id="general_info">For assistance logging in, please click the <img src="/images/icon_gear.png"/> gear icon in your footer.</div>
                <div class="clear_div"></div>
            </div>
        </div>


    </div>
</template>

<script>
export default{
    name:"Login",
    data(){
        return {
        url:'',
        apikey:'',
        }
    },
    methods:{
        saveLogin(event){
            this.$store.commit("addAccount",{url:this.url,apikey:this.apikey});
            this.summary();
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
    }
}
</script>

<style scoped>

</style>
