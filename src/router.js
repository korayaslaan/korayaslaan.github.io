import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/HomePage'
import Hasta from './components/Hasta'
import Success from './components/Success'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: HomePage,
            name: 'HomePage'
        },
        {
            path: '/Hasta',
            component: Hasta,
            name: 'Hasta'
        },
        {
            path: '/Success',
            component: Success,
            name: 'Success'
        }
    ]

})