<template>
    <div id="app">
        <link href="/assets/styles/reset.css"rel="stylesheet" type="text/css"/>
        <link href="/assets/styles/style.css"rel="stylesheet" type="text/css"/>
        <link href="/assets/styles/jquery/jquery.faloading.min.css"rel="stylesheet" type="text/css"/>
        <link href="/assets/styles/plugins/font-awesome.min.css"rel="stylesheet" type="text/css"/>
        <link href="/assets/styles/bootstrap/bootstrap.css"rel="stylesheet" type="text/css"/>
        <link href="/assets/styles/bootstrap/bootstrap-theme.css"rel="stylesheet" type="text/css"/>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css">
        <router-link to="/summary/4daccb2304794d8de605aa382b1001520bfee97b76b5183a/">SUMMARY TEST</router-link>
        <router-link to="/accounts">accounts</router-link>
        <router-link to="/">Login</router-link>
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
