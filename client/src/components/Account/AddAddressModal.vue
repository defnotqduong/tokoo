<template>
  <div>
    <input type="checkbox" id="my_modal_add_address" class="modal-toggle" v-model="isModalOpen" />
    <div class="modal" role="dialog">
      <div class="modal-box max-w-[600px] bg-white py-6 px-8">
        <div>
          <h4 class="text-xl font-bold">Thêm địa chỉ</h4>
        </div>
        <form class="form">
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-6">
              <div class="input-group">
                <label for="username" class="title">Họ và tên <span class="text-dangerColor">*</span></label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Họ và tên"
                  v-model="username"
                  @input="validateUsername"
                  @blur="validateUsername"
                />
              </div>
              <div v-if="errors?.username && errors?.username.length > 0">
                <p v-for="(err, index) in errors?.username" :key="index" class="mt-2 text-sm text-red-500">{{ err }}</p>
              </div>
            </div>
            <div class="col-span-6">
              <div class="input-group">
                <label for="phone-nummber" class="title">Số điện thoại <span class="text-dangerColor">*</span></label>
                <input
                  type="text"
                  name="phone-nummber"
                  id="phone-nummber"
                  placeholder="Số điện thoại"
                  v-model="phoneNumber"
                  @input="validatePhoneNumber"
                  @blur="validatePhoneNumber"
                />
              </div>
              <div v-if="errors?.phoneNumber && errors?.phoneNumber.length > 0">
                <p v-for="(err, index) in errors?.phoneNumber" :key="index" class="mt-2 text-sm text-red-500">{{ err }}</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12">
              <div class="input-group">
                <label for="full-address" class="title">Tỉnh/Thành phố, Quận/Huyện, Phường/Xã <span class="text-dangerColor">*</span></label>
                <div class="relative" ref="selectLocationForm">
                  <div class="relative">
                    <input
                      type="text"
                      name="full-address"
                      id="full-address"
                      placeholder="Tỉnh/Thành phố, Quận/Huyện, Phường/Xã"
                      readonly
                      v-model="fullAddress"
                      @focus="toggleSelectLocation"
                    />
                    <button
                      v-show="isSelectLocation"
                      @click.prevent="
                        () => {
                          ward = ''
                          district = ''
                          province = ''
                          fullAddress = ''
                          selectedCity = null
                          selectedDistrict = null
                          selectedWard = null
                          isSelectCity = true
                          isSelectDistrict = false
                          isSelectWard = false
                        }
                      "
                      class="absolute top-1/2 -translate-y-1/2 right-6 text-bodyColor opacity-80"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 1024 1024">
                        <path
                          d="M896 512c0-212.077-171.921-384-384-384-212.077 0-384 171.923-384 384 0 212.079 171.923 384 384 384 212.079 0 384-171.921 384-384zM579.883 398.863c12.497-12.497 32.759-12.497 45.257 0 12.493 12.497 12.493 32.757 0 45.254L557.257 512l67.878 67.883c12.497 12.497 12.497 32.759 0 45.257-12.493 12.493-32.755 12.493-45.252 0L512 557.257l-67.883 67.883c-12.497 12.493-32.757 12.493-45.254 0-12.497-12.497-12.497-32.759 0-45.257L466.744 512l-67.881-67.883c-12.497-12.497-12.497-32.758 0-45.254s32.757-12.497 45.254 0L512 466.744l67.883-67.881z"
                        />
                      </svg>
                    </button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 15 15"
                      fill="none"
                      class="absolute top-1/2 -translate-y-1/2 right-2 text-bodyColor opacity-80"
                    >
                      <path d="M7.49992 10.2072L11.707 6.00006L3.29282 6.00006L7.49992 10.2072Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div v-show="isSelectLocation" class="mt-2 border border-borderColor rounded-md">
                    <ul class="flex items-center justify-start border-b border-borderColor">
                      <li
                        class="flex-1 text-center p-4 relative cursor-pointer transition-all duration-300 hover:text-primaryColor after:absolute after:content after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-primaryColor after:transition-all after:duration-300"
                        :class="isSelectCity ? 'after:scale-100 text-primaryColor' : 'after:scale-0 text-headingColor'"
                      >
                        <button @click.prevent="setSelectCity">Tỉnh/Thành phố</button>
                      </li>
                      <li
                        class="flex-1 text-center p-4 relative cursor-pointer transition-all duration-300 hover:text-primaryColor after:absolute after:content after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-primaryColor after:transition-all after:duration-300"
                        :class="isSelectDistrict ? 'after:scale-100 text-primaryColor' : 'after:scale-0 text-headingColor'"
                      >
                        <button :disabled="!selectedCity" @click.prevent="setSelectDistrict" :class="{ 'cursor-not-allowed': !selectedCity }">
                          Quận/Huyện
                        </button>
                      </li>
                      <li
                        class="flex-1 text-center p-4 relative cursor-pointer transition-all duration-300 hover:text-primaryColor after:absolute after:content after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-primaryColor after:transition-all after:duration-300"
                        :class="isSelectWard ? 'after:scale-100 text-primaryColor' : 'after:scale-0 text-headingColor'"
                      >
                        <button :disabled="!selectedDistrict" @click.prevent="setSelectWard" :class="{ 'cursor-not-allowed': !selectedDistrict }">
                          Phường/Xã
                        </button>
                      </li>
                    </ul>
                    <div class="max-h-[60vh] overflow-auto custom-scrollbar">
                      <ul v-if="isSelectCity">
                        <li
                          v-for="(city, index) in cities"
                          :key="index"
                          class="px-4 py-2 cursor-pointer hover:bg-grayLightColor"
                          @click="selectCity(city, $event)"
                        >
                          {{ city.name }}
                        </li>
                      </ul>
                      <ul v-if="isSelectDistrict">
                        <li
                          v-for="(district, index) in filteredDistricts"
                          :key="index"
                          class="px-4 py-2 cursor-pointer hover:bg-grayLightColor"
                          @click="selectDistrict(district, $event)"
                        >
                          {{ district.name }}
                        </li>
                      </ul>
                      <ul v-if="isSelectWard">
                        <li
                          v-for="(ward, index) in filteredWards"
                          :key="index"
                          class="px-4 py-2 cursor-pointer hover:bg-grayLightColor"
                          @click="selectWard(ward, $event)"
                        >
                          {{ ward.name }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="errors?.fullAddress && errors?.fullAddress.length > 0">
                <p v-for="(err, index) in errors?.fullAddress" :key="index" class="mt-2 text-sm text-red-500">{{ err }}</p>
              </div>
            </div>
          </div>
          <div class="grid gird-cols-12 gap-4">
            <div class="col-span-12">
              <div class="input-group">
                <label for="specific-address" class="title">Địa chỉ cụ thể <span class="text-dangerColor">*</span></label>
                <textarea
                  type="text"
                  name="specific-address"
                  id="specific-address"
                  placeholder="Địa chỉ cụ thể"
                  v-model="specificAddress"
                  @input="validateSpecificAddress"
                  @blur="validateSpecificAddress"
                  class="resize-none min-h-20"
                ></textarea>
              </div>
              <div v-if="errors?.specificAddress && errors?.specificAddress.length > 0">
                <p v-for="(err, index) in errors?.specificAddress" :key="index" class="mt-2 text-sm text-red-500">{{ err }}</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12">
              <div class="mt-4 flex items-center justify-start gap-3">
                <input type="checkbox" class="ui-checkbox" v-model="defaultAddress" />
                <span>Đặt làm địa chỉ mặc định</span>
              </div>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-end gap-4">
            <button
              @click.prevent="close"
              ref="cancelButton"
              class="px-4 h-10 bg-dangerColor text-whiteColor transition-all duration-300 rounded-lg hover:bg-darkDangerColor"
            >
              Hủy
            </button>
            <button
              @click.prevent="addNewAddress"
              class="px-4 h-10 bg-primaryColor text-whiteColor transition-all duration-300 rounded-lg hover:bg-darkPrimaryColor"
            >
              Thêm
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, ref, toRefs, computed, onUnmounted } from 'vue'
import { useUserStore, useToastStore } from '@/stores'
import axios from 'axios'
import { addAddress } from '@/webServices/userService'

export default defineComponent({
  props: {
    isModalOpen: Boolean,
    closeModal: Function,
    fetchData: Function,
    cities: Array,
    districts: Array,
    wards: Array
  },
  setup(props) {
    const userStore = useUserStore()
    const toastStore = useToastStore()

    const filteredDistricts = ref([])
    const filteredWards = ref([])
    const selectedCity = ref(null)
    const selectedDistrict = ref(null)
    const selectedWard = ref(null)

    const selectLocationForm = ref(null)

    const isSelectLocation = ref(false)
    const isSelectCity = ref(false)
    const isSelectDistrict = ref(false)
    const isSelectWard = ref(false)

    const address = reactive({
      username: '',
      phoneNumber: '',
      ward: '',
      district: '',
      province: '',
      fullAddress: '',
      specificAddress: '',
      defaultAddress: false
    })

    const isErrorUsername = ref(false)
    const isErrorPhoneNumber = ref(false)
    const isErrorFullAddress = ref(false)
    const isErrorSpecificAddress = ref(false)

    const errors = ref({
      username: [],
      phoneNumber: [],
      fullAddress: [],
      specificAddress: []
    })

    const loading = ref(false)

    const setSelectCity = () => {
      isSelectCity.value = true
      isSelectDistrict.value = false
      isSelectWard.value = false
    }

    const setSelectDistrict = () => {
      isSelectCity.value = false
      isSelectDistrict.value = true
      isSelectWard.value = false
    }

    const setSelectWard = () => {
      isSelectCity.value = false
      isSelectDistrict.value = false
      isSelectWard.value = true
    }

    const clearAddressForm = () => {
      address.username = ''
      address.phoneNumber = ''
      address.ward = ''
      address.district = ''
      address.province = ''
      address.fullAddress = ''
      address.specificAddress = ''
      address.defaultAddress = false
    }

    const clearErrors = () => {
      errors.value = {
        username: [],
        phoneNumber: [],
        fullAddress: [],
        specificAddress: []
      }
    }

    const clearSelect = () => {
      isSelectLocation.value = false
      isSelectCity.value = false
      isSelectDistrict.value = false
      isSelectWard.value = false
      selectedCity.value = null
      selectedDistrict.value = null
      selectedWard.value = null
    }

    const toggleSelectLocation = () => {
      isSelectLocation.value = true
      if (!(isSelectCity.value || isSelectDistrict.value || isSelectWard.value)) {
        setSelectCity()
      }
      document.addEventListener('click', handleClickOutside)
    }

    const close = () => {
      document.removeEventListener('click', handleClickOutside)
      clearErrors()
      clearAddressForm()
      clearSelect()
      props.closeModal()
    }

    const selectCity = (city, event) => {
      event.stopPropagation()
      selectedCity.value = city.code
      address.province = city.name
      address.district = ''
      address.ward = ''
      filteredDistricts.value = props.districts.filter(district => district.province_code === city.code)
      filteredWards.value = []
      selectedDistrict.value = null
      selectedWard.value = null
      setSelectDistrict()
      updateFullAddress()
    }

    const selectDistrict = (district, event) => {
      event.stopPropagation()
      selectedDistrict.value = district.code
      address.district = district.name
      address.ward = ''
      filteredWards.value = props.wards.filter(ward => ward.district_code === district.code)
      selectedWard.value = null
      setSelectWard()
      updateFullAddress()
    }

    const selectWard = (ward, event) => {
      event.stopPropagation()
      selectedWard.value = ward.code
      address.ward = ward.name
      updateFullAddress()
      validateFullAddress()
      isSelectLocation.value = false
    }

    const filterDistricts = () => {
      filteredDistricts.value = props.districts.filter(district => district.province_code === selectedCity.value)
      filteredWards.value = []
      selectedDistrict.value = null
      selectedWard.value = null
    }

    const filterWards = () => {
      filteredWards.value = props.wards.filter(ward => ward.district_code === selectedDistrict.value)
      selectedWard.value = null
    }

    const updateFullAddress = () => {
      address.fullAddress = [address.province, address.district, address.ward].filter(item => item).join(', ')
    }

    const handleClickOutside = event => {
      if (!selectLocationForm.value || !selectLocationForm.value.contains(event.target)) {
        isSelectLocation.value = false
        validateFullAddress()
        document.removeEventListener('click', handleClickOutside)
      }
    }

    const validateUsername = () => {
      errors.value.username = []

      if (!address.username) {
        errors.value.username.push('Vui lòng nhập họ và tên')
        isErrorUsername.value = true
      } else {
        isErrorUsername.value = false
      }
    }

    const validatePhoneNumber = () => {
      errors.value.phoneNumber = []
      if (!address.phoneNumber) {
        errors.value.phoneNumber.push('Vui lòng nhập số điện thoại')
        isErrorPhoneNumber.value = true
      } else if (!/^[0-9]+$/.test(address.phoneNumber)) {
        errors.value.phoneNumber.push('Số điện thoại chỉ được phép chứa chữ số')
        isErrorPhoneNumber.value = true
      } else if (address.phoneNumber.length < 10 || address.phoneNumber.length > 15) {
        errors.value.phoneNumber.push('Số điện thoại phải chứa từ 10 đến 15 chữ số')
        isErrorPhoneNumber.value = true
      } else {
        isErrorPhoneNumber.value = false
      }
    }

    const validateFullAddress = () => {
      errors.value.fullAddress = []

      if (!address.province) {
        errors.value.fullAddress.push('Vui lòng chọn Tỉnh/Thành phố, Quận/Huyện, Phường/Xã')
        isErrorFullAddress.value = true
      } else if (!address.district) {
        errors.value.fullAddress.push('Vui lòng chọn Quận/Huyện, Phường/Xã')
        isErrorFullAddress.value = true
      } else if (!address.ward) {
        errors.value.fullAddress.push('Vui lòng chọn Phường/Xã')
        isErrorFullAddress.value = true
      } else {
        isErrorFullAddress.value = false
      }
    }

    const validateSpecificAddress = () => {
      errors.value.specificAddress = []

      if (!address.specificAddress) {
        errors.value.specificAddress.push('Vui lòng nhập địa chỉ cụ thể')
        isErrorSpecificAddress.value = true
      } else {
        isErrorSpecificAddress.value = false
      }
    }

    const addNewAddress = async () => {
      loading.value = true
      validateUsername()
      validatePhoneNumber()
      validateFullAddress()
      validateSpecificAddress()

      if (isErrorUsername.value || isErrorPhoneNumber.value || isErrorFullAddress.value || isErrorSpecificAddress.value) {
        loading.value = false
        return
      }

      const res = await addAddress({
        nameCustomer: address.username,
        phoneNumber: address.phoneNumber,
        specificAddress: address.specificAddress,
        ward: address.ward,
        district: address.district,
        province: address.province,
        fullAddress: address.fullAddress,
        defaultAddress: address.defaultAddress
      })

      if (res.success) {
        toastStore.showToastModal({
          type: 'success',
          message: 'Thêm địa chỉ thành công',
          timeout: 3000
        })
        props.fetchData()
        close()
      }

      loading.value = false
    }

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside)
    })

    return {
      userStore,
      filteredDistricts,
      filteredWards,
      isSelectLocation,
      isSelectCity,
      isSelectDistrict,
      selectLocationForm,
      isSelectWard,
      selectedCity,
      selectedDistrict,
      selectedWard,
      selectCity,
      selectDistrict,
      selectWard,
      filterDistricts,
      filterWards,
      ...toRefs(address),
      errors,
      loading,
      addNewAddress,
      close,
      toggleSelectLocation,
      setSelectCity,
      setSelectDistrict,
      setSelectWard,
      handleClickOutside,
      clearSelect,
      validateUsername,
      validatePhoneNumber,
      validateFullAddress,
      validateSpecificAddress
    }
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

.input-group input:focus,
.input-group textarea:focus {
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
