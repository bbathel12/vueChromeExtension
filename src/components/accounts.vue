<template>
    <div>
        <h1>Accounts</h1>
        <div v-for="account in accounts">
            <account :account="account"></account>
        </div>
    </div>
</template>

<script>
import account from "@/components/account"
export default{
    name:"Accounts",
    components:{
        account
    },
    data(){
        return{
        }
    },
    computed:{
        accounts(){
            console.log("gettin' accounts");
            return this.$store.getters.accounts;
        },
    }
}
</script>
<style scoped>
</style>
