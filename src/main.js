// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/styles/reset.css";
import "./assets/styles/style.css";
import "./assets/styles/jquery/jquery.faloading.min.css";
import "./assets/styles/plugins/font-awesome.min.css";
import "./assets/styles/bootstrap/bootstrap.css";
import "./assets/styles/bootstrap/bootstrap-theme.css";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    render: c => c(App),
    template: '<App/>'
})
