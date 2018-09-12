import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import Accounts from '@/components/accounts'
import Summary from '@/components/accountSummary'
import Settings from '@/components/settings'
import Removed from '@/components/removed'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'Login',
            component:Login
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
            path:'/',
            name:"Summary",
            component:Summary,
        },
        {
            path: '/settings/',
            name: 'Settings',
            component:Settings
        },
        {
            path:'/settings/:accountid',
            name:"SettingsWId",
            component:Settings,
        },
        {
            path:'/removed/:accountid',
            name:"RemovedWId",
            component:Removed,
        },
    ]
})
