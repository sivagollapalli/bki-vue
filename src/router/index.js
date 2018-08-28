import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import UserList from '@/components/UserList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/users',
      name: 'UserList',
      component: UserList
    }
  ]
})
