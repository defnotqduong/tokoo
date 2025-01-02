import { defineStore } from 'pinia'
import { TOAST_STORE } from '@/configs/storeTypes'

export const useToastStore = defineStore(TOAST_STORE, {
  state: () => ({
    toast: {
      isShow: false,
      type: '',
      message: '',
      timeout: 3000
    },
    toastModal: {
      isShow: false,
      type: 'success',
      message: 'Đăng ký thành công',
      timeout: 3000
    }
  }),
  actions: {
    showToast({ type = 'info', message = '', timeout = 3000 }) {
      this.toast.isShow = true
      this.toast.type = type
      this.toast.message = message
      this.toast.timeout = timeout

      setTimeout(() => {
        this.clearToast()
      }, timeout)
    },
    clearToast() {
      this.toast.isShow = false
      this.toast.type = ''
      this.toast.message = ''
    },
    showToastModal({ type = 'info', message = '', timeout = 3000 }) {
      this.toastModal.isShow = true
      this.toastModal.type = type
      this.toastModal.message = message
      this.toastModal.timeout = timeout

      setTimeout(() => {
        this.clearToastModal()
      }, timeout)
    },
    clearToastModal() {
      this.toastModal.isShow = false
      this.toastModal.type = ''
      this.toastModal.message = ''
    }
  }
})
