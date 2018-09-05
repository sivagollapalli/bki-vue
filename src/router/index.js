import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import UserList from '@/components/UserList'
import NewUser from '@/components/NewUser'

Vue.use(Router)

const router = new Router({
  routes: [ 
    { path: '/users', name: 'UserList', component: UserList, meta: { requiresAuth: true } },
    { path: '/users/new', name: 'NewUser', component: NewUser, meta: { requiresAuth: true } },
    { path: '/users/sign_in', name: 'Login', component: Login }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.token) {
      next({
        path: '/users/sign_in'
      });
    } else {
      next();
    }
  } else {
    next();
  }
  next()
})

export default router