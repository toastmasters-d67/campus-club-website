<script setup>
import { ref } from 'vue'
const clubInfo = ref(false)

const toggleClubInfo = () => {
  clubInfo.value = !clubInfo.value
}
</script>

<template>
  <main>
    <div class="max-w-1280 px-[96px] py-14">
      <div class="grid grid-cols-8 gap-7" data-aos="fade-up">
        <div class="flex gap-5 items-start col-span-5">
          <div class="w-[72px] shrink-0">
            <img src="@/assets/images/icon/NTU.svg" class="pic-auto" alt="NTU" />
          </div>

          <div class="">
            <div class="flex items-center gap-2">
              <p class="text-blue-2 leading-8 font-bold text-[26px] mr-3">
                台大國際英語演講社<br />NTU Toastmasters
              </p>

              <a href="#" class="w-10 shrink-0">
                <img src="@/assets/images/icon/fb.svg" class="pic-auto" alt="fb" />
              </a>
              <a href="#" class="w-10 shrink-0">
                <img src="@/assets/images/icon/ig.svg" class="pic-auto" alt="ig" />
              </a>
            </div>
            <p class="text-blue-1 mt-3 text-[22px] font-light">
              President: Jousha Lin (林大明) <br />
              Time: 7:00pm ~ 10:00pm, Monday <br />
              Address: No.1, Sec. 4, Roosevelt Road, Taipei, 106319 <br />
            </p>
          </div>
        </div>

        <div class="col-span-3 rounded-[20px] overflow-hidden flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.3144473333373!2d121.52249587566914!3d25.023400677823297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9903d21d153%3A0xcdc4a94b802a155f!2zMTAw5Y-w5YyX5biC5Lit5q2j5Y2A576F5pav56aP6Lev5LiJ5q61NOiZnw!5e0!3m2!1szh-TW!2stw!4v1726105311807!5m2!1szh-TW!2stw"
            width="100%"
            height="102%"
            style="border: 0; outline: none; scale: 1.02"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="cus-map"
          ></iframe>
        </div>
      </div>

      <div class="h-[5px] w-[35%] bg-blue-2 my-[40px]" data-aos="fade-up"></div>

      <div class="grid grid-cols-8 gap-7" data-aos="fade-up">
        <div class="flex gap-5 items-start col-span-5">
          <div class="w-[72px] shrink-0">
            <img src="@/assets/images/icon/NTUT.svg" class="pic-auto" alt="NTU" />
          </div>

          <div class="">
            <div class="flex items-center gap-2">
              <p class="text-blue-2 leading-8 font-bold text-[26px] mr-3">
                台科大國際英語演講社<br />NTUST Toastmasters
              </p>

              <a href="#" class="w-10 shrink-0">
                <img src="@/assets/images/icon/fb.svg" class="pic-auto" alt="fb" />
              </a>
              <a href="#" class="w-10 shrink-0">
                <img src="@/assets/images/icon/ig.svg" class="pic-auto" alt="ig" />
              </a>
            </div>
            <p class="text-blue-1 mt-3 text-[22px] font-light">
              President: Evian Chen (陳大明) <br />
              Time: 7:00pm ~ 10:00pm, Monday <br />
              Address: No.1, Sec. 4, Roosevelt Road, Taipei, 106319 <br />
            </p>
          </div>
        </div>

        <div class="col-span-3 rounded-[20px] overflow-hidden flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.3144473333373!2d121.52249587566914!3d25.023400677823297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9903d21d153%3A0xcdc4a94b802a155f!2zMTAw5Y-w5YyX5biC5Lit5q2j5Y2A576F5pav56aP6Lev5LiJ5q61NOiZnw!5e0!3m2!1szh-TW!2stw!4v1726105311807!5m2!1szh-TW!2stw"
            width="100%"
            height="102%"
            style="border: 0; outline: none; scale: 1.02"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="cus-map"
          ></iframe>
        </div>
      </div>

      <div class="h-[5px] w-[35%] bg-blue-2 my-[40px]" data-aos="fade-up"></div>

      <div class="grid grid-cols-8 gap-7" data-aos="fade-up">
        <div class="flex gap-5 items-start col-span-5">
          <div class="w-[72px] shrink-0">
            <img src="@/assets/images/icon/NTUT.svg" class="pic-auto" alt="NTU" />
          </div>

          <div class="">
            <div class="flex items-center gap-2">
              <p class="text-blue-2 leading-8 font-bold text-[26px] mr-3">
                台科大國際英語演講社<br />NTUST Toastmasters
              </p>

              <a href="#" class="w-10 shrink-0">
                <img src="@/assets/images/icon/fb.svg" class="pic-auto" alt="fb" />
              </a>
              <a href="#" class="w-10 shrink-0">
                <img src="@/assets/images/icon/ig.svg" class="pic-auto" alt="ig" />
              </a>
            </div>
            <p class="text-blue-1 mt-3 text-[22px] font-light">
              President: Evian Chen (陳大明) <br />
              Time: 7:00pm ~ 10:00pm, Monday <br />
              Address: No.1, Sec. 4, Roosevelt Road, Taipei, 106319 <br />
            </p>
          </div>
        </div>

        <div class="col-span-3 rounded-[20px] overflow-hidden flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.3144473333373!2d121.52249587566914!3d25.023400677823297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9903d21d153%3A0xcdc4a94b802a155f!2zMTAw5Y-w5YyX5biC5Lit5q2j5Y2A576F5pav56aP6Lev5LiJ5q61NOiZnw!5e0!3m2!1szh-TW!2stw!4v1726105311807!5m2!1szh-TW!2stw"
            width="100%"
            height="102%"
            style="border: 0; outline: none; scale: 1.02"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="cus-map"
          ></iframe>
        </div>
      </div>

      <div class="h-[5px] w-[35%] bg-blue-2 my-[40px]" data-aos="fade-up"></div>

      <!-- * 展開處 -->
      <div class="grid grid-cols-8 gap-7 relative" v-show="!clubInfo" data-aos="fade-up">
        <div class="flex gap-5 items-start col-span-5 opacity-50">
          <div class="w-[72px] shrink-0">
            <img src="@/assets/images/icon/NTUT.svg" class="pic-auto" alt="NTU" />
          </div>

          <div class="">
            <div class="flex items-center gap-2">
              <p class="text-blue-2 leading-8 font-bold text-[26px] mr-3">
                台科大國際英語演講社<br />NTUST Toastmasters
              </p>

              <a href="#" class="w-10 shrink-0">
                <img src="@/assets/images/icon/fb.svg" class="pic-auto" alt="fb" />
              </a>
              <a href="#" class="w-10 shrink-0">
                <img src="@/assets/images/icon/ig.svg" class="pic-auto" alt="ig" />
              </a>
            </div>
            <p class="text-blue-1 mt-3 text-[22px] font-light">
              President: Evian Chen (陳大明) <br />
              Time: 7:00pm ~ 10:00pm, Monday <br />
              Address: No.1, Sec. 4, Roosevelt Road, Taipei, 106319 <br />
            </p>
          </div>
        </div>

        <div
          class="col-span-3 rounded-[20px] overflow-hidden flex items-center justify-center opacity-50"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.3144473333373!2d121.52249587566914!3d25.023400677823297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9903d21d153%3A0xcdc4a94b802a155f!2zMTAw5Y-w5YyX5biC5Lit5q2j5Y2A576F5pav56aP6Lev5LiJ5q61NOiZnw!5e0!3m2!1szh-TW!2stw!4v1726105311807!5m2!1szh-TW!2stw"
            width="100%"
            height="102%"
            style="border: 0; outline: none; scale: 1.02"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="cus-map"
          ></iframe>
        </div>

        <!-- 展開按鈕 -->
        <button
          class="absolute w-[60px] -bottom-4 z-10 left-1/2 -translate-x-1/2"
          @click="toggleClubInfo"
        >
          <img src="@/assets/images/icon/arrow-down-blue.svg" class="pic-auto" alt="logo" />
        </button>
      </div>

      <!-- * 隱藏的內容 -->
      <Transition name="fade">
        <div class="" v-show="clubInfo">
          <div class="grid grid-cols-8 gap-7">
            <div class="flex gap-5 items-start col-span-5">
              <div class="w-[72px] shrink-0">
                <img src="@/assets/images/icon/NTUT.svg" class="pic-auto" alt="NTU" />
              </div>

              <div class="">
                <div class="flex items-center gap-2">
                  <p class="text-blue-2 leading-8 font-bold text-[26px] mr-3">
                    台科大國際英語演講社<br />NTUST Toastmasters
                  </p>

                  <a href="#" class="w-10 shrink-0">
                    <img src="@/assets/images/icon/fb.svg" class="pic-auto" alt="fb" />
                  </a>
                  <a href="#" class="w-10 shrink-0">
                    <img src="@/assets/images/icon/ig.svg" class="pic-auto" alt="ig" />
                  </a>
                </div>
                <p class="text-blue-1 mt-3 text-[22px] font-light">
                  President: Evian Chen (陳大明) <br />
                  Time: 7:00pm ~ 10:00pm, Monday <br />
                  Address: No.1, Sec. 4, Roosevelt Road, Taipei, 106319 <br />
                </p>
              </div>
            </div>

            <div class="col-span-3 rounded-[20px] overflow-hidden flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.3144473333373!2d121.52249587566914!3d25.023400677823297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9903d21d153%3A0xcdc4a94b802a155f!2zMTAw5Y-w5YyX5biC5Lit5q2j5Y2A576F5pav56aP6Lev5LiJ5q61NOiZnw!5e0!3m2!1szh-TW!2stw!4v1726105311807!5m2!1szh-TW!2stw"
                width="100%"
                height="102%"
                style="border: 0; outline: none; scale: 1.02"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="cus-map"
              ></iframe>
            </div>
          </div>

          <div class="h-[5px] w-[35%] bg-blue-2 my-[40px]"></div>

          <div class="grid grid-cols-8 gap-7">
            <div class="flex gap-5 items-start col-span-5">
              <div class="w-[72px] shrink-0">
                <img src="@/assets/images/icon/NTU.svg" class="pic-auto" alt="NTU" />
              </div>

              <div class="">
                <div class="flex items-center gap-2">
                  <p class="text-blue-2 leading-8 font-bold text-[26px] mr-3">
                    台大國際英語演講社<br />NTU Toastmasters
                  </p>

                  <a href="#" class="w-10 shrink-0">
                    <img src="@/assets/images/icon/fb.svg" class="pic-auto" alt="fb" />
                  </a>
                  <a href="#" class="w-10 shrink-0">
                    <img src="@/assets/images/icon/ig.svg" class="pic-auto" alt="ig" />
                  </a>
                </div>
                <p class="text-blue-1 mt-3 text-[22px] font-light">
                  President: Jousha Lin (林大明) <br />
                  Time: 7:00pm ~ 10:00pm, Monday <br />
                  Address: No.1, Sec. 4, Roosevelt Road, Taipei, 106319 <br />
                </p>
              </div>
            </div>

            <div class="col-span-3 rounded-[20px] overflow-hidden flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.3144473333373!2d121.52249587566914!3d25.023400677823297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9903d21d153%3A0xcdc4a94b802a155f!2zMTAw5Y-w5YyX5biC5Lit5q2j5Y2A576F5pav56aP6Lev5LiJ5q61NOiZnw!5e0!3m2!1szh-TW!2stw!4v1726105311807!5m2!1szh-TW!2stw"
                width="100%"
                height="102%"
                style="border: 0; outline: none; scale: 1.02"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="cus-map"
              ></iframe>
            </div>
          </div>

          <div class="h-[5px] w-[35%] bg-blue-2 my-[40px]"></div>

          <div class="grid grid-cols-8 gap-7">
            <div class="flex gap-5 items-start col-span-5">
              <div class="w-[72px] shrink-0">
                <img src="@/assets/images/icon/NTUT.svg" class="pic-auto" alt="NTU" />
              </div>

              <div class="">
                <div class="flex items-center gap-2">
                  <p class="text-blue-2 leading-8 font-bold text-[26px] mr-3">
                    台科大國際英語演講社<br />NTUST Toastmasters
                  </p>

                  <a href="#" class="w-10 shrink-0">
                    <img src="@/assets/images/icon/fb.svg" class="pic-auto" alt="fb" />
                  </a>
                  <a href="#" class="w-10 shrink-0">
                    <img src="@/assets/images/icon/ig.svg" class="pic-auto" alt="ig" />
                  </a>
                </div>
                <p class="text-blue-1 mt-3 text-[22px] font-light">
                  President: Evian Chen (陳大明) <br />
                  Time: 7:00pm ~ 10:00pm, Monday <br />
                  Address: No.1, Sec. 4, Roosevelt Road, Taipei, 106319 <br />
                </p>
              </div>
            </div>

            <div class="col-span-3 rounded-[20px] overflow-hidden flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.3144473333373!2d121.52249587566914!3d25.023400677823297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9903d21d153%3A0xcdc4a94b802a155f!2zMTAw5Y-w5YyX5biC5Lit5q2j5Y2A576F5pav56aP6Lev5LiJ5q61NOiZnw!5e0!3m2!1szh-TW!2stw!4v1726105311807!5m2!1szh-TW!2stw"
                width="100%"
                height="102%"
                style="border: 0; outline: none; scale: 1.02"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="cus-map"
              ></iframe>
            </div>
          </div>

          <div class="h-[5px] w-[35%] bg-blue-2 my-[40px]"></div>

          <div class="grid grid-cols-8 gap-7">
            <div class="flex gap-5 items-start col-span-5">
              <div class="w-[72px] shrink-0">
                <img src="@/assets/images/icon/NTUT.svg" class="pic-auto" alt="NTU" />
              </div>

              <div class="">
                <div class="flex items-center gap-2">
                  <p class="text-blue-2 leading-8 font-bold text-[26px] mr-3">
                    台科大國際英語演講社<br />NTUST Toastmasters
                  </p>

                  <a href="#" class="w-10 shrink-0">
                    <img src="@/assets/images/icon/fb.svg" class="pic-auto" alt="fb" />
                  </a>
                  <a href="#" class="w-10 shrink-0">
                    <img src="@/assets/images/icon/ig.svg" class="pic-auto" alt="ig" />
                  </a>
                </div>
                <p class="text-blue-1 mt-3 text-[22px] font-light">
                  President: Evian Chen (陳大明) <br />
                  Time: 7:00pm ~ 10:00pm, Monday <br />
                  Address: No.1, Sec. 4, Roosevelt Road, Taipei, 106319 <br />
                </p>
              </div>
            </div>

            <div class="col-span-3 rounded-[20px] overflow-hidden flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.3144473333373!2d121.52249587566914!3d25.023400677823297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9903d21d153%3A0xcdc4a94b802a155f!2zMTAw5Y-w5YyX5biC5Lit5q2j5Y2A576F5pav56aP6Lev5LiJ5q61NOiZnw!5e0!3m2!1szh-TW!2stw!4v1726105311807!5m2!1szh-TW!2stw"
                width="100%"
                height="102%"
                style="border: 0; outline: none; scale: 1.02"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="cus-map"
              ></iframe>
            </div>
          </div>

          <!-- 展開按鈕 -->
          <div
            class="w-[60px] cursor-pointer -bottom-4 z-10 mx-auto rotate-180 mt-7"
            @click="toggleClubInfo"
          >
            <img src="@/assets/images/icon/arrow-down-blue.svg" class="pic-auto" alt="logo" />
          </div>
        </div>
      </Transition>
    </div>
    <div class="text-white bg-blue-2 text-[20px] font-light p-4 mb-7">
      <div class="max-w-1280 px-[96px] flex justify-between">
        <p>Where leaders are made</p>
        <p>campus-based Toastmasters</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
div .cus-map:focus-visible {
  outline: transparent !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  transform: translatey(100px);
  height: 0;
  opacity: 0;
}
</style>
