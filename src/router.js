import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import About from './views/About.vue'
import Test from './views/Test.vue'

import NewIn from './views/NewIn.vue'
import Sale from './views/Sale.vue'
import Dress from './views/Dress.vue'
import Top from './views/Top.vue'
import Bottom from './views/Bottom.vue'
import Accessories from './views/Accessories.vue'


import Body from './views/Body.vue'
import ViewA from './views/ViewA.vue'
import ViewB from './views/ViewB.vue'

import top1 from './components/VTops/top1.vue'



Vue.use(Router)

export default new Router({
  routes: [

    {
      path:'/',
      component:Main,
      children:[
        {path:'main', component:Main},
        {path:'test', component:Test},
        {path:'home', component:Home},
        {path:'about', component:About},

        {path:'newin/:id', component:NewIn},
        {path:'sale', component:Sale},
        {path:'dress', component:Dress},
        {path:'top', component:Top},
        {path:'bottom', component:Bottom},
        {path:'accessories', component:Accessories},
        {path:'details/:id', component: top1}

      ]
    },
    {
        path:'/body',
        component:Body,
        children:[
          {path:'', components:{a:ViewA, b:ViewB}}
        ]
    }



  ]
})
