<template>
    <div>
        <label>URL:
            <input v-model="url" type="text">
        </label>

        <label>API Key:
            <input v-model="apikey" type="text">
        </label>

        <input @click="saveLogin" type="submit" value="lalalalal">
    </div>
</template>

<script>
export default{
    name:"Login",
    data(){
        return {
        url:'',
        apikey:'',
        sync:localStorage,
        }
    },
    methods:{
        saveLogin(event){
            this.$store.commit("addAccount",{url:this.url,apikey:this.apikey});
            var accts = this.$store.getters.accounts;
            this.sync.setItem("accounts",JSON.stringify(accts));
        },
    }
}
</script>

<style scoped>

</style>
