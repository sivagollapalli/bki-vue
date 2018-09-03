import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import UserList from '@/components/UserList'
import NewUser from '@/components/NewUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users/sign_in',
      name: 'Login',
      component: Login
    },
    {
      path: '/users',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/users/new',
      name: 'NewUser',
      component: NewUser
    }
  ]
})
