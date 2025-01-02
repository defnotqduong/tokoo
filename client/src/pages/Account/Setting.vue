<template>
  <div class="p-4 bg-whiteColor rounded-md shadow-shadow01">
    <div class="mb-4 pb-4 border-b-[1px] border-borderColor flex items-center justify-between">
      <h4 class="text-xl text-headingColor font-extrabold">Đổi mật khẩu</h4>
    </div>
    <div>
      <form class="form">
        <div class="input-group">
          <label for="old-password" class="title"
            >Mật khẩu hiện tại
            <span class="text-dangerColor">*</span>
          </label>
          <div class="relative w-1/2">
            <input
              :type="isShowOldPassword ? 'text' : 'password'"
              name="old-password"
              id="old-password"
              v-model="oldPassword"
              placeholder="Mật khẩu hiện tại"
              autocomplete="current-password"
              @input="validateOldPassword"
              @blur="validateOldPassword"
            />
            <button @click.prevent="changeShowOldPassword" class="absolute top-1/2 right-3 -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#19233550" viewBox="0 -64 640 640" class="w-4 h-4" v-show="!isShowOldPassword">
                <path
                  d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#19233550" viewBox="0 -32 576 576" class="w-4 h-4" v-show="isShowOldPassword">
                <path
                  d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="w-1/2" v-if="errors?.oldPassword && errors?.oldPassword.length > 0">
          <p v-for="(err, index) in errors?.oldPassword" :key="index" class="mt-2 text-sm text-red-500">{{ err }}</p>
        </div>
        <div class="input-group">
          <label for="new-password" class="title">Mật khẩu mới <span class="text-dangerColor">*</span></label>
          <div class="relative w-1/2">
            <input
              :type="isShowNewPassword ? 'text' : 'password'"
              name="new-password"
              id="new-password"
              v-model="newPassword"
              placeholder="Mật khẩu mới"
              autocomplete="new-password"
              @input="validateNewPassword"
              @blur="validateNewPassword"
            />
            <button @click.prevent="changeShowNewPassword" class="absolute top-1/2 right-3 -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#19233550" viewBox="0 -64 640 640" class="w-4 h-4" v-show="!isShowNewPassword">
                <path
                  d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#19233550" viewBox="0 -32 576 576" class="w-4 h-4" v-show="isShowNewPassword">
                <path
                  d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="w-1/2" v-if="errors?.newPassword && errors?.newPassword.length > 0">
          <p v-for="(err, index) in errors?.newPassword" :key="index" class="mt-2 text-sm text-red-500">{{ err }}</p>
        </div>
        <div class="input-group">
          <label for="password-confirm" class="title">Xác nhận mật khẩu <span class="text-dangerColor">*</span></label>
          <div class="relative w-1/2">
            <input
              :type="isShowPasswordConfirm ? 'text' : 'password'"
              name="password-confirm"
              id="password-confirm"
              v-model="passwordConfirm"
              placeholder="Xác nhận mật khẩu"
              autocomplete="new-password"
              @input="validatePasswordConfirm"
              @blur="validatePasswordConfirm"
            />
            <button @click.prevent="changeShowPasswordConfirm" class="absolute top-1/2 right-3 -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#19233550" viewBox="0 -64 640 640" class="w-4 h-4" v-show="!isShowPasswordConfirm">
                <path
                  d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#19233550" viewBox="0 -32 576 576" class="w-4 h-4" v-show="isShowPasswordConfirm">
                <path
                  d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="w-1/2" v-if="errors?.passwordConfirm && errors?.passwordConfirm.length > 0">
          <p v-for="(err, index) in errors?.passwordConfirm" :key="index" class="mt-2 text-sm text-red-500">{{ err }}</p>
        </div>
        <div class="mt-4">
          <PrimaryButton :content="'Đổi mật khẩu'" :func="changePw" :loading="loading" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue'
import { useToastStore } from '@/stores'
import { changePassword } from '@/webServices/userService'

import PrimaryButton from '@/components/Button/PrimaryButton.vue'
export default defineComponent({
  components: { PrimaryButton },
  setup() {
    const toastStore = useToastStore()

    const oldPassword = ref(null)
    const newPassword = ref(null)
    const passwordConfirm = ref(null)

    const isShowOldPassword = ref(false)
    const isShowNewPassword = ref(false)
    const isShowPasswordConfirm = ref(false)

    const errors = ref({
      oldPassword: [],
      newPassword: [],
      passwordConfirm: []
    })
    const isErrorOldPassword = ref(false)
    const isErrorNewPassword = ref(false)
    const isErrorPasswordConfirm = ref(false)
    const loading = ref(false)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\S]{8,}$/

    const changeShowOldPassword = () => {
      isShowOldPassword.value = !isShowOldPassword.value
    }

    const changeShowNewPassword = () => {
      isShowNewPassword.value = !isShowNewPassword.value
    }

    const changeShowPasswordConfirm = () => {
      isShowPasswordConfirm.value = !isShowPasswordConfirm.value
    }

    const validateOldPassword = () => {
      errors.value.oldPassword = []

      if (!oldPassword.value) {
        errors.value.oldPassword.push('Vui lòng nhập mật khẩu')
        isErrorOldPassword.value = true
      } else if (oldPassword.value.length < 8 || !passwordRegex.test(oldPassword.value)) {
        errors.value.oldPassword.push(
          'Vui lòng nhập đúng mật khẩu theo định dạng tối thiểu 8 ký tự trong đó có ít nhất 1 chữ số, 1 chữ cái viết thường, 1 chữ cái viết hoa và 1 ký tự đặc biệt'
        )
        isErrorOldPassword.value = true
      } else {
        isErrorOldPassword.value = false
      }
    }

    const validateNewPassword = () => {
      errors.value.newPassword = []

      if (!newPassword.value) {
        errors.value.newPassword.push('Vui lòng nhập mật khẩu')
        isErrorNewPassword.value = true
      } else if (newPassword.value.length < 8 || !passwordRegex.test(newPassword.value)) {
        errors.value.newPassword.push(
          'Vui lòng nhập mật khẩu đúng định dạng tối thiểu 8 kí tự trong đó có chứa ít nhất 1 chữ số, 1 chữ cái viết thường, 1 chữ cái viết hoa và 1 kí tự đặc biệt'
        )
        isErrorNewPassword.value = true
      } else if (oldPassword.value === newPassword.value) {
        errors.value.newPassword.push('Vui lòng nhập mật khẩu mới khác với mật khẩu hiện tại')
        isErrorNewPassword.value = true
      } else {
        isErrorNewPassword.value = false
      }
    }

    const validatePasswordConfirm = () => {
      errors.value.passwordConfirm = []
      if ((!newPassword.value && !passwordConfirm.value) || newPassword.value !== passwordConfirm.value) {
        errors.value.passwordConfirm.push('Vui lòng xác nhận lại mật khẩu')
        isErrorPasswordConfirm.value = true
      } else {
        isErrorPasswordConfirm.value = false
      }
    }

    const changePw = async () => {
      loading.value = true
      validateOldPassword()
      validateNewPassword()
      validatePasswordConfirm()

      if (isErrorOldPassword.value || isErrorNewPassword.value || isErrorPasswordConfirm.value) {
        loading.value = false
        return
      }

      const res = await changePassword({
        oldPassword: oldPassword.value,
        newPassword: newPassword.value
      })
      console.log(res)

      if (!res.success) {
        errors.value.oldPassword.push('Mật khẩu hiện tại không chính xác')

        toastStore.showToastModal({
          type: 'error',
          message: 'Đổi mật khẩu không thành công',
          timeout: 3000
        })
      }

      if (res.success) {
        toastStore.showToastModal({
          type: 'success',
          message: 'Đổi mật khẩu thành công',
          timeout: 3000
        })

        oldPassword.value = null
        newPassword.value = null
        passwordConfirm.value = null
      }

      loading.value = false
    }

    return {
      oldPassword,
      newPassword,
      passwordConfirm,
      errors,
      isErrorOldPassword,
      isErrorNewPassword,
      isErrorPasswordConfirm,
      isShowOldPassword,
      isShowNewPassword,
      isShowPasswordConfirm,
      loading,
      changeShowOldPassword,
      changeShowNewPassword,
      changeShowPasswordConfirm,
      validateOldPassword,
      validateNewPassword,
      validatePasswordConfirm,
      changePw
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0 })
    }
  },
  created() {
    this.scrollToTop()
  }
})
</script>

<style scoped>
.form {
}

.input-group .title {
  @apply block mb-2 font-bold leading-none;
}

.input-group {
  display: block;
  margin-top: 16px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  position: relative;
}

.input-group input {
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid;
  outline: 0;
  padding: 0.5rem 1rem 0.5rem 1rem;
  @apply border-borderColor text-headingColor;
}

.input-group input:focus {
  @apply border-headingOpacityColor;
}
</style>
