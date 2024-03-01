import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from './views/Dashboard.vue'
import BuyGame from './views/BuyGame.vue'
import EditGame from './views/EditGame.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import PurchasedGames from './views/PurchasedGames.vue'
import PlatinumGames from './views/PlatinumGames.vue'
import ListAllGames from './views/ListAllGames.vue'
import Profile from './views/Profile.vue'

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
    path: '/dashboard/:user_id/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/dashboard/:user_id/list-all-games',
    name: 'ListAllGames',
    component: ListAllGames,
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
  {
    path: '/dashboard/:user_id/platinum-games',
    name: 'PlatinumGames',
    component: PlatinumGames,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
