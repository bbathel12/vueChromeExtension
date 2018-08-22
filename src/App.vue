<template>
    <div id="app">
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
