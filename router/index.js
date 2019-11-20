import Vue from 'vue'
import VueRouter from "vue-router"
import my from '../views/my';
Vue.use(VueRouter);

let router=new VueRouter({
    routes:[
        {
            path:'/',
            component:my
        }
    ]
});
export default router;