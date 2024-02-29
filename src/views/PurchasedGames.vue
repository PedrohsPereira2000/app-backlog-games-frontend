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
                  Buy in
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Name
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Price
                </th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr v-for="(game, index) in sortedGames" :key="index">
                <td class="px-30 py-4 border-b border-gray-200 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div class="text-sm font-medium leading-5 text-gray-900">
                        {{ game.buy_in }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap text-center">
                  <div class="text-sm leading-5 text-gray-500">
                    {{ game.name }}
                  </div>
                </td>    
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap text-center">
                  <div class="text-sm leading-5 text-gray-500">
                    {{ game.price }} R$
                  </div>
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

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default {
  components: {
    ModalLayout
  },
  data() {
    return {
      list_buy_games: [],
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
            this.list_buy_games = res.data.Success.list_buy_games
          })
          .catch(error => {
            alert(error)
          })

      }
    },
  },
  computed: {
    sortedGames() {
      if (this.list_buy_games.length === 0) {
        return []; // Retorna uma lista vazia se list_buy_games estiver vazio
      } else {
        return this.list_buy_games.sort((a, b) => {});
      }
    },
  },
};
</script>