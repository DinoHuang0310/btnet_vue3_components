<template>
  <header class="sticky flex justify-between items-center w-full top-0 p-4 lg:py-0 bg-white border-b z-50">
    <div>Logo</div>
    <BtNavbar :navList="navList" :closeByBackdrop="true" :collapse="true">
      <template v-slot:before="{ closeNav }">
        <div class="sticky top-0 bg-white z-10 py-2 px-4 text-right border-b lg:hidden">
          <button @click="closeNav"> X </button>
          <div>my header solt</div>
        </div>
      </template>
      
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
  </header>

  <main>
    <Content />
  </main>

  <BtFooter :showFloat="true" />

  <!-- light box container -->
  <ModalsContainer />
</template>

<script setup>
import { ref } from 'vue';
import { ModalsContainer } from 'vue-final-modal';

import BtNavbar from './components/BtNavbar/Nav.vue';
import Content from './components/Content.vue';
import BtFooter from './components/BtFooter.vue';

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
    title: "YouTube player",
    url: "#youtube",
    isAnchor: true,
  },
  {
    title: "demo",
    navList: [
      {
        title: 'child-1',
        url: '#child-1'
      },
      {
        title: 'child-2',
        url: '#child-2',
        navList: [
          {
            title: 'child-2-1',
            url: '#child-2-1',
          },
          {
            title: 'child-2-2',
            url: '#child-2-2',
          }
        ]
      },
      {
        title: 'child-3',
        url: '#child-3'
      },
    ]
  },
]);

</script>