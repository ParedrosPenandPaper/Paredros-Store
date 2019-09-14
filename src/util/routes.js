import VueRouter from 'vue-router'

// import routing pages
import home from '../components/Home/Home.vue'
import login from '../components/Login/Login.vue'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: home
        },
        {
            path: '/login',
            component: login
        }
    ]
})