<template>
  <div class="p-4 bg-whiteColor rounded-md shadow-shadow01">
    <div class="mb-4 pb-4 border-b-[1px] border-borderColor flex items-center justify-between">
      <h4 class="text-xl text-headingColor font-extrabold">Địa chỉ của tôi</h4>
      <PrimaryButton :content="'Thêm địa chỉ'" :func="openModal" :loading="loading" />
    </div>
    <div v-if="loading" class="min-h-[40vh] flex items-center justify-center text-primaryColor">
      <span class="loading loading-spinner loading-md"></span>
    </div>
    <template v-else>
      <p v-if="addressList.length === 0" class="italic">Chưa có địa chỉ nào</p>
      <div v-else v-for="(adr, index) in addressList" :key="index" class="py-6 border-b border-borderColor">
        <div class="flex items-center justify-between">
          <div>
            <div class="mb-1">
              <span class="font-bold">{{ adr.nameCustomer }}</span> | {{ adr.phoneNumber }}
            </div>
            <div>{{ adr.specificAddress }}</div>
            <div class="mb-2">{{ adr.fullAddress }}</div>
            <span v-if="adr.defaultAddress" class="px-3 py-1 text-sm text-dangerColor border border-dangerColor rounded-md">Mặc định</span>
          </div>
          <div>
            <div class="mb-2">
              <button class="px-3 py-1 text-blueColor transition-all duration-300 hover:text-darkBlueColor cursor-pointer" @click="changeSelectAddress(adr.id)">
                Cập nhật
              </button>
              <button
                v-if="!adr.defaultAddress"
                @click="openModalDelete(adr.id)"
                class="px-3 py-1 text-dangerColor transition-all duration-300 hover:text-darkDangerColor cursor-pointer"
              >
                Xóa
              </button>
            </div>
            <button
              v-if="!adr.defaultAddress"
              @click="setDefaultAddress(adr.id)"
              class="px-3 py-1 border border-bodyColor rounded-md transition-all duration-300 hover:opacity-75"
            >
              Đặt làm mặc định
            </button>
          </div>
        </div>
      </div>
    </template>
    <AddAddressModal :isModalOpen="isModalOpen" :cities="cities" :districts="districts" :wards="wards" :closeModal="closeModal" :fetchData="fetchData" />
    <UpdateAddressModal
      :selectAddress="selectAddress"
      :isModalEditOpen="isModalEditOpen"
      :cities="cities"
      :districts="districts"
      :wards="wards"
      :closeModalEdit="closeModalEdit"
      :fetchData="fetchData"
    />
    <div>
      <input type="checkbox" class="modal-toggle" v-model="isModalDeleteOpen" />
      <div class="modal" role="dialog">
        <div class="modal-box bg-white py-6 px-8">
          <strong class="text-bold">Bạn muốn xóa địa chỉ này?</strong>
          <div class="mt-2 flex items-center justify-end gap-2">
            <button @click="closeModalDelete" class="px-4 h-10 rounded-md cursor-pointer transition-all duration-300 hover:bg-grayLightColor">Trở lại</button>
            <button
              @click="deleteAdr"
              :disabled="isSubmitting"
              class="px-4 h-10 bg-dangerColor text-whiteColor rounded-md cursor-pointer transition-all duration-300 hover:bg-darkDangerColor"
              :class="{ 'cursor-no-drop': isSubmitting }"
            >
              Xóa
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, ref, toRefs, computed } from 'vue'
import { useUserStore, useToastStore } from '@/stores'
import axios from 'axios'
import { getListAddress, updateAddress, deleteAddress } from '@/webServices/userService'

import UpdateAddressModal from '@/components/Account/UpdateAddressModal.vue'
import AddAddressModal from '@/components/Account/AddAddressModal.vue'
import PrimaryButton from '@/components/Button/PrimaryButton.vue'

import citiesData from '@/data/cities.json'
import districtsData from '@/data/districts.json'
import wardsData from '@/data/wards.json'
export default defineComponent({
  components: { PrimaryButton, AddAddressModal, UpdateAddressModal },
  setup() {
    const userStore = useUserStore()
    const toastStore = useToastStore()

    const cities = ref(citiesData)
    const districts = ref(districtsData)
    const wards = ref(wardsData)

    const loading = ref(false)
    const isSubmitting = ref(false)
    const isModalOpen = ref(false)
    const isModalDeleteOpen = ref(false)
    const isModalEditOpen = ref(false)

    const idAddressDelete = ref(null)

    const selectAddress = ref({
      nameCustomer: '',
      phoneNumber: '',
      ward: '',
      district: '',
      province: '',
      fullAddress: '',
      specificAddress: '',
      defaultAddress: false
    })

    const addressList = ref([])

    const openModal = () => {
      isModalOpen.value = true
    }

    const closeModal = () => {
      isModalOpen.value = false
    }

    const openModalDelete = id => {
      isModalDeleteOpen.value = true
      idAddressDelete.value = id
    }

    const closeModalDelete = () => {
      isModalDeleteOpen.value = false
    }

    const openModalEdit = () => {
      isModalEditOpen.value = true
    }

    const closeModalEdit = () => {
      isModalEditOpen.value = false
    }

    const changeSelectAddress = id => {
      const selected = addressList.value.find(address => address.id === id)
      selectAddress.value = { ...selected }
      openModalEdit()
    }

    const setDefaultAddress = async id => {
      const res = await updateAddress({
        id: id,
        defaultAddress: true
      })

      if (res.success) {
        toastStore.showToastModal({
          type: 'success',
          message: 'Thay đổi địa chỉ mặc định thành công',
          timeout: 3000
        })

        await fetchData()
      }
    }

    const deleteAdr = async () => {
      isSubmitting.value = true
      const res = await deleteAddress(idAddressDelete.value)
      if (res.success) {
        closeModalDelete()
        toastStore.showToastModal({
          type: 'success',
          message: 'Xóa địa chỉ thành công',
          timeout: 3000
        })

        await fetchData()
      }
      isSubmitting.value = false
    }

    const fetchData = async () => {
      const res = await getListAddress()
      console.log(res)

      if (res.success) {
        addressList.value = res.addressDTOS
      }
    }

    onMounted(async () => {
      loading.value = true
      await Promise.all([fetchData()])
      loading.value = false
    })

    return {
      userStore,
      cities,
      districts,
      wards,
      isModalOpen,
      isModalDeleteOpen,
      isModalEditOpen,
      loading,
      isSubmitting,
      addressList,
      idAddressDelete,
      selectAddress,
      openModal,
      closeModal,
      openModalEdit,
      closeModalEdit,
      fetchData,
      setDefaultAddress,
      changeSelectAddress,
      deleteAdr,
      openModalDelete,
      closeModalDelete
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
  @apply text-bodyColor block mb-2 font-semibold;
}

.input-group {
  display: block;
  margin-top: 16px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  position: relative;
}

.input-group input,
.input-group textarea {
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

.ui-checkbox {
  --primary-color: #3bb77e;
  --secondary-color: #fff;
  --primary-hover-color: #def9ec;
  --checkbox-diameter: 20px;
  --checkbox-border-radius: 5px;
  --checkbox-border-color: #d9d9d9;
  --checkbox-border-width: 1px;
  --checkbox-border-style: solid;
  --checkmark-size: 1.2;
}

.ui-checkbox,
.ui-checkbox *,
.ui-checkbox *::before,
.ui-checkbox *::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.ui-checkbox {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: var(--checkbox-diameter);
  height: var(--checkbox-diameter);
  border-radius: var(--checkbox-border-radius);
  background: var(--secondary-color);
  border: var(--checkbox-border-width) var(--checkbox-border-style) var(--checkbox-border-color);
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  cursor: pointer;
  position: relative;
}

.ui-checkbox::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-box-shadow: 0 0 0 calc(var(--checkbox-diameter) / 2.5) var(--primary-color);
  box-shadow: 0 0 0 calc(var(--checkbox-diameter) / 2.5) var(--primary-color);
  border-radius: inherit;
  opacity: 0;
  -webkit-transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
  -o-transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
  transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
}

.ui-checkbox::before {
  top: 40%;
  left: 50%;
  content: '';
  position: absolute;
  width: 4px;
  height: 7px;
  border-right: 2px solid var(--secondary-color);
  border-bottom: 2px solid var(--secondary-color);
  -webkit-transform: translate(-50%, -50%) rotate(45deg) scale(0);
  -ms-transform: translate(-50%, -50%) rotate(45deg) scale(0);
  transform: translate(-50%, -50%) rotate(45deg) scale(0);
  opacity: 0;
  -webkit-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
  -o-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
  transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
}

.ui-checkbox:hover {
  border-color: var(--primary-color);
}

.ui-checkbox:checked {
  background: var(--primary-color);
  border-color: transparent;
}

.ui-checkbox:checked::before {
  opacity: 1;
  -webkit-transform: translate(-50%, -50%) rotate(45deg) scale(var(--checkmark-size));
  -ms-transform: translate(-50%, -50%) rotate(45deg) scale(var(--checkmark-size));
  transform: translate(-50%, -50%) rotate(45deg) scale(var(--checkmark-size));
  -webkit-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
  -o-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
  transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
}

.ui-checkbox:active:not(:checked)::after {
  -webkit-transition: none;
  -o-transition: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  transition: none;
  opacity: 1;
}
</style>
