import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import User from '../views/user/User'
import Home from '../views/home/Home'
import Mall from '../views/mall/Mall'
import Other from '../views/other/Other'
import Login from '../views/login/Login'

Vue.use(VueRouter)

// 多次点击路由跳转，防止报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


const router = new VueRouter({
    mode: 'history',
    routes: [{
            name: 'Main',
            path: '/',
            component: Main,
            children: [{
                    name: 'home',
                    path: '/home',
                    component: Home
                },
                {
                    name: 'user',
                    path: '/user',
                    component: User
                },
                {
                    name: 'mall',
                    path: '/mall',
                    component: Mall
                },
                {
                    name: 'other',
                    path: '/other',
                    component: Other
                }
            ]
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        }
    ]

})
export default router