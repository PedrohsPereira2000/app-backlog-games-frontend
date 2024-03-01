<style scoped>
  .grayscale {
    filter: grayscale(100%);
  }
</style>

<template>
  <div>
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
                    <img :src="game.finished ? '/trophy-gold.svg' : '/trophy-gold-grayscale.svg'" alt="Trophy Gold" width="25" height="25">
                  </span>
                </td>

                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap text-center">
                  <span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 rounded-full">
                    <img :src="game.platinum ? '/trophy-platinum.svg' : '/trophy-platinum-grayscale.svg'" alt="Trophy Platinum" width="25" height="25">
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
                  @click.prevent="openModal(game, 'delete')">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, watch, defineProps } from 'vue'
import axios from 'axios'
import ModalLayout from '../components/ModalLayout.vue'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

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
        axios.get(`http://localhost:5000/user/${userId}`)
          .then(res => {
            this.user_id = res.data.Success.user_id
            this.user_name = res.data.Success.user_name
            this.user_email = res.data.Success.user_email
            this.backlog_games = res.data.Success.backlog_games
            this.list_buy_games = res.data.Success.list_buy_games
            this.wallet = res.data.Success.wallet
            this.finisheds = this.backlog_games.filter(game => game.finished).length;
            this.platinums = this.backlog_games.filter(game => game.platinum).length;
            this.inBacklog = this.backlog_games.length - this.finisheds;
          })
          .catch(error => {
            alert(error)
          })

      }
    },
    openModal(game, type) {
      if ((type === "finished" && !game.finished) || (type === "platinum" && !game.platinum)){
        this.currentGame = { game, type, user_id: this.user_id };
        this.isModalOpen = true;
      } else if (type === "delete") {
        this.currentGame = { game, type, user_id: this.user_id };
        this.isModalOpen = true;
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