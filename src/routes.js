import Home from './components/Home'
import Menu from './components/Menu'
import Admit from './components/Admit'
import About from './components/about/About'
import Logoing from './components/Logoing'
import Register from './components/Register'

// 二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuaid from './components/about/OrderingGuaid'

// 三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'


export const routes=[
      {path:'/',name:'homeLink',components:{
          default:Home,
          'delivery':Delivery, 
          'history':History,
          'orderingGuaid':OrderingGuaid

      }
      },
      {path:'/menu',name:'menuLink',component:Menu},
      {path:'/admit',name:'admitLink',component:Admit},
      {path:'/about',name:'aboutLink',redirect:'/history',component:About,children:[ {path:'/about/contact',name:'contactLink',component:Contact,children:[{path:'/phone',name:'phoneLink',component:Phone},{path:'/person',name:'personLink',component:PersonName}]},
             {path:'/delivery',name:'deliveryLink',component:Delivery},
             {path:'/history',name:'historyLink',component:History},
             {path:'/orderingGuaid',name:'orderingGuaidLink',component:OrderingGuaid}]},
      {path:'/logoing',name:'logoningLink',component:Logoing},
      {path:'/register',name:'registerLink',component:Register},
      {path:'*',redirect:'/'}
    ]
   
 