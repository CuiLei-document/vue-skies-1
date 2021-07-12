import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFount from '@/views/NotFount.vue';
import EditLabel from '@/views/EditLabel.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect:'/money'
    },
    {
        path: '/money',
        name: 'Money',
        component:Money
    },
    {
        path:'/labels',
        name:'Labels',
        component:Labels
    },
    {
        path:'/statistics',
        name:'Statistic',
        component:Statistics
    },
    {
        path:'/labels/edit/:id',
        name:'EditLabel',
        component:EditLabel
    },
    {
        path:'*',
        component:NotFount
    }
]

const router = new VueRouter({
  routes
})

export default router
