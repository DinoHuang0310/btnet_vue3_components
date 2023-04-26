<template>
  <div class="text-center">
    <h2 class="text-4xl mb-6">螢幕尺寸監聽</h2>
    <h4 class="text-2xl">Your client width: <span class="text-primary">{{ width }}</span> px</h4>
    <h4 class="text-2xl">Your client height: <span class="text-primary">{{ height }}</span> px</h4>
    <h4 class="text-2xl">isMobile: <span class="text-primary">{{ isMobile }}</span></h4>
  </div>
</template>

<script setup>
import { watch } from 'vue';
import useClientSize from '../../composables/useClientSize';

const { width, height, isMobile } = useClientSize(480);

watch(isMobile, (bool) => {
  console.log(bool)
})

</script>