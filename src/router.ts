import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from './views/Dashboard.vue'
import Tables from './views/Tables.vue'
import BuyGame from './views/BuyGame.vue'
import EditGame from './views/EditGame.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import PurchasedGames from './views/PurchasedGames.vue'

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
    path: '/dashboard/:user_id/purchased-games',
    name: 'PurchasedGames',
    component: PurchasedGames,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
