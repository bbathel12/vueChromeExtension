<template>
    <div id="app">
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
    text-align: left;
    color: #2c3e50;
}

</style>
