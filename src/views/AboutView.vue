<script setup>
import { ref } from 'vue'
const aboutInfo = ref(false)

const toggleAboutInfo = () => {
  aboutInfo.value = !aboutInfo.value
}
</script>

<template>
  <main>
    <div class="max-w-1280 px-[96px] pt-14">
      <div class="flex gap-7" data-aos="fade-up">
        <div class="w-[72px] shrink-0">
          <img src="@/assets/images/icon/NTU.svg" class="pic-auto" alt="NTU" />
        </div>
        <div class="grow text-blue-2">
          <div class="flex items-center gap-2">
            <p class="leading-8 font-bold text-[26px] mr-3">
              台大國際英語演講社<br />NTU Toastmasters
            </p>

            <a href="#" class="w-10 shrink-0">
              <img src="@/assets/images/icon/fb.svg" class="pic-auto" alt="fb" />
            </a>
            <a href="#" class="w-10 shrink-0">
              <img src="@/assets/images/icon/ig.svg" class="pic-auto" alt="ig" />
            </a>
          </div>

          <p class="text-[26px] italic font-bold mt-3 mb-2">Officer Team</p>

          <div class="grid grid-cols-5 gap-10 text-[22px] font-semibold">
            <div class="w-full relative">
              <img src="@/assets/images/about/person1.png" class="pic-auto" alt="person1" />
              <div
                class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center text-blue-2 transform duration-300 hover:opacity-0"
              >
                Jousha Lin President
              </div>
            </div>

            <div class="w-full relative">
              <img src="@/assets/images/about/person2.png" class="pic-auto" alt="person" />
              <div
                class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center text-blue-2 transform duration-300 hover:opacity-0"
              >
                Kelly Chen VPE
              </div>
            </div>

            <div class="w-full relative">
              <img src="@/assets/images/about/person3.png" class="pic-auto" alt="person" />
              <div
                class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center text-blue-2 transform duration-300 hover:opacity-0"
              >
                Kelly Chen VPM
              </div>
            </div>

            <div class="w-full relative">
              <img src="@/assets/images/about/person4.png" class="pic-auto" alt="person" />
              <div
                class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center text-blue-2 transform duration-300 hover:opacity-0"
              >
                Patty Yang VPPR
              </div>
            </div>

            <div class="w-full relative">
              <img src="@/assets/images/about/person5.png" class="pic-auto" alt="person" />
              <div
                class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center text-blue-2 transform duration-300 hover:opacity-0"
              >
                Cathy Lin SAA
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex gap-7 mt-12" data-aos="fade-up">
        <div class="w-[72px] shrink-0">
          <img src="@/assets/images/icon/NTUT.svg" class="pic-auto" alt="NTU" />
        </div>
        <div class="grow text-blue-2">
          <div class="flex items-center gap-2">
            <p class="leading-8 font-bold text-[26px] mr-3">
              台科大國際英語演講社<br />NTUST Toastmasters
            </p>

            <a href="#" class="w-10 shrink-0">
              <img src="@/assets/images/icon/fb.svg" class="pic-auto" alt="fb" />
            </a>
            <a href="#" class="w-10 shrink-0">
              <img src="@/assets/images/icon/ig.svg" class="pic-auto" alt="ig" />
            </a>
          </div>

          <p class="text-[26px] italic font-bold mt-3 mb-2">Officer Team</p>

          <div class="grid grid-cols-5 gap-10 text-[22px] font-semibold">
            <div class="w-full relative">
              <img src="@/assets/images/about/person1.png" class="pic-auto" alt="person1" />
              <div
                class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center text-blue-2 transform duration-300 hover:opacity-0"
              >
                Jousha Lin President
              </div>
            </div>

            <div class="w-full relative">
              <img src="@/assets/images/about/person2.png" class="pic-auto" alt="person" />
              <div
                class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center text-blue-2 transform duration-300 hover:opacity-0"
              >
                Kelly Chen VPE
              </div>
            </div>

            <div class="w-full relative">
              <img src="@/assets/images/about/person3.png" class="pic-auto" alt="person" />
              <div
                class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center text-blue-2 transform duration-300 hover:opacity-0"
              >
                Kelly Chen VPM
              </div>
            </div>

            <div class="w-full relative">
              <img src="@/assets/images/about/person4.png" class="pic-auto" alt="person" />
              <div
                class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center text-blue-2 transform duration-300 hover:opacity-0"
              >
                Patty Yang VPPR
              </div>
            </div>

            <div class="w-full relative">
              <img src="@/assets/images/about/person5.png" class="pic-auto" alt="person" />
              <div
                class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center text-blue-2 transform duration-300 hover:opacity-0"
              >
                Cathy Lin SAA
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- * 隱藏的內容 -->
      <Transition name="fade">
        <div class="" v-show="aboutInfo">
          <div class="flex gap-7 mt-12">
            <div class="w-[72px] shrink-0">
              <img src="@/assets/images/icon/NTU.svg" class="pic-auto" alt="NTU" />
            </div>
            <div class="grow text-blue-2">
              <div class="flex items-center gap-2">
                <p class="leading-8 font-bold text-[26px] mr-3">
                  台大國際英語演講社<br />NTU Toastmasters
                </p>

                <a href="#" class="w-10 shrink-0">
                  <img src="@/assets/images/icon/fb.svg" class="pic-auto" alt="fb" />
                </a>
                <a href="#" class="w-10 shrink-0">
                  <img src="@/assets/images/icon/ig.svg" class="pic-auto" alt="ig" />
                </a>
              </div>

              <p class="text-[26px] italic font-bold mt-3 mb-2">Officer Team</p>

              <div class="grid grid-cols-5 gap-10 text-[22px] font-semibold">
                <div class="w-full relative">
                  <img src="@/assets/images/about/person1.png" class="pic-auto" alt="person1" />
                  <div
                    class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center text-blue-2 transform duration-300 hover:opacity-0"
                  >
                    Jousha Lin President
                  </div>
                </div>

                <div class="w-full relative">
                  <img src="@/assets/images/about/person2.png" class="pic-auto" alt="person" />
                  <div
                    class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center text-blue-2 transform duration-300 hover:opacity-0"
                  >
                    Kelly Chen VPE
                  </div>
                </div>

                <div class="w-full relative">
                  <img src="@/assets/images/about/person3.png" class="pic-auto" alt="person" />
                  <div
                    class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center text-blue-2 transform duration-300 hover:opacity-0"
                  >
                    Kelly Chen VPM
                  </div>
                </div>

                <div class="w-full relative">
                  <img src="@/assets/images/about/person4.png" class="pic-auto" alt="person" />
                  <div
                    class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center text-blue-2 transform duration-300 hover:opacity-0"
                  >
                    Patty Yang VPPR
                  </div>
                </div>

                <div class="w-full relative">
                  <img src="@/assets/images/about/person5.png" class="pic-auto" alt="person" />
                  <div
                    class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center text-blue-2 transform duration-300 hover:opacity-0"
                  >
                    Cathy Lin SAA
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex gap-7 mt-12">
            <div class="w-[72px] shrink-0">
              <img src="@/assets/images/icon/NTUT.svg" class="pic-auto" alt="NTU" />
            </div>
            <div class="grow text-blue-2">
              <div class="flex items-center gap-2">
                <p class="leading-8 font-bold text-[26px] mr-3">
                  台科大國際英語演講社<br />NTUST Toastmasters
                </p>

                <a href="#" class="w-10 shrink-0">
                  <img src="@/assets/images/icon/fb.svg" class="pic-auto" alt="fb" />
                </a>
                <a href="#" class="w-10 shrink-0">
                  <img src="@/assets/images/icon/ig.svg" class="pic-auto" alt="ig" />
                </a>
              </div>

              <p class="text-[26px] italic font-bold mt-3 mb-2">Officer Team</p>

              <div class="grid grid-cols-5 gap-10 text-[22px] font-semibold">
                <div class="w-full relative">
                  <img src="@/assets/images/about/person1.png" class="pic-auto" alt="person1" />
                  <div
                    class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center text-blue-2 transform duration-300 hover:opacity-0"
                  >
                    Jousha Lin President
                  </div>
                </div>

                <div class="w-full relative">
                  <img src="@/assets/images/about/person2.png" class="pic-auto" alt="person" />
                  <div
                    class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center text-blue-2 transform duration-300 hover:opacity-0"
                  >
                    Kelly Chen VPE
                  </div>
                </div>

                <div class="w-full relative">
                  <img src="@/assets/images/about/person3.png" class="pic-auto" alt="person" />
                  <div
                    class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center text-blue-2 transform duration-300 hover:opacity-0"
                  >
                    Kelly Chen VPM
                  </div>
                </div>

                <div class="w-full relative">
                  <img src="@/assets/images/about/person4.png" class="pic-auto" alt="person" />
                  <div
                    class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center text-blue-2 transform duration-300 hover:opacity-0"
                  >
                    Patty Yang VPPR
                  </div>
                </div>

                <div class="w-full relative">
                  <img src="@/assets/images/about/person5.png" class="pic-auto" alt="person" />
                  <div
                    class="absolute inset-0 px-2 bg-white bg-opacity-40 flex justify-center items-center text-center text-blue-2 transform duration-300 hover:opacity-0"
                  >
                    Cathy Lin SAA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>

      <!-- * 收合按鈕 -->
      <div
        class="relative cursor-pointer w-[60px] bottom-7 z-10 mx-auto left-[49px] transition-all duration-300"
        :class="{ 'rotate-180': aboutInfo }"
        @click="toggleAboutInfo"
      >
        <img src="@/assets/images/icon/arrow-down-blue.svg" class="pic-auto" alt="logo" />
      </div>

      <!-- * Info -->
      <div class="flex flex-col items-center gap-4 text-blue-2 pb-10 mt-[100px]" data-aos="fade-up">
        <p class="text-[56px] font-bold italic">Get in touch!</p>
        <p class="text-[18px]">
          If you have any question,<br />
          feel free to contact us!
        </p>

        <button class="w-[80px] mt-3">
          <img src="@/assets/images/icon/call.svg" class="pic-auto" alt="logo" />
        </button>
      </div>
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
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  transform: translatey(150px);
  opacity: 0;
}

.opacity-enter-active,
.opacity-leave-active {
  transition: all 0.3s ease-in-out;
}

.opacity-enter-from,
.opacity-leave-to {
  opacity: 0;
}
</style>
