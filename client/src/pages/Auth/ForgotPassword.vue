<template>
  <div class="w-full max-w-[960px] mx-4">
    <div class="rounded-xl shadow-shadow07 overflow-hidden">
      <div class="grid grid-cols-12">
        <div class="hidden md:block p-6 col-span-6 bg-primaryColor">
          <div>
            <router-link :to="{ name: 'home' }" class="text-whiteColor flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="36" viewBox="0 0 117 31" fill="currentColor">
                <path
                  class="tokoo-svg"
                  d="M24.471,26.8L22.72,6.809a0.847,0.847,0,0,0-.838-0.78h-3.6a6.041,6.041,0,0,0-12.083,0H2.6a0.843,0.843,0,0,0-.838.78L0.006,26.8c0,0.026-.006.05-0.006,0.076A4.381,4.381,0,0,0,4.59,31h15.3a4.381,4.381,0,0,0,4.59-4.126A0.309,0.309,0,0,0,24.471,26.8ZM12.239,1.712a4.386,4.386,0,0,1,4.353,4.317H7.886A4.385,4.385,0,0,1,12.239,1.712Zm7.648,27.576H4.59a2.7,2.7,0,0,1-2.9-2.377L3.365,7.747H6.191v2.6a0.844,0.844,0,1,0,1.688,0v-2.6h8.712v2.6a0.844,0.844,0,1,0,1.689,0v-2.6h2.827l1.682,19.164A2.709,2.709,0,0,1,19.887,29.288Zm24.472-.042h1.26a1.533,1.533,0,0,0,1.188-.47,1.766,1.766,0,0,0,0-2.315,1.535,1.535,0,0,0-1.188-.47h-1.26a2.793,2.793,0,0,1-1.962-.543,2.506,2.506,0,0,1-.558-1.844v-8.68h4.393a0.882,0.882,0,0,0,.756-0.416,1.861,1.861,0,0,0,0-1.989,0.883,0.883,0,0,0-.756-0.416H41.839V5.485a1.03,1.03,0,0,0-.594-0.868,2.483,2.483,0,0,0-1.314-.362,2.389,2.389,0,0,0-1.3.362,1.031,1.031,0,0,0-.576.868V23.6q0,5.642,6.3,5.642h0Zm6.877-1.881a7.323,7.323,0,0,0,10.424-.018,6.805,6.805,0,0,0,2.251-5.009V19.011A6.677,6.677,0,0,0,61.679,14,7.521,7.521,0,0,0,51.2,14.02,6.745,6.745,0,0,0,49,19.011v3.327A6.808,6.808,0,0,0,51.237,27.366Zm1.548-8.343a3.683,3.683,0,0,1,1.08-2.587,3.477,3.477,0,0,1,5.167,0,3.653,3.653,0,0,1,1.1,2.587v3.305a3.755,3.755,0,0,1-1.1,2.641,3.442,3.442,0,0,1-5.167,0,3.786,3.786,0,0,1-1.08-2.641V19.022Zm15,9.826a2.1,2.1,0,0,0,1.314.4,2.346,2.346,0,0,0,1.368-.4,1.1,1.1,0,0,0,.576-0.868V23.46l2.629-2.387,5.293,7.848a1.2,1.2,0,0,0,1.008.543,2.166,2.166,0,0,0,1.4-.633,1.761,1.761,0,0,0,.72-1.284,1.17,1.17,0,0,0-.216-0.651l-5.653-8.174,4.645-4.159a1.084,1.084,0,0,0,.324-0.8,1.691,1.691,0,0,0-.612-1.23,1.807,1.807,0,0,0-1.224-.579,1.075,1.075,0,0,0-.792.325l-7.526,6.944V3.134a1.018,1.018,0,0,0-.558-0.886A2.6,2.6,0,0,0,69.1,1.9a2.325,2.325,0,0,0-1.332.344,1.034,1.034,0,0,0-.5.886V27.98A1.108,1.108,0,0,0,67.782,28.848ZM85.7,27.366a7.323,7.323,0,0,0,10.424-.018,6.805,6.805,0,0,0,2.25-5.009V19.011A6.677,6.677,0,0,0,96.137,14a7.521,7.521,0,0,0-10.478.018,6.745,6.745,0,0,0-2.2,4.991v3.327A6.807,6.807,0,0,0,85.7,27.366Zm1.548-8.343a3.683,3.683,0,0,1,1.08-2.587,3.477,3.477,0,0,1,5.167,0,3.654,3.654,0,0,1,1.1,2.587v3.305a3.755,3.755,0,0,1-1.1,2.641,3.442,3.442,0,0,1-5.167,0,3.786,3.786,0,0,1-1.08-2.641V19.022Zm15.987,8.343a7.323,7.323,0,0,0,10.424-.018,6.8,6.8,0,0,0,2.25-5.009V19.011A6.677,6.677,0,0,0,113.673,14a7.521,7.521,0,0,0-10.478.018,6.744,6.744,0,0,0-2.2,4.991v3.327A6.807,6.807,0,0,0,103.231,27.366Zm1.548-8.343a3.683,3.683,0,0,1,1.08-2.587,3.477,3.477,0,0,1,5.167,0,3.653,3.653,0,0,1,1.1,2.587v3.305a3.754,3.754,0,0,1-1.1,2.641,3.442,3.442,0,0,1-5.167,0,3.787,3.787,0,0,1-1.08-2.641V19.022Z"
                ></path>
              </svg>
            </router-link>
            <div class="w-full min-h-[400px] bg-contain bg-center bg-no-repeat" :style="{ backgroundImage: 'url(/src/assets/images/bg-auth-01.jpg)' }"></div>
          </div>
        </div>
        <div class="p-6 col-span-12 md:col-span-6 bg-whiteColor">
          <router-link :to="{ name: 'home' }" class="mb-4 flex items-center justify-start md:hidden text-primaryColor">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="36" viewBox="0 0 117 31" fill="currentColor">
              <path
                class="tokoo-svg"
                d="M24.471,26.8L22.72,6.809a0.847,0.847,0,0,0-.838-0.78h-3.6a6.041,6.041,0,0,0-12.083,0H2.6a0.843,0.843,0,0,0-.838.78L0.006,26.8c0,0.026-.006.05-0.006,0.076A4.381,4.381,0,0,0,4.59,31h15.3a4.381,4.381,0,0,0,4.59-4.126A0.309,0.309,0,0,0,24.471,26.8ZM12.239,1.712a4.386,4.386,0,0,1,4.353,4.317H7.886A4.385,4.385,0,0,1,12.239,1.712Zm7.648,27.576H4.59a2.7,2.7,0,0,1-2.9-2.377L3.365,7.747H6.191v2.6a0.844,0.844,0,1,0,1.688,0v-2.6h8.712v2.6a0.844,0.844,0,1,0,1.689,0v-2.6h2.827l1.682,19.164A2.709,2.709,0,0,1,19.887,29.288Zm24.472-.042h1.26a1.533,1.533,0,0,0,1.188-.47,1.766,1.766,0,0,0,0-2.315,1.535,1.535,0,0,0-1.188-.47h-1.26a2.793,2.793,0,0,1-1.962-.543,2.506,2.506,0,0,1-.558-1.844v-8.68h4.393a0.882,0.882,0,0,0,.756-0.416,1.861,1.861,0,0,0,0-1.989,0.883,0.883,0,0,0-.756-0.416H41.839V5.485a1.03,1.03,0,0,0-.594-0.868,2.483,2.483,0,0,0-1.314-.362,2.389,2.389,0,0,0-1.3.362,1.031,1.031,0,0,0-.576.868V23.6q0,5.642,6.3,5.642h0Zm6.877-1.881a7.323,7.323,0,0,0,10.424-.018,6.805,6.805,0,0,0,2.251-5.009V19.011A6.677,6.677,0,0,0,61.679,14,7.521,7.521,0,0,0,51.2,14.02,6.745,6.745,0,0,0,49,19.011v3.327A6.808,6.808,0,0,0,51.237,27.366Zm1.548-8.343a3.683,3.683,0,0,1,1.08-2.587,3.477,3.477,0,0,1,5.167,0,3.653,3.653,0,0,1,1.1,2.587v3.305a3.755,3.755,0,0,1-1.1,2.641,3.442,3.442,0,0,1-5.167,0,3.786,3.786,0,0,1-1.08-2.641V19.022Zm15,9.826a2.1,2.1,0,0,0,1.314.4,2.346,2.346,0,0,0,1.368-.4,1.1,1.1,0,0,0,.576-0.868V23.46l2.629-2.387,5.293,7.848a1.2,1.2,0,0,0,1.008.543,2.166,2.166,0,0,0,1.4-.633,1.761,1.761,0,0,0,.72-1.284,1.17,1.17,0,0,0-.216-0.651l-5.653-8.174,4.645-4.159a1.084,1.084,0,0,0,.324-0.8,1.691,1.691,0,0,0-.612-1.23,1.807,1.807,0,0,0-1.224-.579,1.075,1.075,0,0,0-.792.325l-7.526,6.944V3.134a1.018,1.018,0,0,0-.558-0.886A2.6,2.6,0,0,0,69.1,1.9a2.325,2.325,0,0,0-1.332.344,1.034,1.034,0,0,0-.5.886V27.98A1.108,1.108,0,0,0,67.782,28.848ZM85.7,27.366a7.323,7.323,0,0,0,10.424-.018,6.805,6.805,0,0,0,2.25-5.009V19.011A6.677,6.677,0,0,0,96.137,14a7.521,7.521,0,0,0-10.478.018,6.745,6.745,0,0,0-2.2,4.991v3.327A6.807,6.807,0,0,0,85.7,27.366Zm1.548-8.343a3.683,3.683,0,0,1,1.08-2.587,3.477,3.477,0,0,1,5.167,0,3.654,3.654,0,0,1,1.1,2.587v3.305a3.755,3.755,0,0,1-1.1,2.641,3.442,3.442,0,0,1-5.167,0,3.786,3.786,0,0,1-1.08-2.641V19.022Zm15.987,8.343a7.323,7.323,0,0,0,10.424-.018,6.8,6.8,0,0,0,2.25-5.009V19.011A6.677,6.677,0,0,0,113.673,14a7.521,7.521,0,0,0-10.478.018,6.744,6.744,0,0,0-2.2,4.991v3.327A6.807,6.807,0,0,0,103.231,27.366Zm1.548-8.343a3.683,3.683,0,0,1,1.08-2.587,3.477,3.477,0,0,1,5.167,0,3.653,3.653,0,0,1,1.1,2.587v3.305a3.754,3.754,0,0,1-1.1,2.641,3.442,3.442,0,0,1-5.167,0,3.787,3.787,0,0,1-1.08-2.641V19.022Z"
              ></path>
            </svg>
          </router-link>
          <h2 class="text-center text-headingColor text-2xl md:text-xl lg:text-2xl xl:text-3xl font-extrabold">Quên mật khẩu?</h2>
          <p class="mt-4 lg:mt-8 pb-6 text-center">Nhập địa chỉ email bạn đã dùng khi đăng ký và chúng tôi sẽ gửi cho bạn hướng dẫn để đặt lại mật khẩu.</p>
          <form class="form">
            <div class="input-group">
              <input type="text" name="email" id="email" v-model="email" placeholder="Email" autocomplete="email" @blur="validateEmail" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="absolute top-1/2 left-2 -translate-y-1/2 w-5 h-5">
                <path
                  d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                  stroke="#19233550"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#19233550" stroke-width="1.5" stroke-linecap="round" />
              </svg>
            </div>
            <div v-if="errors?.email && errors?.email.length > 0">
              <p v-for="(err, index) in errors?.email" :key="index" class="mt-2 text-sm text-red-500">{{ err }}</p>
            </div>
            <div class="mt-6"></div>
            <div class="sign">
              <PrimaryButton :content="'Gửi hướng dẫn đặt lại mật khẩu'" :func="forgot" :loading="loading" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useToastStore } from '@/stores'
import { forgotPassword } from '@/webServices/authorizationService'

import ButtonV4 from '@/components/Button/ButtonV4.vue'
import PrimaryButton from '@/components/Button/PrimaryButton.vue'

export default defineComponent({
  components: { PrimaryButton },
  setup() {
    const toastStore = useToastStore()

    const email = ref(null)
    const loading = ref(false)
    const isErrorEmail = ref(false)
    const errors = ref({
      email: []
    })

    const validateEmail = () => {
      errors.value.email = []

      if (!email.value) {
        errors.value.email.push('Vui lòng nhập email')
        isErrorEmail.value = true
      } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        errors.value.email.push('Vui lòng nhập email đúng định dạng')
        isErrorEmail.value = true
      } else {
        isErrorEmail.value = false
      }
    }

    const forgot = async () => {
      loading.value = true
      validateEmail()

      if (isErrorEmail.value) {
        loading.value = false
        return
      }

      const res = await forgotPassword({
        email: email.value
      })

      console.log(res)

      if (!res.success && res.data.code === 404) {
        errors.value.email.push('Email không tồn tại trong hệ thống. Vui lòng thử lại!')
      }

      if (res.success) {
        toastStore.showToastModal({
          type: 'success',
          message: 'Hướng dẫn đặt lại mật khẩu đã gửi thành công tới email của bạn. Hãy kiểm tra ngay!',
          timeout: 3000
        })

        email.value = null
      }
      loading.value = false
    }

    return { email, loading, errors, isErrorEmail, validateEmail, forgot }
  }
})
</script>

<style scoped>
.social-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 6px;
  width: 100%;
  font-size: 14px;
  font-weight: 800;
  @apply text-headingColor;
  border: 1px solid;
  @apply border-borderColor;
  border-radius: 6px;
}

.social-button svg {
  width: 20px;
  height: 20px;
}

.line {
  height: 1px;
  flex: 1 1 0%;
  @apply bg-headingOpacityColor;
}

.form {
  margin-top: 1.5rem;
}

.input-group {
  margin-top: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  position: relative;
}

.input-group input {
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid;
  outline: 0;
  padding: 0.5rem 1rem 0.5rem 2rem;
  @apply border-borderColor text-headingColor;
}

.input-group input:focus {
  @apply border-headingOpacityColor;
}

.forgot,
.remember {
  display: flex;
  justify-content: flex-end;
  gap: 6px;
  font-size: 0.75rem;
  line-height: 1rem;
}

.remember {
  font-weight: 500;
  @apply text-bodyColor;
}

.forgot a,
.link a {
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
}

.forgot a {
  @apply text-bodyColor;
}

.link a {
  @apply text-primaryColor;
}

.sign {
  display: block;
  width: 100%;
}

.sign button {
  width: 100%;
}

.link {
  margin-top: 1rem;
  text-align: center;
  font-size: 0.75rem;
  line-height: 1rem;
  text-decoration: none;
  @apply text-bodyColor;
}
</style>
