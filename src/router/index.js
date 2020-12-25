import Vue from 'vue'
import Router from 'vue-router'

import VueCookies from 'vue-cookies'

const Video = () => import("../views/Video")
const Login = () => import("../views/Login")
const Index = () => import("../views/Index")

Vue.use(Router)   //使用插件
Vue.use(VueCookies)

const router = new Router({
    mode:'history',
    routes: [

        {
            path: '/',
            redirect: "/index"
        },
         {
            path: '/login',
             component: Login
         },
        {
            path: '/index',
            component: Index,
            children:[
                {
                    path: '/video',
                    component: Video,
                    meta:["video:list"]
                },
            ]
        },
    ]

})

//全局路由守卫
// router.beforeEach((to,from,next) => {
// //     //如果用户访问登录页面 或者 cookie中有token 则放行
// //     if(to.path.indexOf("/login")>-1 || VueCookies.get("token")){
// //         next();
// //     }else {
// //         next({path:"/login"});
// //     }
// // })

export default router;