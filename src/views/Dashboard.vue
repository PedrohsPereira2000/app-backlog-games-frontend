<style scoped>
  .grayscale {
    filter: grayscale(100%);
  }
</style>

<template>
  <div>
    <h3 class="text-3xl font-medium text-gray-700">
      Dashboard
    </h3>

    <div class="mt-4">
      <div class="flex flex-wrap -mx-6">
        <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <div class="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                class="w-8 h-8 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
              </svg>
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">
                {{inBacklog}}
              </h4>
              <div class="text-gray-500">
                Jogos no Backlog
              </div>
            </div>
          </div>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <div class="p-3 bg-red-700 bg-opacity-75 rounded-full">
              <svg
                class="w-8 h-8 text-white"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z"
                  fill="currentColor"
                />
                <path
                  d="M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z"
                  fill="currentColor"
                />
                <path
                  d="M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">
                {{list_buy_games.length}}
              </h4>
              <div class="text-gray-500">
                Jogos Comprados
              </div>
            </div>
          </div>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
          <div class="p-3 bg-pink-600 bg-opacity-75 rounded-full">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="w-8 h-8 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
            </svg>
          </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">
                R$ {{wallet}},00
              </h4>
              <div class="text-gray-500">
                Caixa Disponível
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <div class="flex flex-wrap -mx-6">
        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <div class="p-3 bg-gold bg-opacity-75 rounded-full">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                class="w-8 h-8 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
              </svg>
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">
                {{finisheds}}
              </h4>
              <div class="text-gray-500">
                Jogos Zerados
              </div>
            </div>
          </div>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
          <div class="p-3 bg-plat bg-opacity-75 rounded-full">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="w-8 h-8 text-white">>
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
            </svg>
          </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">
                {{platinums}}
              </h4>
              <div class="text-gray-500">
                Jogos Platinados
              </div>
            </div>
          </div>
        </div>

        <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
          <router-link :to="`/dashboard/${user_id}/add-game`">
            <div
              class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
            >
              <div class="p-3 bg-green-400 bg-opacity-75 rounded-full">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke-width="1.5" 
                  stroke="currentColor" 
                  class="w-8 h-8 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

              </div>

              <div class="mx-5">
                <div class="text-gray-500">
                  Adicionar jogo ao backlog
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>


    <div class="flex flex-col mt-8">
      <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div
          class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
        >
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Name
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Hours
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Zerado
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Platinado
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-right" />
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-right" />
              </tr>
            </thead>

            <tbody class="bg-white">
              <tr v-for="(game, index) in sortedGames" :key="index">
                <td class="px-30 py-4 border-b border-gray-200 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div class="text-sm font-medium leading-5 text-gray-900">
                        {{ game.name }}
                      </div>
                      <div class="text-sm leading-5 text-gray-500">
                        {{ game.platform }}
                      </div>
                    </div>
                  </div>
                </td>

                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap text-center">
                  <div class="text-sm leading-5 text-gray-900">
                    {{ game.hours }}
                  </div>
                </td>

                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap text-center">
                  <span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 rounded-full">
                    <button @click="openModal(game, 'finished')" class="text-white font-bold py-2 px-4 rounded-full">
                      <img :src="game.finished ? '/trophy-gold.svg' : '/trophy-gold-grayscale.svg'" alt="Trophy Gold" width="25" height="25">
                    </button>
                  </span>
                </td>

                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap text-center">
                  <span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 rounded-full">
                    <button @click="openModal(game, 'platinum')" class="text-white font-bold py-2 px-4 rounded-full">
                      <img :src="game.platinum ? '/trophy-platinum.svg' : '/trophy-platinum-grayscale.svg'" alt="Trophy Platinum" width="25" height="25">
                    </button>
                  </span>
                </td>


                <td class="px-6 py-4 font-medium leading-5 border-b border-gray-200 whitespace-nowrap text-right">
                  <router-link :to="`/dashboard/${user_id}/${game.id}/edit-game`">
                    <svg
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke-width="1.5"
                      stroke="currentColor" 
                      class="w-8 h-8"
                      color="black">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                  </router-link>
                </td>
                <td class="px-6 py-4 font-medium leading-5 border-b border-gray-200 whitespace-nowrap text-right">
                  <a class="text-indigo-600 hover:text-indigo-900"
                  @click.prevent="deleteGame(game.id)">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke-width="1.5" 
                      stroke="currentColor" 
                      class="w-8 h-8 text-black">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <ModalLayout v-if="isModalOpen" @close="isModalOpen = false" :game="currentGame" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, watch, defineProps } from 'vue'
import axios from 'axios'
import ModalLayout from '../components/ModalLayout.vue'


export default {
  components: {
    ModalLayout
  },
  data() {
    return {
      isModalOpen: false,
      user_id: this.$route.params.user_id,
      user_name: null,
      user_email: null,
      backlog_games: [],
      list_buy_games: [],
      wallet: 0,
      finisheds: 0,
      platinums: 0,
      inBacklog: 0,
    };
  },
  created() {
    this.fetchUserData()
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchUserData()
    next()
  },
  methods: {
    fetchUserData() {
      const storedUser = localStorage.getItem('user')
      if (!storedUser) {
        const userId = this.$route.params.user_id
        axios.get(`https://app-backlog-games-backend-gifaqgqok.vercel.app/user/${userId}`)
          .then(res => {
            this.user_id = res.data.user.user_id
            this.user_name = res.data.user.user_name
            this.user_email = res.data.user.user_email
            this.backlog_games = res.data.user.backlog_games
            this.list_buy_games = res.data.user.list_buy_games
            this.wallet = res.data.user.wallet
            this.finisheds = this.backlog_games.filter(game => game.finished).length;
            this.platinums = this.backlog_games.filter(game => game.platinum).length;
            this.inBacklog = this.backlog_games.length - this.platinums;
          })
      }
    },
    openModal(game, type) {
      if ((type === "finished" && !game.finished) || (type === "platinum" && !game.platinum)){
        this.currentGame = { game, type, user_id: this.user_id};
        this.isModalOpen = true;
      }
    },
    async deleteGame(gameId) {
      const res = await axios.post('https://app-backlog-games-backend-gifaqgqok.vercel.app/backlog/delete', { id: gameId, user_id: this.user_id })
      if (res.status === 200) {
        this.fetchUserData()
      }
    },
  },
  computed: {
    sortedGames() {
      return this.backlog_games.sort((a, b) => {
        // Ordenar por 'finished' e 'platinum'
        if (!a.finished && !a.platinum && (b.finished || b.platinum)) return -1;
        if (a.finished && !a.platinum && b.platinum) return -1;
        if (a.finished === b.finished && a.platinum === b.platinum) {
          // Se 'finished' e 'platinum' forem iguais, ordenar por plataforma
          if (a.platform.toLowerCase() < b.platform.toLowerCase()) return -1;
          if (a.platform.toLowerCase() > b.platform.toLowerCase()) return 1;
          // Se a plataforma for igual, ordenar por nome
          if (a.platform.toLowerCase() === b.platform.toLowerCase()) {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          }
          return 0;
        }
        return 1;
      });
    },
  },
};
</script>