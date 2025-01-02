<template>
  <main>
    <GlobalLoading v-if="loading" />
    <template v-else>
      <router-view />
      <PrimeVueToast />
      <ToastModal />
    </template>
  </main>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { useUserStore, useHomeStore, useToastStore } from '@/stores'
import { gtka } from '@/helpers/localStorageHelper'
import { getUserProfile } from '@/webServices/userService'
import { getCart } from '@/webServices/cartService'

import PrimeVueToast from '@/components/Toast/PrimeVueToast.vue'
import GlobalLoading from '@/components/Loading/GlobalLoading.vue'
import ToastModal from './components/Toast/ToastModal.vue'

export default defineComponent({
  components: { GlobalLoading, PrimeVueToast, ToastModal },
  setup() {
    const userStore = useUserStore()
    const homeStore = useHomeStore()

    const loading = ref(false)

    return {
      homeStore,
      userStore,
      loading
    }
  },
  methods: {
    async loadData() {
      this.loading = true

      const accToken = gtka()

      const userPromise = accToken
        ? Promise.all([getUserProfile()]).then(([profile]) => ({
            success: true,
            user: profile.userDTO
          }))
        : Promise.resolve(null)

      const [userData] = await Promise.all([userPromise])

      console.log(userData)

      if (userData?.success) {
        this.userStore.setUser(userData?.user)
      }

      this.loading = false
    }
  },
  created() {
    this.loadData()
  }
})
</script>

<style scoped></style>
