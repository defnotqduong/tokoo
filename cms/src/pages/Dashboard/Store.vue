<template>
  <div class="content-container">
    <div class="py-4 px-4 flex items-center justify-between border-b border-borderColor">
      <h3 class="text-lg font-bold">Danh sách Store</h3>
    </div>
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-3" v-for="store in stores" :key="store">
        <div class="p-4 rounded-md border border-borderColor hover:border-primaryColor transition-all duration-300">
          <div class="p-4 flex items-center justify-center bg-[#eef2f7] rounded-md">
            <svg
              xmlns:dc="http://purl.org/dc/elements/1.1/"
              xmlns:cc="http://creativecommons.org/ns#"
              xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
              xmlns:svg="http://www.w3.org/2000/svg"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
              xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
              viewBox="0 0 1000 420.62616"
              version="1.1"
              xml:space="preserve"
              style="clip-rule: evenodd; fill-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 1.41420996"
              id="svg817"
              sodipodi:docname="image.svg"
              inkscape:version="0.92.3 (2405546, 2018-03-11)"
              class="w-1/2"
            >
              <metadata id="metadata823">
                <rdf:RDF
                  ><cc:Work rdf:about=""
                    ><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title /></cc:Work
                ></rdf:RDF>
              </metadata>
              <defs id="defs821" />
              <sodipodi:namedview
                pagecolor="#ffffff"
                bordercolor="#666666"
                borderopacity="1"
                objecttolerance="10"
                gridtolerance="10"
                guidetolerance="10"
                inkscape:pageopacity="0"
                inkscape:pageshadow="2"
                inkscape:window-width="1366"
                inkscape:window-height="745"
                id="namedview819"
                showgrid="false"
                fit-margin-top="0"
                fit-margin-left="0"
                fit-margin-right="0"
                fit-margin-bottom="0"
                inkscape:zoom="0.61131725"
                inkscape:cx="539"
                inkscape:cy="0.63205701"
                inkscape:window-x="-8"
                inkscape:window-y="-8"
                inkscape:window-maximized="1"
                inkscape:current-layer="svg817"
              />
              <path
                d="M 948.70844,408.17918 800.55135,0.26917 800.44926,0 h -2.9238 L 767.01598,83.824495 711.47332,236.42759 711.34335,236.307 c -19.25059,-16.9858 -46.40932,-27.60425 -80.61297,-31.55833 l -10.43282,-1.07669 10.34927,-1.32731 c 56.40588,-10.1358 94.32228,-45.75958 94.32228,-88.67892 0,-58.856285 -55.35702,-99.93781 -134.65197,-99.93781 H 425.33207 v 2.97948 h 47.94081 V 320.82757 L 356.8412,0.26917 356.73911,0 h -2.9238 l -30.50948,83.824495 -117.67544,323.305835 -0.724,0.0835 c -2.01137,0.24783 -4.00048,0.44553 -5.96824,0.59404 -2.96091,0.23205 -5.90325,0.37128 -8.85489,0.37128 H 71.182603 L 297.19596,16.70733 l 1.68,-2.94235 H 22.452825 v 121.10048 h 2.933069 C 25.905678,75.879222 60.25785,16.70735 136.15564,16.70735 h 91.56557 L 0,411.11225 H 306.78411 V 295.08897 h -2.93307 c -0.39911,51.41223 -29.54416,100.24411 -92.92071,111.27096 l -2.01417,0.34342 48.26569,-132.66565 h 135.20889 l 48.72049,134.14148 h -48.06149 v 2.93307 h 188.6353 v -2.93307 h -48.26568 v -202.3446 h 55.69116 c 56.67506,0 89.18014,25.32091 89.18014,69.44689 v 35.89296 c 0,3.95408 0.26918,9.73667 0.5662,14.57253 v 0.17635 l -29.93401,82.2373 h -39.10449 v 2.93308 h 80.94712 v -2.93308 h -38.6868 l 27.26083,-74.88606 c 0.0557,0.72398 0.0835,1.16023 0.0835,1.16023 l 0.75183,6.74791 0.72399,4.46457 c 4.54811,27.61356 15.11088,47.91299 31.38198,60.33212 l 2.33903,1.69858 c 12.36344,8.595 27.72491,12.94819 45.68532,12.94819 23.78941,0 39.65212,-5.93111 52.74882,-19.89102 l -1.71713,-1.61505 c -12.06643,11.13824 -22.19294,15.64922 -34.88125,15.64922 -21.61746,0 -32.93204,-26.22126 -32.93204,-52.08052 v -50.28914 c 0.11505,-12.47854 -1.83874,-24.88931 -5.78261,-36.72833 l -0.53835,-1.55935 v -0.0557 h 98.89825 l 48.72049,134.14148 h -48.06148 v 2.93307 H 1000 v -2.93307 z M 258.25854,271.10463 324.86519,88.112716 391.32332,271.10463 Z M 533.4472,202.89223 V 16.70735 h 42.51092 c 56.78644,0 86.76686,33.758133 86.76686,97.5895 0,67.88755 -17.20858,88.59538 -73.61446,88.59538 z m 202.60449,68.2124 -0.28773,-0.72398 C 731.369,259.67681 724.971,249.91043 716.91249,241.60687 l -2.78456,-2.78455 -0.29702,-0.27846 54.7073,-150.431144 66.45813,182.991914 z"
                style="fill-rule: nonzero; stroke-width: 0.9281863"
                id="path815"
                inkscape:connector-curvature="0"
              />
            </svg>
          </div>
          <div>
            <div class="mt-4 flex items-center justify-between">
              <span class="font-bold">{{ store.name }}</span>
              <div class="flex items-center justify-center gap-2">
                <span class="text-sm flex items-center justify-center p-1 bg-[#eef2f7] rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" :width="14" :height="14" fill="currentColor" viewBox="0 0 16 16" class="text-secondaryColor">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    ></path>
                  </svg>
                  {{ store.star }}
                </span>
                <span class="text-sm">{{ store.reviews }}</span>
              </div>
            </div>
            <div class="mt-2 text-primaryColor">{{ store.email }}</div>
            <ul class="mt-2 text-bodyColor text-sm">
              <li>{{ store.address }}</li>
              <li>{{ store.phone }}</li>
            </ul>
            <div class="mt-6 flex items-center">
              <div class="flex-1">
                <div class="text-center font-bold">{{ store.stock }}</div>
                <div class="text-center text-bodyColor">Kho hàng</div>
              </div>
              <div class="flex-1">
                <div class="text-center font-bold">{{ store.sells }}</div>
                <div class="text-center text-bodyColor">Đã bán</div>
              </div>
            </div>
            <div class="py-4 border-t border-borderColor flex items-center justify-center gap-6">
              <button class="flex-1 px-4 py-2 bg-primaryColor text-whiteColor rounded-lg">Xem</button>
              <button class="flex-1 px-4 py-2 bg-[#eef2f7] text-headingColor rounded-lg">Chỉnh sửa</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const stores = [
      {
        image: 'https://via.placeholder.com/150',
        name: 'ZARA International',
        star: 4.5,
        reviews: 3500,
        email: 'zarafashionworld@dayrep.com',
        description: 'A leading global fashion brand offering trendy apparel and accessories.',
        address: '4604, Philli Lane Kiowa IN 47404',
        phone: '+243 812-801-9335',
        stock: 865,
        sells: 4500
      },
      {
        image: 'https://via.placeholder.com/150',
        name: 'H&M',
        star: 4.2,
        reviews: 2900,
        email: 'hmstore@support.com',
        description: 'Affordable fashion for everyone. From clothing to home goods.',
        address: '1234 Fashion St, New York, NY 10001',
        phone: '+1 212-555-1234',
        stock: 1200,
        sells: 5500
      },
      {
        image: 'https://via.placeholder.com/150',
        name: 'Nike Store',
        star: 4.8,
        reviews: 4700,
        email: 'nikestore@nike.com',
        description: 'The best in sportswear, offering footwear, apparel, and accessories.',
        address: '5678 Sports Blvd, Los Angeles, CA 90001',
        phone: '+1 310-555-5678',
        stock: 1500,
        sells: 8000
      },
      {
        image: 'https://via.placeholder.com/150',
        name: 'Adidas Originals',
        star: 4.6,
        reviews: 4200,
        email: 'adidasstore@adidas.com',
        description: 'Iconic and innovative designs in sportswear, shoes, and accessories.',
        address: '3456 Athlete Rd, Chicago, IL 60601',
        phone: '+1 773-555-3456',
        stock: 900,
        sells: 3800
      },
      {
        image: 'https://via.placeholder.com/150',
        name: 'Uniqlo',
        star: 4.4,
        reviews: 3100,
        email: 'uniqlo@service.com',
        description: 'Simple and stylish clothing for everyday wear, with a focus on comfort.',
        address: '7890 Style Ave, San Francisco, CA 94110',
        phone: '+1 415-555-7890',
        stock: 1100,
        sells: 4700
      }
    ]

    return {
      stores
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

<style></style>
