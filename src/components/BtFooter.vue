<template>
  <footer class="bg-zinc-700 text-center px-4 py-6">
    <div class="space-y-1 text-sm text-white">
      <p>內容監製: 今周刊</p>
      <p>專題製作:｜今周刊 數位內容部</p>
      <p>Copyright © {{ year }} 今周刊.All rights reserved. 版權所有，禁止擅自轉貼節錄</p>
    </div>
    
    <div v-if="showFloatButton" class="fixed right-0 top-1/2 -translate-y-1/2">
      <div class="bg-primary text-white px-2 py-4 cursor-pointer vertical-lr" @click="useScrollTo(0)">返回首頁</div>
    </div>
    
  </footer>
</template>

<script>
import { computed } from 'vue';
import useClientSize from '../composables/useClientSize';
import useWindowScroll from '../composables/useWindowScroll';
import useScrollTo from '../composables/useScrollTo';

export default {
  props: {
    showFloat: {
      type: Boolean,
      default: true
    }
  },

  setup(props) {
    const year = new Date().getFullYear();
    const { height } = useClientSize();
    const { scrollTop } = useWindowScroll();

    const showFloatButton = computed(() => {
      return props.showFloat && scrollTop.value > height.value / 2;
    })
    
    return {
      year,
      showFloatButton,
      useScrollTo,
    }
  }
  
}
</script>
