<style scoped>
  .grayscale {
    filter: grayscale(100%);
  }
</style>

<template>
  <Header :pageTitle="pageTitle" />
  <div class="items-center w-full h-full">
    <h3 class="text-3xl font-medium text-gray-700 mb-4">
      Profile
    </h3>

    <div id="objects" class="flex flex-col items-center justify-center h-full">
      <div class="w-full mb-8 flex items-center justify-center relative">
        <div class="w-40 h-40 rounded-full overflow-hidden mb-4 relative">
          <img
            :src="user.user_photo"
            alt="Foto do usuário"
            class="w-full h-full object-cover transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-50"
          />
          <div class="absolute inset-0 flex flex-col h-full items-center justify-center opacity-0 hover:opacity-100">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
              stroke="white" 
              class="w-12 h-12 text-gray-700 hover:text-gray-900 transition-colors duration-300 ease-in-out cursor-pointer">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
            </svg>
            <p class="text-white">Upload Photo</p>
          </div>
        </div>
      </div>

      <div class="max-w-xl w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <form @submit.prevent="update">
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label class="text-gray-700" for="name">Name</label>
              <input
                v-model="user.user_name"
                class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                type="text"
                id="user_name"
                :readonly="!editMode"
              >
            </div>
            <div>
              <label class="text-gray-700" for="platform">Email</label>
              <input
                v-model="user.user_email"
                class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                type="text"
                id="user_email"
                :readonly="!editMode"
              >
            </div>
            <div>
              <label class="text-gray-700" for="hours">Password</label>
              <input
                v-model="user.user_password"
                class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                :type="passwordFieldType"
                id="user_password"
                :readonly="!editMode"
              >
            </div>
          </div>
          <div class="mt-10 w-full mb-8 flex items-center justify-center relative">
            <button
              type="button"
              class="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-800 text-white mt-2 focus:outline-none"
              @click="toggleEditMode"
            >
              {{ editMode ? 'Save' : 'Edit' }}
            </button>
            <button
                v-if="editMode"
                type="button"
                class="ml-5 px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-800 text-white mt-2 focus:outline-none"
                @click="cancelEdit"
              >
                Cancel
              </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import { onMounted, watch, defineProps } from 'vue'
import axios from 'axios'

const pageTitle = 'Profile'

export default {
  data() {
    return {
      user: {
        user_id: this.$route.params.user_id,
        user_name: null,
        user_email: null,
        user_password: null,
        user_photo: null,
      },
      editMode: false,
    };
  },
  created() {
    this.fetchUserData()
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchUserData()
    next()
  },
  computed: {
    passwordFieldType() {
      return this.editMode ? 'text' : 'password';
    },
  },
  methods: {
    fetchUserData() {
      const storedUser = localStorage.getItem('user')
      if (!storedUser) {
        const userId = this.$route.params.user_id
        axios.get(`http://localhost:5000/user/${userId}/profile`)
          .then(res => {
            this.user.user_id = res.data.Success.user_id
            this.user.user_name = res.data.Success.user_name
            this.user.user_email = res.data.Success.user_email
            this.user.user_password = res.data.Success.user_password
            this.user.user_photo = res.data.Success.user_photo
            this.editMode = false;
          })
          .catch(error => {
            alert(error)
          })

      }
    },
    async editProfile() {
      try {
        const userId = this.$route.params.user_id
        const resp = await axios.post(`http://localhost:5000/user/${userId}/profile/update`, this.user)
        if (resp.status === 200) {
          alert('Profile atualizado com sucesso')
          // this.$router.push({ name: 'ListAllGames', params: { user_id: this.$route.params.user_id } })
        } else {
          this.$message.error(resp.data.message)
        }
      } catch (error) {
        console.error(error)
      }
    },
    toggleEditMode() {
      if(this.editMode === true) {
        this.editProfile()
      }
      this.editMode = !this.editMode;
    },
    cancelEdit() {
      this.editMode = false;
    },
  },
};
</script>