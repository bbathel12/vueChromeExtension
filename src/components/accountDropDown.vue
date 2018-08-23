<template>
    <span>
        <select @change="followLink" >
            <option
                v-for="account in accounts"
                v-if="account.network_name != undefined"
                :value="account.apikey"
                v-text="account.network_name">
            </option>
        </select>
    </span>
</template>

<script>
export default{
    name:"accountDropDown",
    data(){
        return {};
    },
    props:["accounts"],
    methods:{
        followLink(e){
            this.$router.push(
                {
                    name:"SummaryWId",
                    params:{
                        accountid:e.target.value
                    }
                }
            );
            this.$emit('linkfollow');
        },
    },
}
</script>

<style>
</style>
