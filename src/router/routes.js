import Home from '../views/Home.vue'
import Login from '../views/Login'
import Checkout from '../views/Checkout'
import Payment from '../views/Payment'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment,
    meta: {
      requiresAuth: true
    }
  }
];

export default routes;