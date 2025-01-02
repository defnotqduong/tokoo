<template>
  <div class="relative w-full h-full p-[2px] sm:p-1 bg-whiteColor border-2 border-primaryOpacityColor rounded-full">
    <img :src="userStore.user?.avatarUrl || defaultAvatar" class="w-full h-full object-cover object-center rounded-full" alt="Avatar" />
    <input type="file" id="fileAvatarInput" class="hidden" @change="handleFileUpload" />
    <div class="absolute bottom-2 left-2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
      <label
        for="fileAvatarInput"
        class="w-full h-full flex items-center justify-center bg-primaryColor text-whiteColor rounded-full transition-all duration-300 hover:bg-darkPrimaryColor cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="w-5 h-5 lg:w-6 lg:h-6">
          <path
            d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 16.8V9.2C3 8.0799 3 7.51984 3.21799 7.09202C3.40973 6.71569 3.71569 6.40973 4.09202 6.21799C4.51984 6 5.0799 6 6.2 6H7.25464C7.37758 6 7.43905 6 7.49576 5.9935C7.79166 5.95961 8.05705 5.79559 8.21969 5.54609C8.25086 5.49827 8.27836 5.44328 8.33333 5.33333C8.44329 5.11342 8.49827 5.00346 8.56062 4.90782C8.8859 4.40882 9.41668 4.08078 10.0085 4.01299C10.1219 4 10.2448 4 10.4907 4H13.5093C13.7552 4 13.8781 4 13.9915 4.01299C14.5833 4.08078 15.1141 4.40882 15.4394 4.90782C15.5017 5.00345 15.5567 5.11345 15.6667 5.33333C15.7216 5.44329 15.7491 5.49827 15.7803 5.54609C15.943 5.79559 16.2083 5.95961 16.5042 5.9935C16.561 6 16.6224 6 16.7454 6H17.8C18.9201 6 19.4802 6 19.908 6.21799C20.2843 6.40973 20.5903 6.71569 20.782 7.09202C21 7.51984 21 8.0799 21 9.2V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </label>
    </div>
    <input type="checkbox" id="my_modal_avatar" class="modal-toggle" v-model="isModalOpen" />
    <div class="modal" role="dialog">
      <div class="modal-box bg-white py-6 px-8">
        <div class="image-cropper" v-if="imageSrc">
          <div class="flex items-center justify-center">
            <img ref="image" :src="imageSrc" alt="Image to crop" class="w-full object-cover object-center rounded-full" />
          </div>
          <div class="mt-6 flex items-center justify-end gap-4">
            <button @click="closeModal" class="px-4 h-10 text-whiteColor bg-dangerColor transition-all duration-300 hover:bg-darkDangerColor rounded-md">
              Hủy
            </button>
            <button
              @click="handleImageCropped"
              :disabled="loading"
              :class="{ 'opacity-70 cursor-not-allowed': loading }"
              class="px-4 h-10 text-whiteColor bg-primaryColor transition-all duration-300 hover:bg-darkPrimaryColor rounded-md"
            >
              Lưu
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch, nextTick, onUnmounted, watchEffect } from 'vue'
import { useHomeStore, useUserStore, useToastStore } from '@/stores'
import { updateAvatar } from '@/webServices/userService'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'

import defaultAvatar from '@/assets/images/avatar.png'

export default defineComponent({
  props: {
    user: Object
  },
  setup(props) {
    const homeStore = useHomeStore()
    const userStore = useUserStore()
    const toastStore = useToastStore()

    const file = ref(null)
    const imageSrc = ref(null)
    const isModalOpen = ref(false)
    const fileReader = new FileReader()
    const image = ref(null)
    const loading = ref(false)
    let cropper = null

    fileReader.onload = e => {
      imageSrc.value = e.target.result
    }

    const handleCropper = async () => {
      await nextTick()

      if (cropper) {
        cropper.replace(imageSrc.value)
      } else {
        cropper = new Cropper(image.value, {
          aspectRatio: 1,
          minCropBoxWidth: 396,
          minCropBoxHeight: 396,
          viewMode: 2,
          dragMode: 'move',
          cropBoxMovable: true,
          cropBoxResizable: true,
          responsive: true,
          zoomable: true,
          ready() {
            isModalOpen.value = true
          }
        })
      }
    }

    const handleFileUpload = async e => {
      if (e.target.files.length > 0) {
        file.value = e.target.files[0]

        const maxSize = 4 * 1024 * 1024
        const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']

        if (!validImageTypes.includes(file.value.type)) {
          toastStore.showToastModal({
            type: 'error',
            message: 'Vui lòng chọn ảnh đúng định dạng',
            timeout: 3000
          })

          e.target.value = null
          file.value = null
          return
        }

        if (file.value.size > maxSize) {
          toastStore.showToastModal({
            type: 'error',
            message: 'Vui lòng chọn ảnh có dung lượng không vượt quá 4MB',
            timeout: 3000
          })

          e.target.value = null
          file.value = null
          return
        }

        imageSrc.value = URL.createObjectURL(file.value)

        await handleCropper()
        e.target.value = null
      }
    }
    const closeModal = () => {
      isModalOpen.value = false
    }

    const uploadImage = async blob => {
      loading.value = true

      const timestamp = Date.now()
      const fileName = `avatar-${timestamp}.jpg`

      const formData = new FormData()
      formData.append('file', blob, fileName)

      const res = await updateAvatar(formData)
      if (!res.success) {
        toastStore.showToastModal({
          type: 'error',
          message: 'Cập nhật ảnh đại diện không thành công',
          timeout: 3000
        })
      }
      if (res.success) {
        toastStore.showToastModal({
          type: 'success',
          message: 'Cập nhật ảnh đại diện thành công',
          timeout: 3000
        })
        userStore.setUser(res.userDTO)
      }
      closeModal()
      loading.value = false
    }

    const handleImageCropped = async () => {
      cropper
        .getCroppedCanvas({
          width: 256,
          height: 256
        })
        .toBlob(async blob => {
          if (blob) await uploadImage(blob)
        }, 'image/jpeg')
    }

    watchEffect(() => {
      if (file.value) {
        fileReader.readAsDataURL(file.value)
      } else {
        imageSrc.value = null
      }
    })

    onUnmounted(() => {
      if (cropper) {
        cropper.destroy()
        cropper = null
      }
    })

    return { defaultAvatar, userStore, file, imageSrc, isModalOpen, image, loading, closeModal, handleFileUpload, handleImageCropped }
  }
})
</script>

<style>
.modal {
  z-index: 20000;
}

.cropper-view-box {
  border-radius: 50%;
  overflow: hidden;
}

.cropper-face {
  border-radius: 50%;
  outline: none;
}
</style>
