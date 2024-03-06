<template>
  <div>
    <div
      :class="`modal ${
        !open && 'opacity-0 pointer-events-none'
      } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
    >
      <div
        class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
        @click="closeModal"
      />

      <div
        class="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md"
      >
        <div
          class="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close"
          @click="closeModal"
        >
          <svg
            class="text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            />
          </svg>
          <span class="text-sm">(Esc)</span>
        </div>

        <!-- Add margin if you want to see some of the overlay behind the modal -->
        <div class="px-6 py-4 text-left modal-content">
          <!-- Title -->
          <div class="flex items-center pb-3">
            <p v-if="game.type === 'finished'" class="text-2xl font-bold">
              O {{ game.game.name }} foi finalizado em quanto tempo?
            </p>
            <p v-else-if="game.type === 'delete'" class="text-2xl font-bold">
              Deseja realmente excluir o jogo {{ game.game.name }} do backlog?
            </p>
            <p v-if="game.type === 'platinum'" class="text-2xl font-bold">
              Boa quanto tempo levou a platina do {{ game.game.name }}?
            </p>
          </div>
          <!-- Footer -->
          <div class="flex justify-end pt-2">
            <button
              class="p-3 px-6 py-3 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400 focus:outline-none"
              @click="closeModal"
            >
              Fechar
            </button>
            <button v-if="game.type === 'finished' || game.type === 'platinum'"
              class="px-6 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
              @click="updateGame"
            >
              Atualizar
            </button>
            <button v-if="game.type === 'delete'"
              class="px-6 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
              @click="deleteGame"
            >
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import axios from 'axios'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const open = ref(true)

const emit = defineEmits(['close', 'game-updated'])

const props = defineProps({
  game: Object,
})

const updateGame = async () => {
  try {
    const response = await axios.post('http://localhost:5000/dashboard/update/progress', {"type": props.game.type, "game": props.game.game, "user_id": props.game.user_id})
    console.log(response.data)
    emit('game-updated')
    location.reload()
    closeModal()
  } catch (error) {
    console.error(error)
  }
}

const closeModal = () => {
  emit('close')
}

const deleteGame = async () => {
  const userId = props.game.user_id
  const res = await axios.post(`http://localhost:5000/dashboard/${userId}/delete`, { id: props.game.game.id })
  if (res.status === 200) {
    location.reload()
    closeModal()
  }
}

</script>

<style>
.modal {
  transition: opacity 0.25s ease;
}
</style>