<template>
    <span>
        <div v-for="metric in data.data" v-bind:class="[
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
export default{
    name:"metric",
    props:["data"],
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
}
</script>

<style>
</style>

