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
            <p v-if="type_game === 'finished'" class="text-2xl font-bold">
              O {{ props.game?.name }} foi finalizado em quanto tempo?
            </p>
            <p v-else class="text-2xl font-bold">
              Boa quanto tempo levou a platina do {{ props.game?.name }}?
            </p>
          </div>

          <!-- Body -->
          <div>
            <label class="text-gray-700" for="hours">Hours</label>
            <input
              v-model="hours"
              @input="updateHours"
              class="w-13 m-5 mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
              type="number"
              id="hour"
            >
          </div>

          <!-- Footer -->
          <div class="flex justify-end pt-2">
            <button
              class="p-3 px-6 py-3 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400 focus:outline-none"
              @click="closeModal"
            >
              Fechar
            </button>
            <button
              class="px-6 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
              @click="updateGame"
            >
              Atualizar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineProps as defineVueProps} from 'vue' // Renomeando defineProps para evitar conflito
import axios from 'axios'

interface Game {
  id: string,
  name: string,
  platform: string,
  hours: number,
  finished: boolean,
  platinum: boolean,
  price: number
}

const emit = defineEmits(['close', 'game-updated'])

// const gameData = ref<Game>({
//   id: '',
//   name: '',
//   platform: '',
//   hours: 0,
//   finished: false,
//   platinum: false,
//   price: 0
// })

export default {
  props :{
    game: Object as () => Game,
  },
  setup(props) {
    
    const open = ref(true)

    let hours = ref(props.game?.hours ?? 0)

    const updateHours = (event: Event) => {
      hours.value = parseInt((event.target as HTMLInputElement).value)
    }

const updateGame = async () => {
  try {
    props.game.game.hours = parseInt(hours.value)
    const response = await axios.post('https://app-backlog-games-backend-gifaqgqok.vercel.app/backlog/update/progress', {"type": props.game.type, "game": props.game.game, "user_id": props.game.user_id})
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

    const type_game = ref<string>(props.game?.finished ? 'finished' : (props.game?.platinum ? 'platinum' : ''))

    return {
      open,
      props,
      hours,
      updateHours,
      updateGame,
      closeModal,
      type_game
    }
  }
}
</script>

<style>
.modal {
  transition: opacity 0.25s ease;
}
</style>