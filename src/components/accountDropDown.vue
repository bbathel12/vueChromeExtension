<template>
    <span>
        <select @change="followLink" class="form-control">
            <option
                v-for="account in allNamedAccounts"
                v-if="account.network_name != undefined"
                :selected ="selected(account.apikey)"
                :value="account.apikey"
                v-text="account.network_name">
            </option>
        </select>
    </span>
</template>

<script>
import {dataGetter} from "@/datagetter/dataGetter";

export default{
    name:"accountDropDown",
    mixins:[dataGetter],
    data(){
        return {};
    },
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
        selected(apikey){
            if (this.chosenAccount.apikey == apikey){
                return "selected";
            }else{
                return "";
            }
        },
    },
}
</script>

<style>
</style>
