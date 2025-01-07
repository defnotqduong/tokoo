<template>
  <div class="mt-4">
    <div class="mb-8 border-b border-borderColor">
      <div class="container mx-auto px-4">
        <div class="pb-4 breadcrumbs text-sm text-headingColor">
          <ul>
            <li class="hover:text-primaryColor transition-all duration-300"><router-link :to="{ name: 'home' }">Trang chủ</router-link></li>
            <li class="opacity-60">Giỏ hàng</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container px-4 mx-auto">
      <h1 class="mb-3 text-2xl sm:text-3xl xl:text-4xl text-headingColor font-black">Giỏ hàng</h1>
      <div class="flex flex-col gap-2 items-center justify-center" v-if="userStore.cart.length === 0">
        <img src="@/assets/icons/cart-empty.svg" alt="Cart empty" />
        <div class="mb-2 font-bold text-bodyColor">Giỏ hàng của bạn còn trống</div>
        <PrimaryButton :content="'Mua sắm ngay'" :func="redirect" />
      </div>
      <div v-else class="mt-10">
        <table class="table table-pin-rows mb-4">
          <thead>
            <tr>
              <th>
                <input type="checkbox" class="ui-checkbox" v-model="isCheckedAll" @change="toggleAllProductIds" />
              </th>
              <th>Sản phẩm</th>
              <th class="text-center">Đơn giá</th>
              <th class="text-center">Số lượng</th>
              <th class="text-center">Số tiền</th>
              <th class="text-center">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in userStore.cart" :key="item.id">
              <td><input type="checkbox" class="ui-checkbox" :checked="ids.includes(item.id)" @change="toggleProductId(item.id)" /></td>
              <td>
                <div class="flex items-center justify-start gap-4">
                  <img :src="item?.urlImage" class="w-28 object-cover object-center rounded-lg" alt="product image" />
                  <div>
                    <span class="text-primaryColor font-bold line-clamp-1">{{ item?.productDTO?.productName }}</span>
                    <span class="text-bodyColor">{{ item?.variantDTO?.attribute }} {{ item?.size }}</span>
                  </div>
                </div>
              </td>
              <td class="text-center">{{ formatPrice(item?.productPrice) }}</td>
              <td class="text-center">
                <div class="inline-flex items-center border border-borderColor rounded-md">
                  <button
                    @click.prevent="item?.quantity > 1 ? update(item?.id, item?.quantity - 1, item?.sizeId) : deleted(item?.id)"
                    :class="['p-2 text-headingColor']"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                      <g>
                        <g id="minus">
                          <rect y="12" fill="currentColor" width="28" height="5" />
                        </g>
                      </g>
                    </svg>
                  </button>
                  <input type="text" value="1" v-model="item.quantity" readonly class="w-12 text-center border-none outline-none" />
                  <button @click.prevent="update(item?.id, item?.quantity + 1, item?.sizeId)" class="p-2 text-headingColor">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 1920 1920">
                      <path d="M866.332 213v653.332H213v186.666h653.332v653.332h186.666v-653.332h653.332V866.332h-653.332V213z" fill-rule="evenodd" />
                    </svg>
                  </button>
                </div>
              </td>
              <td class="text-center">{{ formatPrice(item?.productPrice * item?.quantity) }}</td>
              <td class="text-center">
                <button
                  @click.prevent="deleted(item?.id)"
                  class="px-3 py-2 rounded-md bg-dangerColor text-whiteColor transition-all duration-300 hover:bg-darkDangerColor"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="-3 0 32 32">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g transform="translate(-261.000000, -205.000000)" fill="currentColor">
                        <path
                          d="M268,220 C268,219.448 268.448,219 269,219 C269.552,219 270,219.448 270,220 L270,232 C270,232.553 269.552,233 269,233 C268.448,233 268,232.553 268,232 L268,220 L268,220 Z M273,220 C273,219.448 273.448,219 274,219 C274.552,219 275,219.448 275,220 L275,232 C275,232.553 274.552,233 274,233 C273.448,233 273,232.553 273,232 L273,220 L273,220 Z M278,220 C278,219.448 278.448,219 279,219 C279.552,219 280,219.448 280,220 L280,232 C280,232.553 279.552,233 279,233 C278.448,233 278,232.553 278,232 L278,220 L278,220 Z M263,233 C263,235.209 264.791,237 267,237 L281,237 C283.209,237 285,235.209 285,233 L285,217 L263,217 L263,233 L263,233 Z M277,209 L271,209 L271,208 C271,207.447 271.448,207 272,207 L276,207 C276.552,207 277,207.447 277,208 L277,209 L277,209 Z M285,209 L279,209 L279,207 C279,205.896 278.104,205 277,205 L271,205 C269.896,205 269,205.896 269,207 L269,209 L263,209 C261.896,209 261,209.896 261,211 L261,213 C261,214.104 261.895,214.999 262.999,215 L285.002,215 C286.105,214.999 287,214.104 287,213 L287,211 C287,209.896 286.104,209 285,209 L285,209 Z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="payment-container">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start gap-4">
              <input type="checkbox" class="ui-checkbox" v-model="isCheckedAll" @change="toggleAllProductIds" />
              <span>Chọn tất cả ({{ userStore.cart.length }})</span>
            </div>
            <div class="flex items-center justify-start gap-6">
              <div>
                Tổng thanh toán ({{ ids.length }} Sản phẩm): <span class="text-lg text-primaryColor font-bold">{{ formatPrice(totalAmount) }}</span>
              </div>
              <PrimaryButton :content="'Thanh toán'" :func="checkout" :loading="isSubmitting" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'
import { useHomeStore, useUserStore, useToastStore } from '@/stores'
import { useRouter } from 'vue-router'
import { formatPrice } from '@/utils'
import { addToCart, getCart, updateItemFromCart, deleteItemFromCart } from '@/webServices/cartService'
import { createOrder } from '@/webServices/orderService'

import PrimaryButton from '@/components/Button/PrimaryButton.vue'

export default defineComponent({
  components: { PrimaryButton },
  setup() {
    const router = useRouter()
    const isSubmitting = ref(false)

    const homeStore = useHomeStore()
    const userStore = useUserStore()
    const toastStore = useToastStore()

    const isCheckedAll = ref(false)
    const totalAmount = ref(0)

    const ids = ref([])

    const redirect = () => {
      router.push({ name: 'products' })
    }

    const checkout = async () => {
      userStore.setOrderIds(ids.value)
      if (ids.value.length > 0) router.push({ name: 'checkout' })
    }

    const toggleProductId = productId => {
      const index = ids.value.indexOf(productId)
      if (index === -1) {
        ids.value.push(productId)
      } else {
        ids.value.splice(index, 1)
      }

      totalAmount.value = ids.value.reduce((sum, id) => {
        const product = userStore.cart.find(item => item.id === id)
        return product ? sum + product.productPrice * product.quantity : sum
      }, 0)
    }

    const toggleAllProductIds = event => {
      if (event.target.checked) {
        const allIds = userStore.cart.map(product => product.id)
        ids.value = Array.from(new Set([...ids.value, ...allIds]))
      } else {
        ids.value = []
      }

      totalAmount.value = ids.value.reduce((sum, id) => {
        const product = userStore.cart.find(item => item.id === id)
        return product ? sum + product.productPrice * product.quantity : sum
      }, 0)
    }

    const update = async (cartItemId, quantity, sizeId) => {
      const res = await updateItemFromCart({
        cartItemId: cartItemId,
        quantity: quantity,
        sizeId: sizeId
      })

      if (res.success) {
        const cartData = await getCart()
        userStore.setCart(cartData.dto?.cartItemDTOS || [])
      }
    }

    const deleted = async cartItemId => {
      const res = await deleteItemFromCart(cartItemId)

      if (res.success) {
        toastStore.showToastModal({
          type: 'success',
          message: 'Sản phẩm đã được xóa khỏi giỏ hàng',
          timeout: 3000
        })

        const cartData = await getCart()
        userStore.setCart(cartData.dto?.cartItemDTOS || [])
      }
    }

    return {
      ids,
      userStore,
      formatPrice,
      isCheckedAll,
      totalAmount,
      isSubmitting,
      redirect,
      checkout,
      toggleProductId,
      toggleAllProductIds,
      update,
      deleted
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
.table thead {
  @apply bg-primaryOpacityColor;
}
.table th {
  @apply text-base text-primaryColor font-bold;
}

.table thead tr {
  border-bottom: none;
}

.table tbody tr {
  @apply border-b border-borderColor;
}

.payment-container {
  @apply sticky bottom-0 px-4 py-8 bg-whiteColor rounded-md border border-borderColor shadow-shadow06;
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
