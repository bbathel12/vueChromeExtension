<template>
    <div>
        <div v-text="account.apikey" style="display:inline-block;width:40%"></div>
        <div v-text="account.url" style="display:inline-block;width:40%"></div>
    </div>
</template>

<script>

export default{
    name:"Account",
    props:['account'],
    data(){
        return {};
    },
}

</script>
