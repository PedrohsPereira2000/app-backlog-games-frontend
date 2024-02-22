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

          <form @submit.prevent="cadastrar">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
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
                <select
                  v-model="game.platform"
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  id="platform"
                >
                  <option value="PS3">PS3</option>
                  <option value="PS4">PS4</option>
                  <option value="PS5">PS5</option>
                  <option value="PC">PC</option>
                </select>
              </div>
            </div>

            <div class="flex justify-end mt-4">
              <button
                class="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              >
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

const game = ref({
  name: '',
  platform: '',
});

const router = useRouter()
const user_id = router.currentRoute.value.params.user_id

async function cadastrar() {
  
  if (!user_id) {
    console.error('No user found in localStorage')
    return
  }

  const data = {
    user_id: user_id,
    game: {
      id: 0,
      name: game.value.name,
      platform: game.value.platform,
      hours: 0,
      finished: false,
      platinum: false,
      price: 0.0,
    }
  }
 
  try {
    const response = await axios.post(`${process.env.VUE_APP_BACKEND_URL}/backlog/register`, data)
    if (response.status === 201) {
      router.push({ name: 'Dashboard', params: { user_id: user_id } })
    } else {
      alert(response.data.message)
    }
  } catch (error) {
    console.error(error)
  }
}

export default {
  setup() {
    return {
      game,
      cadastrar
    }
  }
}
</script>