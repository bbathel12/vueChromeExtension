<template>
    <div id="app">
        <link href="/assets/styles/reset.css"rel="stylesheet" type="text/css"/>
        <link href="/assets/styles/style.css"rel="stylesheet" type="text/css"/>
        <link href="/assets/styles/jquery/jquery.faloading.min.css"rel="stylesheet" type="text/css"/>
        <link href="/assets/styles/plugins/font-awesome.min.css"rel="stylesheet" type="text/css"/>
        <link href="/assets/styles/bootstrap/bootstrap.css"rel="stylesheet" type="text/css"/>
        <link href="/assets/styles/bootstrap/bootstrap-theme.css"rel="stylesheet" type="text/css"/>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css">
        <router-view/>
    </div>
</template>

<script>
import { store } from './store/store'
export default {
    name: 'App',
    store,
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

</style>
