<template>
  <div>
    <h3 class="text-3xl font-semibold text-gray-700">
      Adicionar jogo ao Backlog
    </h3>

    <div class="mt-8">

      <div class="mt-4">
        <div class="p-6 bg-white rounded-md shadow-md">
          <h2 class="text-lg font-semibold text-gray-700 capitalize">
            Informações do jogo
          </h2>

          <form @submit.prevent="update">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700" for="name">ID</label>
                <input
                  v-model="game.id"
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="text"
                  id="id"
                >
              </div>
              <div>
                <label class="text-gray-700" for="name">Name</label>
                <input
                  v-model="game.name"
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="text"
                  id="name"
                >
              </div>

              <div>
                <label class="text-gray-700" for="platform">Platform</label>
                <input
                  v-model="game.platform"
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="text"
                  id="platform"
                >
              </div>

              <div>
                <label class="text-gray-700" for="hours">Hours</label>
                <input
                  v-model="game.hours"
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="text"
                  id="hour"
                >
              </div>

              <div>
                <label class="text-gray-700" for="finished">Finished</label>
                <input
                  v-model="game.finished"
                  class="w-4 mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="checkbox"
                  id="finished"
                >
              </div>

              <div>
                <label class="text-gray-700" for="platinum">Platinum</label>
                <input
                  v-model="game.platinum"
                  class="w-4 mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="checkbox"
                  id="platinum"
                >
              </div>

              <div>
                <label class="text-gray-700" for="price">Price</label>
                <input
                  v-model="game.price"
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="text"
                  id="price"
                >
              </div>
            </div>

            <div class="flex justify-end mt-4">
              <button class="px-4 m-1 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700" 
                @click="cancel">
              Cancel
              </button>
              <button class="px-4 m-1 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700" 
              @click="saveGame">
              Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'

export default {
  data() {
    return {
      game: null
    }
  },
  async created() {
    const userId = this.$route.params.user_id
    const gameId = this.$route.params.game_id

    try {
      const response = await axios.post(`http://localhost:5000/dashboard/${userId}/search`, { user_id: userId, id: gameId })
      this.game = response.data.game
    } catch (error) {
      console.error(error)
    }
  },
  methods: {
    cancel() {
      this.$router.push({ name: 'Dashboard', params: { user_id: this.$route.params.user_id } })
    },
    async saveGame() {
      try {
        const resp = await axios.post(`http://localhost:5000/dashboard/${userId}/update`, {"user_id": this.$route.params.user_id, "game": this.game})
        if (resp.status === 200) {
          // this.$message.success('Game updated successfully')
          this.$router.push({ name: 'Dashboard', params: { user_id: this.$route.params.user_id } })
        } else {
          this.$message.error(resp.data.message)
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>