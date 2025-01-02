<template>
  <footer class="mt-16">
    <div class="container mx-auto px-4">
      <div class="pt-6 pb-8 grid grid-cols-5 gap-4">
        <div class="col-span-1">
          <router-link :to="{ name: 'home' }" class="text-primaryColor">
            <svg xmlns="http://www.w3.org/2000/svg" width="164" height="56" viewBox="0 0 117 31" fill="currentColor">
              <path
                class="tokoo-svg"
                d="M24.471,26.8L22.72,6.809a0.847,0.847,0,0,0-.838-0.78h-3.6a6.041,6.041,0,0,0-12.083,0H2.6a0.843,0.843,0,0,0-.838.78L0.006,26.8c0,0.026-.006.05-0.006,0.076A4.381,4.381,0,0,0,4.59,31h15.3a4.381,4.381,0,0,0,4.59-4.126A0.309,0.309,0,0,0,24.471,26.8ZM12.239,1.712a4.386,4.386,0,0,1,4.353,4.317H7.886A4.385,4.385,0,0,1,12.239,1.712Zm7.648,27.576H4.59a2.7,2.7,0,0,1-2.9-2.377L3.365,7.747H6.191v2.6a0.844,0.844,0,1,0,1.688,0v-2.6h8.712v2.6a0.844,0.844,0,1,0,1.689,0v-2.6h2.827l1.682,19.164A2.709,2.709,0,0,1,19.887,29.288Zm24.472-.042h1.26a1.533,1.533,0,0,0,1.188-.47,1.766,1.766,0,0,0,0-2.315,1.535,1.535,0,0,0-1.188-.47h-1.26a2.793,2.793,0,0,1-1.962-.543,2.506,2.506,0,0,1-.558-1.844v-8.68h4.393a0.882,0.882,0,0,0,.756-0.416,1.861,1.861,0,0,0,0-1.989,0.883,0.883,0,0,0-.756-0.416H41.839V5.485a1.03,1.03,0,0,0-.594-0.868,2.483,2.483,0,0,0-1.314-.362,2.389,2.389,0,0,0-1.3.362,1.031,1.031,0,0,0-.576.868V23.6q0,5.642,6.3,5.642h0Zm6.877-1.881a7.323,7.323,0,0,0,10.424-.018,6.805,6.805,0,0,0,2.251-5.009V19.011A6.677,6.677,0,0,0,61.679,14,7.521,7.521,0,0,0,51.2,14.02,6.745,6.745,0,0,0,49,19.011v3.327A6.808,6.808,0,0,0,51.237,27.366Zm1.548-8.343a3.683,3.683,0,0,1,1.08-2.587,3.477,3.477,0,0,1,5.167,0,3.653,3.653,0,0,1,1.1,2.587v3.305a3.755,3.755,0,0,1-1.1,2.641,3.442,3.442,0,0,1-5.167,0,3.786,3.786,0,0,1-1.08-2.641V19.022Zm15,9.826a2.1,2.1,0,0,0,1.314.4,2.346,2.346,0,0,0,1.368-.4,1.1,1.1,0,0,0,.576-0.868V23.46l2.629-2.387,5.293,7.848a1.2,1.2,0,0,0,1.008.543,2.166,2.166,0,0,0,1.4-.633,1.761,1.761,0,0,0,.72-1.284,1.17,1.17,0,0,0-.216-0.651l-5.653-8.174,4.645-4.159a1.084,1.084,0,0,0,.324-0.8,1.691,1.691,0,0,0-.612-1.23,1.807,1.807,0,0,0-1.224-.579,1.075,1.075,0,0,0-.792.325l-7.526,6.944V3.134a1.018,1.018,0,0,0-.558-0.886A2.6,2.6,0,0,0,69.1,1.9a2.325,2.325,0,0,0-1.332.344,1.034,1.034,0,0,0-.5.886V27.98A1.108,1.108,0,0,0,67.782,28.848ZM85.7,27.366a7.323,7.323,0,0,0,10.424-.018,6.805,6.805,0,0,0,2.25-5.009V19.011A6.677,6.677,0,0,0,96.137,14a7.521,7.521,0,0,0-10.478.018,6.745,6.745,0,0,0-2.2,4.991v3.327A6.807,6.807,0,0,0,85.7,27.366Zm1.548-8.343a3.683,3.683,0,0,1,1.08-2.587,3.477,3.477,0,0,1,5.167,0,3.654,3.654,0,0,1,1.1,2.587v3.305a3.755,3.755,0,0,1-1.1,2.641,3.442,3.442,0,0,1-5.167,0,3.786,3.786,0,0,1-1.08-2.641V19.022Zm15.987,8.343a7.323,7.323,0,0,0,10.424-.018,6.8,6.8,0,0,0,2.25-5.009V19.011A6.677,6.677,0,0,0,113.673,14a7.521,7.521,0,0,0-10.478.018,6.744,6.744,0,0,0-2.2,4.991v3.327A6.807,6.807,0,0,0,103.231,27.366Zm1.548-8.343a3.683,3.683,0,0,1,1.08-2.587,3.477,3.477,0,0,1,5.167,0,3.653,3.653,0,0,1,1.1,2.587v3.305a3.754,3.754,0,0,1-1.1,2.641,3.442,3.442,0,0,1-5.167,0,3.787,3.787,0,0,1-1.08-2.641V19.022Z"
              ></path>
            </svg>
          </router-link>
          <ul class="mt-6">
            <li class="flex items-center gap-1 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" class="text-primaryColor">
                <path
                  d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <strong>Địa chỉ:</strong>Hà Nội, Việt Nam
            </li>
            <li class="flex items-center gap-1 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" class="text-primaryColor">
                <path
                  d="M2.74982 18.6508C2.33982 18.6508 1.99982 18.3108 1.99982 17.9008V12.2008C1.94982 9.49078 2.95982 6.93078 4.83982 5.01078C6.71982 3.10078 9.23982 2.05078 11.9498 2.05078C17.4898 2.05078 21.9998 6.56078 21.9998 12.1008V17.8008C21.9998 18.2108 21.6598 18.5508 21.2498 18.5508C20.8398 18.5508 20.4998 18.2108 20.4998 17.8008V12.1008C20.4998 7.39078 16.6698 3.55078 11.9498 3.55078C9.63982 3.55078 7.49982 4.44078 5.90982 6.06078C4.30982 7.69078 3.45982 9.86078 3.49982 12.1808V17.8908C3.49982 18.3108 3.16982 18.6508 2.74982 18.6508Z"
                  fill="currentColor"
                />
                <path
                  d="M5.94 12.4492H5.81C3.71 12.4492 2 14.1592 2 16.2592V18.1392C2 20.2392 3.71 21.9492 5.81 21.9492H5.94C8.04 21.9492 9.75 20.2392 9.75 18.1392V16.2592C9.75 14.1592 8.04 12.4492 5.94 12.4492Z"
                  fill="currentColor"
                />
                <path
                  d="M18.19 12.4492H18.06C15.96 12.4492 14.25 14.1592 14.25 16.2592V18.1392C14.25 20.2392 15.96 21.9492 18.06 21.9492H18.19C20.29 21.9492 22 20.2392 22 18.1392V16.2592C22 14.1592 20.29 12.4492 18.19 12.4492Z"
                  fill="currentColor"
                />
              </svg>
              <strong>SĐT:</strong> 03 7374 5152
            </li>
            <li class="flex items-center gap-1 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" class="text-primaryColor">
                <path
                  d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
              <strong>Email:</strong>email@example.com
            </li>
            <li class="flex items-center gap-1 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" class="text-primaryColor">
                <path
                  d="M12 7V12H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <strong class="whitespace-nowrap">Thời gian:</strong> 8:00 - 18:00
            </li>
          </ul>
        </div>
        <div class="pt-4 col-span-1">
          <h4 class="mb-4 text-2xl text-headingColor font-bold">Công ty</h4>
          <ul class="footer-list">
            <li class="footer-item">
              <a href="">Giới thiệu về chúng tôi</a>
            </li>
            <li class="footer-item">
              <a href="">Thông tin giao hàng</a>
            </li>
            <li class="footer-item">
              <a href="">Chính sách bảo mật</a>
            </li>
            <li class="footer-item">
              <a href="">Điều khoản & Điều kiện</a>
            </li>
            <li class="footer-item">
              <a href="">Trung tâm hỗ trợ</a>
            </li>
          </ul>
        </div>
        <div class="pt-4 col-span-1">
          <h4 class="mb-4 text-2xl text-headingColor font-bold">Tài khoản</h4>
          <ul class="footer-list">
            <li class="footer-item">
              <a href="">Đăng nhập</a>
            </li>
            <li class="footer-item">
              <a href="">Xem giỏ hàng</a>
            </li>
            <li class="footer-item">
              <a href="">Danh sách yêu thích</a>
            </li>
            <li class="footer-item">
              <a href="">Thông tin giao hàng</a>
            </li>
          </ul>
        </div>
        <div class="pt-4 col-span-1">
          <h4 class="mb-4 text-2xl text-headingColor font-bold">Doanh nghiệp</h4>
          <ul class="footer-list">
            <li class="footer-item">
              <a href="">Trở thành nhà cung cấp</a>
            </li>
            <li class="footer-item">
              <a href="">Chương trình liên kết</a>
            </li>
            <li class="footer-item">
              <a href="">Nhà cung cấp của chúng tôi</a>
            </li>
            <li class="footer-item">
              <a href="">Khuyến mãi</a>
            </li>
          </ul>
        </div>
        <div class="pt-4 col-span-1">
          <h4 class="mb-4 text-2xl text-headingColor font-bold">Danh mục phổ biến</h4>
          <ul class="footer-list">
            <li class="footer-item">
              <a href="">Sữa và sữa có hương vị</a>
            </li>
            <li class="footer-item">
              <a href="">Trà và Kombucha</a>
            </li>
            <li class="footer-item">
              <a href="">Bơ và margarine</a>
            </li>
            <li class="footer-item">
              <a href="">Mứt</a>
            </li>
            <li class="footer-item">
              <a href="">Kem chua và sốt</a>
            </li>
          </ul>
        </div>
        <div class="col-span-1">
          <h4 class="mb-4 text-2xl text-headingColor font-bold">Cài đặt ứng dụng</h4>
          <p class="text-headingColor opacity-80">Từ App Store hoặc Google Play</p>
          <div class="mt-6 flex items-center gap-3">
            <button>
              <img src="@/assets/images/app-store.jpg" class="max-w-32 object-cover object-center" alt="app store" />
            </button>
            <button>
              <img src="@/assets/images/google-play.jpg" class="max-w-32 object-cover object-center" alt="google play" />
            </button>
          </div>
          <p class="my-6">Cổng thanh toán an toàn</p>
          <img src="@/assets/images/payment-method.png" alt="payment method" />
        </div>
      </div>
      <div class="w-full border-t border-borderColor"></div>
      <div class="py-4 flex items-center justify-between">
        <div>
          <p class="text-bodyColor">
            Bản quyền © 2024
            <a
              href=""
              class="text-headingColor font-semibold relative transition-all duration-300 hover:text-primaryColor after:absolute after:content after:bottom-0 after:left-auto after:right-0 after:w-0 after:h-[1px] after:bg-primaryColor after:rounded hover:after:w-full hover:after:right-auto hover:after:left-0 after:transition-width after:duration-300"
              >QuangDuong</a
            >.
          </p>
        </div>
        <div class="flex items-center gap-4">
          <span class="text-sm text-headingColor font-bold">Follow us</span>
          <SocialListV1 />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue'
import SocialListV1 from '@/components/SocialList/SocialListV1.vue'
export default defineComponent({
  components: { SocialListV1 }
})
</script>

<style scoped>
.footer-list {
  @apply flex flex-col gap-3;
}

.footer-item {
  @apply text-bodyColor transition-all duration-300;
}

.footer-item:hover {
  transform: translateX(4px);
  @apply text-primaryColor;
}
</style>
