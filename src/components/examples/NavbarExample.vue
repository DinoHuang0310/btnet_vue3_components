<template>
  <div>
    <h2 class="text-4xl text-center mb-6">Navbar</h2>

    <NavbarInfo />

    <div class="flex justify-center">
      <BtNavbar :navList="navList" :closeByBackdrop="true" :collapse="true">
        <!-- list前插槽 -->
        <template v-slot:before="{ closeNav }">
          <div class="sticky top-0 bg-white z-10 py-2 px-4 text-right border-b lg:hidden">
            <span @click="closeNav"> X </span>
            <div>my header</div>
            <div>my header</div>
            <div>my header</div>
          </div>
        </template>
        
        <!-- list後插槽 -->
        <template v-slot:after>
          <div class="flex items-center space-x-3 py-2 px-4 lg:p-0 lg:ml-2">
            <a class="w-6" href="#facebook" target="blank">
              <img src="https://www.businesstoday.com.tw/bt_topic/2022/election/assets/img/social_btn_fb.png" alt="">
            </a>
            <a class="w-6" href="#line" target="blank">
              <img src="https://www.businesstoday.com.tw/bt_topic/2022/election/assets/img/social_btn_line.png" alt="">
            </a>
          </div>
        </template>
      </BtNavbar>
    </div>
    
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '../../services/api';

import BtNavbar from '../BtNavbar/Nav.vue';
import NavbarInfo from '../info/NavbarInfo.vue';

const navList = ref([
  {
    title: "首頁",
    url: "#app",
    isAnchor: true,
    className: 'home',
  },
  {
    title: "composables",
    navList: [
      {
        title: "螢幕尺寸監聽",
        url: "#client-size",
        isAnchor: true,
      },
      {
        title: "window scroll監聽",
        url: "#window-scroll",
        isAnchor: true,
      },
      {
        title: "scrollTo",
        url: "#scroll-to",
        isAnchor: true,
      },
    ]
  },
  {
    title: "輪播",
    url: "#slider",
    isAnchor: true,
  },
  {
    title: "light box",
    url: "#light-box",
    isAnchor: true,
  },
  {
    title: "歷屆回顧",
    navList: [
      {
        title: '2020',
        url: '#2020'
      },
      {
        title: '2021',
        url: '#2021'
      },
      {
        title: '2022',
        url: '#2022'
      },
    ]
  },
]);

// onMounted(() => {
//   api.get('/api/getNav').then((response) => {
//     navList.value = response.data;

//   }).catch((error) => {
//     console.log(error);
//   })
// })
</script>