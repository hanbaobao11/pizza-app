import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { routes } from './routes'


Vue.use(VueRouter)
Vue.use(VueResource)

const router=new VueRouter({
  routes,
  model:'history',
  scrollBehavior(to,form,savedPosition){
    // return{x:0,y:100}
    // return {selector:'.btn'}
    if(savedPosition){
      return savedPosition
    }else{
      return {x:0,y:0}
    }
  }
})
// router.beforeEach((to,from,next)=>{
//   if(to.path=='./logoing'||to.path=='/register'){
//     next();
//   }else{
//     alert('还没有登录，请先登录');
//     next('./logoing');
//   }
// })

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
