import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import Accounts from '@/components/accounts'
import Summary from '@/components/summary'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path:'/accounts/',
            name:'Accounts',
            component:Accounts,
        },
        {
            path:'/summary/:accountid',
            name:"SummaryWId",
            component:Summary,
        },
        {
            path:'/summary/',
            name:"Summary",
            component:Summary,
        },
    ]
})
