import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from './views/Dashboard.vue'
import AddGame from './views/AddGame.vue'
import EditGame from './views/EditGame.vue'
import Login from './views/Login.vue'
import Modal from './views/Modal.vue'
import Register from './views/Register.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { layout: 'empty' },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { layout: 'empty' },
  },
  {
    path: '/dashboard/:user_id',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/dashboard/:user_id/add-game',
    name: 'AddGame',
    component: AddGame,
  },
  {
    path: '/dashboard/:user_id/:game_id/edit-game',
    name: 'EditGame',
    component: EditGame,
  },
  {
    path: '/modal',
    name: 'Modal',
    component: Modal,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
