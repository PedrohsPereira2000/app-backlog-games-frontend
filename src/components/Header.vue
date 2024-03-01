<template>
  <header
    class="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600"
  >
    <div class="flex items-center">
    </div>

    <div class="flex items-center justify-end"> <!-- Adicione a classe justify-end para alinhar para a direita -->

      <div class="relative">
        <button
          class="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none"
          @click="dropdownOpen = !dropdownOpen"
        >
          <img
            class="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
            alt="Your avatar"
          >
        </button>

        <div
          v-show="dropdownOpen"
          class="fixed inset-0 z-10 w-full h-full"
          @click="dropdownOpen = false"
        />

        <transition
          enter-active-class="transition duration-150 ease-out transform"
          enter-from-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in transform"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <div
            v-show="dropdownOpen"
            class="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl"
          >
            <router-link
              class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
              :class="[$route.name === 'Profile' ? activeClass : inactiveClass]"
              :to="{ name: 'Profile', params: { user_id: getUserId() } }"
            >
              <button @click="" class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">
                Profile
              </button>
            </router-link>
            <button @click="logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Logout</button>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSidebar } from '../composables/useSidebar'

const dropdownOpen = ref(false)
const { isOpen } = useSidebar()

const activeClass = ref(
  'bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100',
)
const inactiveClass = ref(
  'border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100',
)

const getUserId = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  return user ? user.user_id : null;
}


const logout = () => {
  localStorage.removeItem('user');
  // Redirecionar para a página de login após o logout
  window.location.href = '/';
}
</script>