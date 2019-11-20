import Vue from 'vue';
import vueRouter from 'vue-router';
import index from '../views/index';
import search from "../views/search";
Vue.use(vueRouter);
let router = new vueRouter({
    routes:[
        {path: "/",redirect:"/index"},
        {path:"/index",component:index},
        {path:"/search",component:search}
    ]
});
export default  router;