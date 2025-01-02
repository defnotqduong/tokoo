<template>
  <div class="p-4 bg-whiteColor rounded-md shadow-shadow01">
    <div class="mb-4 pb-4 border-b-[1px] border-borderColor flex items-center justify-between">
      <h4 class="text-xl text-headingColor font-extrabold">Theo dõi đơn hàng</h4>
    </div>
    <div class="mb-6">
      <ul class="flex items-center justify-start text-headingColor font-bold border-b-2 border-borderColor">
        <li
          v-for="navItem in nav"
          :key="navItem.id"
          @click="setActive(navItem.id)"
          class="px-2 py-2 sm:py-4 sm:px-6 text-sm sm:text-base relative cursor-pointer transition-all duration-300 hover:text-primaryColor after:absolute after:content after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-primaryColor after:transition-all after:duration-300"
          :class="navItem.isActive ? 'after:scale-100 text-primaryColor' : 'after:scale-0 text-headingColor'"
        >
          <span>{{ navItem.label }}</span>
        </li>
      </ul>
    </div>
    <div v-if="nav[0].isActive" class="flex items-center justify-center">
      <div class="w-full">
        <div class="pb-4 flex items-center justify-between border-b border-borderColor">
          <div class="flex items-center justify-center gap-3">
            <span class="text-lg font-bold">JPKOI MALL</span>
            <span class="px-2 py-[2px] bg-primaryColor text-whiteColor rounded-md">Xem Shop</span>
          </div>
          <div class="flex items-center justify-center gap-2 text-primaryColor">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" class="mb-[2px]">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1 6C1 4.89543 1.89543 4 3 4H14C15.1046 4 16 4.89543 16 6V7H19C21.2091 7 23 8.79086 23 11V12V15V17C23.5523 17 24 17.4477 24 18C24 18.5523 23.5523 19 23 19H22H18.95C18.9828 19.1616 19 19.3288 19 19.5C19 20.8807 17.8807 22 16.5 22C15.1193 22 14 20.8807 14 19.5C14 19.3288 14.0172 19.1616 14.05 19H7.94999C7.98278 19.1616 8 19.3288 8 19.5C8 20.8807 6.88071 22 5.5 22C4.11929 22 3 20.8807 3 19.5C3 19.3288 3.01722 19.1616 3.05001 19H2H1C0.447715 19 0 18.5523 0 18C0 17.4477 0.447715 17 1 17V6ZM16.5 19C16.2239 19 16 19.2239 16 19.5C16 19.7761 16.2239 20 16.5 20C16.7761 20 17 19.7761 17 19.5C17 19.2239 16.7761 19 16.5 19ZM16.5 17H21V15V13H19C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11H21C21 9.89543 20.1046 9 19 9H16V17H16.5ZM14 17H5.5H3V6H14V8V17ZM5 19.5C5 19.2239 5.22386 19 5.5 19C5.77614 19 6 19.2239 6 19.5C6 19.7761 5.77614 20 5.5 20C5.22386 20 5 19.7761 5 19.5Z"
                fill="currentColor"
              />
            </svg>
            Giao hàng thành công
          </div>
        </div>
        <div class="py-4 flex items-center justify-start gap-4 border-b border-borderColor">
          <img src="@/assets/images/product-2.jpg" class="w-24 rounded-md" alt="" />
          <div class="flex-1">
            <div class="font-semibold">Sữa rửa mặt Ý Dĩ Hatomugi dưỡng ẩm, trắng da Moisturizing & Facial Washing 170g</div>
            <div class="text-bodyColor">Phân loại hàng: TRẮNG 170g sáng da</div>
            <div>Số lượng: 1</div>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-bodyColor line-through">{{ formatPrice(132500) }}</span>
            <span class="text-primaryColor">{{ formatPrice(128000) }}</span>
          </div>
        </div>
        <div class="pt-6 pb-4">
          <div class="text-end">
            Thành tiền: <span class="text-lg font-bold text-primaryColor">{{ formatPrice(146000) }}</span>
          </div>
          <div class="mt-4 flex items-center justify-end gap-2">
            <button class="px-4 h-10 rounded-md bg-primaryOpacityColor text-primaryColor hover:bg-primaryColor hover:text-whiteColor">Mua lại</button>
            <button @click="openModal" class="px-4 h-10 rounded-md bg-primaryColor text-whiteColor hover:bg-darkPrimaryColor">Đánh giá</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="nav[1].isActive" class="flex items-center justify-center">
      <div class="py-14">
        <img src="@/assets/images/order-list.png" class="w-32" alt="" />
        <div class="mt-2">Chưa có đơn hàng</div>
      </div>
    </div>
    <div v-if="nav[2].isActive" class="flex items-center justify-center">
      <div class="py-14">
        <img src="@/assets/images/order-list.png" class="w-32" alt="" />
        <div class="mt-2">Chưa có đơn hàng</div>
      </div>
    </div>
    <div v-if="nav[3].isActive" class="flex items-center justify-center">
      <div class="py-14">
        <img src="@/assets/images/order-list.png" class="w-32" alt="" />
        <div class="mt-2">Chưa có đơn hàng</div>
      </div>
    </div>
    <div v-if="nav[4].isActive" class="flex items-center justify-center">
      <div class="w-full">
        <div class="pb-4 flex items-center justify-between border-b border-borderColor">
          <div class="flex items-center justify-center gap-3">
            <span class="text-lg font-bold">JPKOI MALL</span>
            <span class="px-2 py-[2px] bg-primaryColor text-whiteColor rounded-md">Xem Shop</span>
          </div>
          <div class="flex items-center justify-center gap-2 text-primaryColor">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" class="mb-[2px]">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1 6C1 4.89543 1.89543 4 3 4H14C15.1046 4 16 4.89543 16 6V7H19C21.2091 7 23 8.79086 23 11V12V15V17C23.5523 17 24 17.4477 24 18C24 18.5523 23.5523 19 23 19H22H18.95C18.9828 19.1616 19 19.3288 19 19.5C19 20.8807 17.8807 22 16.5 22C15.1193 22 14 20.8807 14 19.5C14 19.3288 14.0172 19.1616 14.05 19H7.94999C7.98278 19.1616 8 19.3288 8 19.5C8 20.8807 6.88071 22 5.5 22C4.11929 22 3 20.8807 3 19.5C3 19.3288 3.01722 19.1616 3.05001 19H2H1C0.447715 19 0 18.5523 0 18C0 17.4477 0.447715 17 1 17V6ZM16.5 19C16.2239 19 16 19.2239 16 19.5C16 19.7761 16.2239 20 16.5 20C16.7761 20 17 19.7761 17 19.5C17 19.2239 16.7761 19 16.5 19ZM16.5 17H21V15V13H19C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11H21C21 9.89543 20.1046 9 19 9H16V17H16.5ZM14 17H5.5H3V6H14V8V17ZM5 19.5C5 19.2239 5.22386 19 5.5 19C5.77614 19 6 19.2239 6 19.5C6 19.7761 5.77614 20 5.5 20C5.22386 20 5 19.7761 5 19.5Z"
                fill="currentColor"
              />
            </svg>
            Giao hàng thành công
          </div>
        </div>
        <div class="py-4 flex items-center justify-start gap-4 border-b border-borderColor">
          <img src="@/assets/images/product-2.jpg" class="w-24 rounded-md" alt="" />
          <div class="flex-1">
            <div class="font-semibold">Sữa rửa mặt Ý Dĩ Hatomugi dưỡng ẩm, trắng da Moisturizing & Facial Washing 170g</div>
            <div class="text-bodyColor">Phân loại hàng: TRẮNG 170g sáng da</div>
            <div>Số lượng: 1</div>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-bodyColor line-through">{{ formatPrice(132500) }}</span>
            <span class="text-primaryColor">{{ formatPrice(128000) }}</span>
          </div>
        </div>
        <div class="pt-6 pb-4">
          <div class="text-end">
            Thành tiền: <span class="text-lg font-bold text-primaryColor">{{ formatPrice(146000) }}</span>
          </div>
          <div class="mt-4 flex items-center justify-end gap-2">
            <button class="px-4 h-10 rounded-md bg-primaryOpacityColor text-primaryColor hover:bg-primaryColor hover:text-whiteColor">Mua lại</button>
            <button @click="openModal" class="px-4 h-10 rounded-md bg-primaryColor text-whiteColor hover:bg-darkPrimaryColor">Đánh giá</button>
          </div>
        </div>
      </div>
    </div>
    <CreateReviewModal :isModalOpen="isModalOpen" :closeModal="closeModal" />
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'
import { formatPrice } from '@/utils'

import CreateReviewModal from '@/components/Account/CreateReviewModal.vue'
export default defineComponent({
  components: { CreateReviewModal },
  setup() {
    const nav = reactive([
      {
        id: 1,
        label: 'Tất cả',
        isActive: true
      },
      {
        id: 2,
        label: 'Chờ thanh toán',
        isActive: false
      },
      {
        id: 3,
        label: 'Vận chuyển',
        isActive: false
      },
      {
        id: 4,
        label: 'Chờ giao hàng',
        isActive: false
      },
      {
        id: 5,
        label: 'Hoàn thành',
        isActive: false
      }
    ])

    const setActive = id => {
      nav.forEach(item => {
        item.isActive = item.id === id
      })
    }

    const isModalOpen = ref(false)

    const openModal = () => {
      isModalOpen.value = true
    }

    const closeModal = () => {
      isModalOpen.value = false
    }

    return { formatPrice, nav, isModalOpen, setActive, openModal, closeModal }
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

<style></style>
