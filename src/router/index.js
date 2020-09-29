import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from "../components/Index/Index";   //首页
import Login from "../components/User/Login";   //登录
import Reg from "../components/User/Reg";   //注册
import GoodsList from "../components/Goods/GoodsList";   //商品列表
import Product from "../components/Goods/Product";   //商品详情
import AddCar from "../components/BuyCar/AddCar";   //购物车列表（确认结算）
import Order from "../components/BuyCar/Order";   //订单信息（确认订单）
import OrderSuccess from "../components/BuyCar/OrderSuccess";   //提交订单
import User from "../components/UserCenter/User";   //个人信息
import UserCollect from "../components/UserCenter/UserCollect";   //我的收藏
import UserOrder from "../components/UserCenter/UserOrder";   //我的订单
import UserAddress from "../components/UserCenter/UserAddress";   //收货地址


Vue.use(Router)

export default new Router({
  // mode: 'history',  //去掉url中的#
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/reg',
      name: 'Reg',
      component: Reg
    },{
      path: '/goodsList',
      name: 'GoodsList',
      component: GoodsList
    },{
      path: '/product',
      name: 'Product',
      component: Product
    },{
      path: '/addCar',
      name: 'AddCar',
      component: AddCar
    },{
      path: '/order',
      name: 'Order',
      component: Order
    },{
      path: '/orderSuccess',
      name: 'OrderSuccess',
      component: OrderSuccess
    },{
      path: '/user',
      name: 'User',
      component: User
    },{
      path: '/userCollect',
      name: 'UserCollect',
      component: UserCollect
    },{
      path: '/userOrder',
      name: 'UserOrder',
      component: UserOrder
    },{
      path: '/userAddress',
      name: 'UserAddress',
      component: UserAddress
    },
  ]
})
