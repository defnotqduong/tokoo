<template>
  <div class="p-4 bg-whiteColor rounded-md shadow-shadow01">
    <div class="mb-4 pb-4 border-b-[1px] border-borderColor flex items-center justify-between">
      <h4 class="text-xl text-headingColor font-extrabold">Tài khoản của tôi</h4>
    </div>
    <div class="flex items-start justify-start gap-10">
      <div class="flex-1">
        <form class="form">
          <div class="input-group">
            <label for="username" class="title">Họ và tên <span class="text-dangerColor">*</span></label>
            <input type="text" name="username" id="username" v-model="username" placeholder="Họ tên" @input="validateUsername" @blur="validateUsername" />
          </div>
          <div v-if="errors?.username && errors?.username.length > 0">
            <p v-for="(err, index) in errors?.username" :key="index" class="mt-2 text-sm text-red-500">{{ err }}</p>
          </div>
          <div class="input-group">
            <label for="email" class="title">Email <span class="text-dangerColor">*</span></label>
            <input
              type="text"
              name="email"
              id="email"
              readonly
              disabled
              v-model="email"
              placeholder="Email"
              autocomplete="email"
              @input="validateEmail"
              @blur="validateEmail"
              class="bg-borderColor"
            />
          </div>
          <div v-if="errors?.email && errors?.email.length > 0">
            <p v-for="(err, index) in errors?.email" :key="index" class="mt-2 text-sm text-red-500">{{ err }}</p>
          </div>
          <div class="input-group">
            <label for="phone-number" class="title">Số điện thoại <span class="text-dangerColor">*</span></label>
            <input
              type="text"
              name="phone-number"
              id="phone-number"
              v-model="phoneNumber"
              placeholder="Số điện thoại"
              @input="validatePhoneNumber"
              @blur="validatePhoneNumber"
            />
          </div>
          <div v-if="errors?.phoneNumber && errors?.phoneNumber.length > 0">
            <p v-for="(err, index) in errors?.phoneNumber" :key="index" class="mt-2 text-sm text-red-500">{{ err }}</p>
          </div>
          <div class="input-group">
            <label for="sex" class="title">Giới tính <span class="text-dangerColor">*</span></label>
            <div class="flex items-center justify-start gap-4">
              <div class="flex items-center justify-start gap-2">
                <button
                  @click.prevent="changeSex('Male')"
                  class="w-4 h-4 flex items-center justify-center border rounded-full"
                  :class="sex === 'Male' ? 'border-primaryColor' : 'border-bodyColor'"
                >
                  <span class="w-3/4 h-3/4 rounded-full" :class="sex === 'Male' ? 'bg-primaryColor' : 'bg-transparent'"></span>
                </button>
                Nam
              </div>
              <div class="flex items-center justify-start gap-2">
                <button
                  @click.prevent="changeSex('Female')"
                  class="w-4 h-4 flex items-center justify-center border rounded-full"
                  :class="sex === 'Female' ? 'border-primaryColor' : 'border-bodyColor'"
                >
                  <span class="w-3/4 h-3/4 rounded-full" :class="sex === 'Female' ? 'bg-primaryColor' : 'bg-transparent'"></span>
                </button>
                Nữ
              </div>
            </div>
          </div>
          <div v-if="errors?.sex && errors?.sex.length > 0">
            <p v-for="(err, index) in errors?.sex" :key="index" class="mt-2 text-sm text-red-500">{{ err }}</p>
          </div>
          <div class="mt-4">
            <PrimaryButton :content="'Cập nhật'" :func="update" :loading="loading" />
          </div>
        </form>
      </div>
      <div class="w-52 h-52 mt-6">
        <AccountAvatar />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from 'vue'
import { useUserStore, useToastStore } from '@/stores'
import { updateProfile } from '@/webServices/userService'

import PrimaryButton from '@/components/Button/PrimaryButton.vue'
import AccountAvatar from '@/components/Account/AccountAvatar.vue'
export default defineComponent({
  components: { PrimaryButton, AccountAvatar },
  setup() {
    const userStore = useUserStore()
    const toastStore = useToastStore()

    const user = reactive({
      username: userStore.user.username,
      email: userStore.user.email,
      phoneNumber: userStore.user.phoneNumber,
      sex: userStore.user.sex
    })

    const errors = ref({
      username: [],
      email: [],
      phoneNumber: [],
      sex: []
    })

    const isErrorUsername = ref(false)
    const isErrorEmail = ref(false)
    const isErrorPhoneNumber = ref(false)
    const isErrorSex = ref(false)
    const loading = ref(false)

    const changeSex = sex => {
      user.sex = sex
    }

    const validateUsername = () => {
      errors.value.username = []

      if (!user.username) {
        errors.value.username.push('Vui lòng nhập họ và tên')
        isErrorUsername.value = true
      } else {
        isErrorUsername.value = false
      }
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

    const validatePhoneNumber = () => {
      errors.value.phoneNumber = []
      if (!user.phoneNumber) {
        errors.value.phoneNumber.push('Vui lòng nhập số điện thoại')
        isErrorPhoneNumber.value = true
      } else if (!/^[0-9]+$/.test(user.phoneNumber)) {
        errors.value.phoneNumber.push('Số điện thoại chỉ được phép chứa chữ số')
        isErrorPhoneNumber.value = true
      } else if (user.phoneNumber.length < 10 || user.phoneNumber.length > 15) {
        errors.value.phoneNumber.push('Số điện thoại phải chứa từ 10 đến 15 chữ số')
        isErrorPhoneNumber.value = true
      } else {
        isErrorPhoneNumber.value = false
      }
    }

    const validateSex = () => {
      errors.value.sex = []

      if (!user.sex) {
        errors.value.sex.push('Vui lòng chọn giới tính')
        isErrorSex.value = true
      } else {
        isErrorSex.value = false
      }
    }

    const update = async () => {
      loading.value = true
      validateUsername()
      validateEmail()
      validatePhoneNumber()
      validateSex()

      if (isErrorUsername.value || isErrorEmail.value || isErrorPhoneNumber.value || isErrorSex.value) {
        loading.value = false
        return
      }

      const res = await updateProfile({
        username: user.username,
        phoneNumber: user.phoneNumber,
        sex: user.sex
      })

      console.log(res)

      if (!res.success) {
        toastStore.showToastModal({
          type: 'error',
          message: 'Cập nhật tài khoản không thành công',
          timeout: 3000
        })
      }

      if (res.success) {
        toastStore.showToastModal({
          type: 'success',
          message: 'Cập nhật tài khoản thành công',
          timeout: 3000
        })

        userStore.setUser(res.userDTO)
      }

      loading.value = false
    }

    return {
      userStore,
      ...toRefs(user),
      errors,
      loading,
      changeSex,
      validateUsername,
      validateEmail,
      validatePhoneNumber,
      update
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
