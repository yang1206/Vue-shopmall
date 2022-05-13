import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const Home = () =>  import ('../views/home/Home.vue')
const Category = () =>  import ('../views/category/Category.vue') 
const Cart = () =>  import ('../views/cart/Cart.vue') 
const Profile = () =>  import ('../views/profile/Profile.vue') 
const Detail = () => import ('../views/detail/Detail.vue')

const routes = [
  {
    path: '',
    redirect: '/home/'
  },
  {
    path: '/home',
    component:Home,
    meta:{
      show:true,
      title:'首页'
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      show: true,
      title: '分类'
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      show: true,
      title: '购物车'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      show: true,
      title: '个人中心'
    }
  },
  {
    path: '/detail/:iid',
    component: Detail,
    meta: {
      title: 'Supermall'
    }
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
