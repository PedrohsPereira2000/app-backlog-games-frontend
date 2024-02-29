import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from './views/Dashboard.vue'
import Tables from './views/Tables.vue'
import AddGame from './views/AddGame.vue'
import BuyGame from './views/BuyGame.vue'
import EditGame from './views/EditGame.vue'
import UIElements from './views/UIElements.vue'
import Login from './views/Login.vue'
import Modal from './views/Modal.vue'
import Card from './views/Card.vue'
import Blank from './views/Blank.vue'
import Register from './views/Register.vue'
import RecoverPassword from './views/RecoverPassword.vue'

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
    path: '/recover-password',
    name: 'RecoverPassword',
    component: RecoverPassword,
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
    path: '/dashboard/:user_id/buy-game',
    name: 'BuyGame',
    component: BuyGame,
  },
  {
    path: '/dashboard/:user_id/:game_id/edit-game',
    name: 'EditGame',
    component: EditGame,
  },
  {
    path: '/cards',
    name: 'Cards',
    component: Card,
  },
  {
    path: '/tables',
    name: 'Tables',
    component: Tables,
  },
  {
    path: '/ui-elements',
    name: 'UIElements',
    component: UIElements,
  },
  {
    path: '/modal',
    name: 'Modal',
    component: Modal,
  },
  {
    path: '/blank',
    name: 'Blank',
    component: Blank,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
