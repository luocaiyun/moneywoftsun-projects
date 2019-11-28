import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../src/views/login'
import Register from '../src/views/register'
import setPass from '../src/views/setPass'


Vue.use(VueRouter)

let router = new VueRouter({
    routes:[
        {path:"/login",component:Login},
        {path:"/reg",component:Register},
        {path:"/set",component:setPass}
        // {path:"/set",component:setPass}
    ]
})


export default router
aaaa