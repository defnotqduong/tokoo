<template>
  <div class="w-full max-w-[960px] mx-4">
    <div class="rounded-xl shadow-shadow07 overflow-hidden">
      <div class="grid grid-cols-12">
        <div class="hidden md:block col-span-6 bg-primaryColor p-6">
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
          <router-link :to="{ name: 'home' }" class="mb-4 flex items-center justify-center md:hidden text-primaryColor">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="36" viewBox="0 0 117 31" fill="currentColor">
              <path
                class="tokoo-svg"
                d="M24.471,26.8L22.72,6.809a0.847,0.847,0,0,0-.838-0.78h-3.6a6.041,6.041,0,0,0-12.083,0H2.6a0.843,0.843,0,0,0-.838.78L0.006,26.8c0,0.026-.006.05-0.006,0.076A4.381,4.381,0,0,0,4.59,31h15.3a4.381,4.381,0,0,0,4.59-4.126A0.309,0.309,0,0,0,24.471,26.8ZM12.239,1.712a4.386,4.386,0,0,1,4.353,4.317H7.886A4.385,4.385,0,0,1,12.239,1.712Zm7.648,27.576H4.59a2.7,2.7,0,0,1-2.9-2.377L3.365,7.747H6.191v2.6a0.844,0.844,0,1,0,1.688,0v-2.6h8.712v2.6a0.844,0.844,0,1,0,1.689,0v-2.6h2.827l1.682,19.164A2.709,2.709,0,0,1,19.887,29.288Zm24.472-.042h1.26a1.533,1.533,0,0,0,1.188-.47,1.766,1.766,0,0,0,0-2.315,1.535,1.535,0,0,0-1.188-.47h-1.26a2.793,2.793,0,0,1-1.962-.543,2.506,2.506,0,0,1-.558-1.844v-8.68h4.393a0.882,0.882,0,0,0,.756-0.416,1.861,1.861,0,0,0,0-1.989,0.883,0.883,0,0,0-.756-0.416H41.839V5.485a1.03,1.03,0,0,0-.594-0.868,2.483,2.483,0,0,0-1.314-.362,2.389,2.389,0,0,0-1.3.362,1.031,1.031,0,0,0-.576.868V23.6q0,5.642,6.3,5.642h0Zm6.877-1.881a7.323,7.323,0,0,0,10.424-.018,6.805,6.805,0,0,0,2.251-5.009V19.011A6.677,6.677,0,0,0,61.679,14,7.521,7.521,0,0,0,51.2,14.02,6.745,6.745,0,0,0,49,19.011v3.327A6.808,6.808,0,0,0,51.237,27.366Zm1.548-8.343a3.683,3.683,0,0,1,1.08-2.587,3.477,3.477,0,0,1,5.167,0,3.653,3.653,0,0,1,1.1,2.587v3.305a3.755,3.755,0,0,1-1.1,2.641,3.442,3.442,0,0,1-5.167,0,3.786,3.786,0,0,1-1.08-2.641V19.022Zm15,9.826a2.1,2.1,0,0,0,1.314.4,2.346,2.346,0,0,0,1.368-.4,1.1,1.1,0,0,0,.576-0.868V23.46l2.629-2.387,5.293,7.848a1.2,1.2,0,0,0,1.008.543,2.166,2.166,0,0,0,1.4-.633,1.761,1.761,0,0,0,.72-1.284,1.17,1.17,0,0,0-.216-0.651l-5.653-8.174,4.645-4.159a1.084,1.084,0,0,0,.324-0.8,1.691,1.691,0,0,0-.612-1.23,1.807,1.807,0,0,0-1.224-.579,1.075,1.075,0,0,0-.792.325l-7.526,6.944V3.134a1.018,1.018,0,0,0-.558-0.886A2.6,2.6,0,0,0,69.1,1.9a2.325,2.325,0,0,0-1.332.344,1.034,1.034,0,0,0-.5.886V27.98A1.108,1.108,0,0,0,67.782,28.848ZM85.7,27.366a7.323,7.323,0,0,0,10.424-.018,6.805,6.805,0,0,0,2.25-5.009V19.011A6.677,6.677,0,0,0,96.137,14a7.521,7.521,0,0,0-10.478.018,6.745,6.745,0,0,0-2.2,4.991v3.327A6.807,6.807,0,0,0,85.7,27.366Zm1.548-8.343a3.683,3.683,0,0,1,1.08-2.587,3.477,3.477,0,0,1,5.167,0,3.654,3.654,0,0,1,1.1,2.587v3.305a3.755,3.755,0,0,1-1.1,2.641,3.442,3.442,0,0,1-5.167,0,3.786,3.786,0,0,1-1.08-2.641V19.022Zm15.987,8.343a7.323,7.323,0,0,0,10.424-.018,6.8,6.8,0,0,0,2.25-5.009V19.011A6.677,6.677,0,0,0,113.673,14a7.521,7.521,0,0,0-10.478.018,6.744,6.744,0,0,0-2.2,4.991v3.327A6.807,6.807,0,0,0,103.231,27.366Zm1.548-8.343a3.683,3.683,0,0,1,1.08-2.587,3.477,3.477,0,0,1,5.167,0,3.653,3.653,0,0,1,1.1,2.587v3.305a3.754,3.754,0,0,1-1.1,2.641,3.442,3.442,0,0,1-5.167,0,3.787,3.787,0,0,1-1.08-2.641V19.022Z"
              ></path>
            </svg>
          </router-link>
          <h2 class="text-center text-headingColor text-2xl md:text-xl lg:text-2xl xl:text-3xl font-extrabold">Đăng nhập tài khoản của bạn</h2>
          <p class="mt-1 text-center text-bodyColor text-sm">Chào mừng bạn quay lại! Chọn phương thức để đăng nhập</p>
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
            <div class="input-group">
              <input
                :type="isShowPassword ? 'text' : 'password'"
                name="password"
                id="password"
                v-model="password"
                placeholder="Mật khẩu"
                @blur="validatePassword"
              />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="absolute top-1/2 left-2 -translate-y-1/2 w-5 h-5">
                <path
                  d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"
                  stroke="#19233550"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <button @click.prevent="changeShowPassword" class="absolute top-1/2 right-3 -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#19233550" viewBox="0 -64 640 640" class="w-4 h-4" v-show="!isShowPassword">
                  <path
                    d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#19233550" viewBox="0 -32 576 576" class="w-4 h-4" v-show="isShowPassword">
                  <path
                    d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                  />
                </svg>
              </button>
            </div>
            <div v-if="errors?.password && errors?.password.length > 0">
              <p v-for="(err, index) in errors?.password" :key="index" class="mt-2 text-sm text-red-500">{{ err }}</p>
            </div>
            <div class="flex items-center justify-end mt-4 mb-6">
              <div class="forgot">
                <router-link :to="{ name: 'auth-forgot-password' }">Quên mật khẩu?</router-link>
              </div>
            </div>
            <div class="sign">
              <PrimaryButton :content="'Đăng nhập'" :func="login" :loading="loading" />
            </div>
          </form>
          <div class="my-4 flex items-center justify-center">
            <div class="line"></div>
            <div class="px-2 text-xs text-bodyColor">hoặc tiếp tục với Google</div>
            <div class="line"></div>
          </div>
          <ul class="mb-8">
            <li>
              <button @click.prevent="signInWithGoogle" class="social-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                  <path
                    fill="#4285F4"
                    d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z"
                  />
                  <path
                    fill="#34A853"
                    d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z"
                  />
                  <path fill="#FBBC04" d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z" />
                  <path
                    fill="#EA4335"
                    d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"
                  />
                </svg>
                Đăng nhập với Google
              </button>
            </li>
          </ul>

          <p class="link">
            Bạn chưa có tài khoản?
            <router-link :to="{ name: 'auth-register' }" rel="noopener noreferrer" href="#" class="">Tạo tài khoản</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useHomeStore, useUserStore } from '@/stores'
import { loginUser } from '@/webServices/authorizationService'
import { getUserProfile } from '@/webServices/userService'
import { getCart } from '@/webServices/cartService'
import { BASE_API_URL } from '@/configs/baseUrl'

import PrimaryButton from '@/components/Button/PrimaryButton.vue'
export default defineComponent({
  components: {
    PrimaryButton
  },
  setup() {
    const homeStore = useHomeStore()
    const userStore = useUserStore()
    const router = useRouter()

    const user = reactive({
      email: '',
      password: ''
    })
    const errors = ref({
      email: [],
      password: []
    })

    const isErrorEmail = ref(false)
    const isErrorPassword = ref(false)
    const loading = ref(false)
    const isShowPassword = ref(false)

    const changeShowPassword = () => {
      isShowPassword.value = !isShowPassword.value
    }

    const validateEmail = () => {
      errors.value.email = []

      if (!user.email) {
        errors.value.email.push('Vui lòng nhập email')
        isErrorEmail.value = true
      } else if (!/\S+@\S+\.\S+/.test(user.email)) {
        errors.value.email.push('Vui lòng nhập email đúng định dạng')
        isErrorEmail.value = true
      } else {
        isErrorEmail.value = false
      }
    }

    const validatePassword = () => {
      errors.value.password = []

      if (!user.password) {
        errors.value.password.push('Vui lòng nhập mật khẩu')
        isErrorPassword.value = true
      } else {
        isErrorPassword.value = false
      }
    }

    const login = async () => {
      loading.value = true
      validateEmail()
      validatePassword()

      if (isErrorEmail.value || isErrorPassword.value) {
        loading.value = false
        return
      }

      const res = await loginUser({
        email: user.email,
        password: user.password
      })

      console.log(res)

      if (!res.success) {
        errors.value.email.push('Email hoặc mật khẩu không chính xác')
        errors.value.password.push('Email hoặc mật khẩu không chính xác')
        loading.value = false
        return
      }

      if (res.success) {
        userStore.login(res.token, res.refreshToken)

        const userPromise = Promise.all([getUserProfile(), getCart()]).then(([profile, cart]) => ({
          success: true,
          user: profile.userDTO,
          cart: cart?.dto?.cartItemDTOS || []
        }))

        const [userData] = await Promise.all([userPromise])

        console.log(userData)

        if (userData.success) {
          userStore.setUser(userData.user)
          userStore.setCart(userData.cart)
          router.push({ name: 'home' })
        }
      }
    }

    const signInWithGoogle = () => {
      window.location.href = `${BASE_API_URL}/oauth2/authorization/google`
    }

    return {
      ...toRefs(user),
      loading,
      isErrorEmail,
      isErrorPassword,
      errors,
      isShowPassword,
      changeShowPassword,
      login,
      signInWithGoogle,
      validateEmail,
      validatePassword
    }
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
  height: 40px;
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
  transition: all 300ms;
}

.forgot a {
  @apply text-bodyColor;
}

.forgot a:hover {
  @apply text-primaryColor;
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
