<template>
  <div>
    <h2 class="text-4xl text-center mb-6">輪播</h2>
    <div class="text-base text-center">
      依賴套件: <a href="https://swiperjs.com/swiper-api#parameters" target="blank" class="text-primary">swiper.js</a>
    </div>

    <!-- 預設模式 -->
    <h3 class="text-2xl ml-4 my-4">預設模式</h3>
    <BtSlider :sliderData="defauleData" />
    
    <br>
    <br>

    <!-- 自訂義插槽、自訂義輪壩設定、自訂義資料 -->
    <h3 class="text-2xl ml-4 my-4">自訂模式</h3>
    <BtSlider
      :sliderData="customData"
      :params="options"
      :showNavigation="true"
      :showPagination="true"
    >
      <template v-slot:listItem="{ item }">
        <div class="p-6 bg-red-100">
          <h3 class="text-lg">{{ item.name }}</h3>
          <p class="text-sm mb-4 text-red-400">{{ item._id }}</p>
          <p class="line-clamp-2">{{ item.about }}</p>
        </div>
      </template>
    </BtSlider>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '../../services/api';

import BtSlider from '../BtSlider.vue';

// 預設資料格式
const defauleData = ref([
  {
    "title": "新北市推動重汙鍋爐退場 不再展延生煤許可 盼終結空汙夢魘",
    "url": "https://pse.is/lr32p",
    "image": "https://doqvf81n9htmm.cloudfront.net/data/crop_article/106596/92.jpg_1140x855.jpg"
  },
  {
    "title": "桃園市虎頭山創新園區 專攻智慧製造等領域",
    "url": "https://pse.is/x66kk",
    "image": "https://doqvf81n9htmm.cloudfront.net/data/crop_article/106598/96.jpg_1140x855.jpg"
  },
  {
    "title": "神奈川靠「市民力」 登日本最強永續城市",
    "url": "https://pse.is/wfn9c",
    "image": "https://doqvf81n9htmm.cloudfront.net/data/crop_article/106849/102.jpg_1140x855.jpg"
  },
  {
    "title": "若每天睡到自然醒、看電視發呆，那幹嘛退休？學會5件事，玩出全新第二人生",
    "url": "https://pse.is/wbt82",
    "image": "https://doqvf81n9htmm.cloudfront.net/data/crop_article/101072/2020.04.24-3.jpg_1140x855.jpg"
  },
  {
    "title": "今天開始，經營你的退休生活！獨立到老、不依賴子女，50歲後一定要做的8件事",
    "url": "https://pse.is/wfekd",
    "image": "https://doqvf81n9htmm.cloudfront.net/data/crop_article/100056/060401.jpg_1140x855.jpg"
  },
  {
    "title": "她看似幸福無缺，怎麼還會這麼焦慮？擁有幸福快樂人生，從改變4個日常開始",
    "url": "https://pse.is/w7tu9",
    "image": "https://doqvf81n9htmm.cloudfront.net/data/crop_article/104159/shutterstock_498664765.jpg_1140x855.jpg"
  },
  {
    "title": "退休金700萬就夠用！江育誠：我用「0056＋勞保老年年金」，打造每月5萬生活費",
    "url": "https://pse.is/vhqvg",
    "image": "https://doqvf81n9htmm.cloudfront.net/data/crop_article/102087/Untitled.jpg_1140x855.jpg"
  }
]);

// 自定義資料, 傳入自定義資料必須用自訂義插槽
const customData = ref([
  {
    "_id": "64473cfa0a33b2c8dd4c4d45",
    "name": "Noble Blair",
    "about": "Mollit non Lorem velit Lorem aliquip eiusmod consectetur occaecat. Ut consectetur esse amet laboris occaecat ullamco velit voluptate officia mollit culpa. Ipsum deserunt elit pariatur velit eiusmod ex Lorem. Proident laborum sint ad velit excepteur officia amet et.\r\n"
  },
  {
    "_id": "64473cfad512beb85d12c526",
    "name": "White Levine",
    "about": "Ea irure officia sint cillum non quis amet consectetur culpa irure culpa mollit magna esse. Sunt est amet amet occaecat adipisicing aliquip eiusmod id consectetur esse enim elit. Fugiat occaecat laborum eiusmod ut. Consequat do reprehenderit cillum labore deserunt ad labore. Deserunt velit proident exercitation occaecat culpa.\r\n"
  },
  {
    "_id": "64473cfa4bf10ac6579ed535",
    "name": "Yesenia Fields",
    "about": "Magna dolor eiusmod mollit irure incididunt et. Voluptate velit proident fugiat proident laborum veniam. Commodo dolor nostrud amet dolore sunt. Dolor eu eu veniam labore deserunt eiusmod. Nostrud esse laboris ea qui elit est non.\r\n"
  },
  {
    "_id": "64473cfa9cf212ad83c5d29a",
    "name": "Waters Cameron",
    "about": "Commodo aute quis sunt minim commodo. Irure magna adipisicing magna anim. Do pariatur dolor cupidatat proident nulla elit. Voluptate laboris nostrud veniam cupidatat pariatur laboris aliquip pariatur exercitation excepteur adipisicing Lorem deserunt id. Minim laborum consectetur dolor magna quis ullamco sit incididunt Lorem. Adipisicing occaecat laboris elit laborum sunt sint sit ex et.\r\n"
  },
  {
    "_id": "64473cfa6b97f5e945d700ef",
    "name": "Pearlie Cotton",
    "about": "Non consectetur nisi proident eiusmod veniam magna enim fugiat do commodo laboris ad id. Magna reprehenderit ut magna aliqua est et nulla. Et amet velit quis Lorem ipsum excepteur qui reprehenderit incididunt reprehenderit qui deserunt. Eiusmod non est sint consectetur excepteur.\r\n"
  },
  {
    "_id": "64473cfad2ff41e9697b055c",
    "name": "Whitfield Bowers",
    "about": "Eiusmod voluptate minim est veniam nisi officia id cillum veniam ipsum incididunt fugiat elit. Aliqua minim deserunt reprehenderit laborum magna Lorem enim excepteur id veniam adipisicing. Lorem proident sint pariatur laboris laborum quis nisi commodo. Culpa irure reprehenderit cupidatat eiusmod officia deserunt consequat laboris in non. Voluptate pariatur nulla labore nulla nostrud est anim quis. Elit esse occaecat elit do labore mollit ullamco id ipsum. Sit ipsum sit incididunt est culpa deserunt.\r\n"
  }
])

// swiper設定
const options = {
  effect: 'fade',
  on: {
    init: (e) => {
      console.log('swiper init')
    },
    slideChange: (e) => {
      console.log(e)
    },
  },
}

// 動態取得資料
// onMounted(() => {
//   api.get('/api/getSlider').then((response) => {
//     defauleData.value = response.data;

//   }).catch((error) => {
//     console.log(error);
//   })
// })

</script>