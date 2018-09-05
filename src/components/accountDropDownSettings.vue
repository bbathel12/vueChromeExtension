<template>
    <span>
        <select @change="followLink" >
            <option
                v-for="account in allNamedAccounts"
                v-if="account.network_name != undefined"
                :value="account.apikey"
                v-text="account.network_name">
            </option>
        </select>
    </span>
</template>

<script>
import {dataGetter} from "@/datagetter/dataGetter";

export default{
    name:"accountDropDownSettings",
    mixins:[dataGetter],
    data(){
        return {};
    },
    methods:{
        followLink(e){
            this.$router.push(
                {
                    name:"SettingsWId",
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
