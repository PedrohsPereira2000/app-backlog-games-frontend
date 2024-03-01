<style scoped>
  .grayscale {
    filter: grayscale(100%);
  }
</style>

<template>
  <div>
    <h3 class="text-3xl font-medium text-gray-700">
      Profile
    </h3>

    <div class="mt-4">
      <div class="flex flex-wrap -mx-6">

        <form @submit.prevent="update">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                <label class="text-gray-700" for="name">Name</label>
                <input
                    v-model="user_name"
                    class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                    type="text"
                    id="user_name"
                >
                </div>

                <div>
                <label class="text-gray-700" for="platform">Email</label>
                <input
                    v-model="user_email"
                    class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                    type="text"
                    id="user_email"
                >
                </div>

                <div>
                <label class="text-gray-700" for="hours">Password</label>
                <input
                    v-model="user_password"
                    class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                    type="password"
                    id="user_password"
                    readonly
                >
                </div>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, watch, defineProps } from 'vue'
import axios from 'axios'

export default {
  data() {
    return {
      user_id: this.$route.params.user_id,
      user_name: null,
      user_email: null,
      user_password: null,
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
        axios.get(`http://localhost:5000/user/${userId}/profile`)
          .then(res => {
            this.user_id = res.data.Success.user_id
            this.user_name = res.data.Success.user_name
            this.user_email = res.data.Success.user_email
            this.user_password = res.data.Success.user_password
          })
          .catch(error => {
            alert(error)
          })

      }
    }
  },
};
</script>