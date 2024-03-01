<style scoped>
  .grayscale {
    filter: grayscale(100%);
  }
</style>
<template>
  <div>
    <h3 class="text-3xl font-medium text-gray-700">
      Purchased Games
    </h3>

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
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Earned
                </th>
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

                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap text-center">
                  <div class="text-sm leading-5 text-gray-900">
                    {{ game.earned }} R$
                  </div>
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
      backlog_games: [],
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
            this.backlog_games = res.data.Success.backlog_games
          })
          .catch(error => {
            alert(error)
          })

      }
    },
  },
  computed: {
    sortedGames() {
      if (this.backlog_games.length === 0) {
        return []; // Retorna uma lista vazia se list_buy_games estiver vazio
      } else {
        // Filtrar os jogos para mostrar apenas aqueles em que o campo 'platinum' é igual a false
        const filteredGames = this.backlog_games.filter(game => game.platinum === true);

        // Ordenar os jogos filtrados
        return filteredGames.sort((a, b) => {
          // Ordenar por 'finished'
          if (!a.platinum && (b.platinum)) return -1;
          if (a.platinum && b.platinum === false) return 1;

          // Se 'platinum' for igual, ordenar por plataforma
          if (a.platinum === b.platinum) {
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
      }
    },
  },
};
</script>