<template>
    <div>
        
    </div>
</template>

<script>
export default{
    name:"Accounts",
    data(){
        return{
            accounts: getAccounts(),
        }
    },
    methods:{
        getAccounts: () => {
            return this.$store.getters.accounts;
        },
    }
}
</script>
<style scoped>
</style>
