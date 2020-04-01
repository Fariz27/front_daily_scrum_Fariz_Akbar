import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import NavBar from '../layouts/NavBar.vue'

import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Daily from '../views/Daily.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Daily',
    components: {default:Daily, header:NavBar},
    meta: { 
      requiresAuth: true
    }
    
  },
  {
    path: '/login',
    name: 'Login',
    components: {default:Login}
  },
  {
    path: '/register',
    name: 'Register',
    components: {default:Register}
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router