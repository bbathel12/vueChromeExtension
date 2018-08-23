<template>
    <div v-bind:class="[
        {metric:true},
        {metric_gradient:true},
        {metric_small:isSmall},
        {metric_medium:isMedium},
        {metric_large:isLarge}
        ]">

        <div class="metric_label" v-text="metric.label">
        </div>

        <div class="metric_value" v-text="metric.value">
        </div>

    </div>

</template>

<script>
export default{
    name:"metric",
    props:["metric"],
    data(){
        return {}
    },
    computed:{
        isSmall(){
            return this.metric.size === "small";
        },
        isMedium(){
            return this.metric.size === "medium";
        },
        isLarge(){
            return this.metric.size === "large";
        },
    },
}
</script>

<style>
</style>

