<template>
    <span>
        <div class="metric  metric_small">
            <img :src="image">
        </div>
        <div v-for="metric in metrics" v-bind:class="[
        {metric:true},
        {metric_gradient:true},
        {metric_small:isSmall(metric)},
        {metric_medium:isMedium(metric)},
        {metric_large:isLarge(metric)}
        ]">

            <div class="metric_label" v-text="metric.label">
            </div>

            <div class="metric_value" v-text="metric.value">
            </div>

        </div>
    </span>

</template>

<script>
import {dataGetter} from "@/datagetter/dataGetter";
export default{
    name:"metric",
    mixins:[dataGetter],
    beforeMount(){
    },
    data(){
        return {}
    },
    methods:{
        isSmall(metric){
            return metric.size === "small";
        },
        isMedium(metric){
            return metric.size === "medium";
        },
        isLarge(metric){
            return metric.size === "large";
        },
    },
    computed:{
        metrics(){
            return this.chosenAccount.data;
        },
        image(){
            return this.chosenAccount.url_logo;
        },
    },
}
</script>

<style>
</style>

