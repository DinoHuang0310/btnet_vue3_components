<template>
  <div class="text-center">
    <h2 class="text-4xl mb-6">window scroll監聽</h2>
    <h4 class="text-2xl">Your window scroll top: <span class="text-primary">{{ scrollTop }}</span> px</h4>
    <h4 class="text-2xl">scroll over 700px: <span class="text-primary">{{ overY }}</span></h4>
  </div>
</template>

<script setup>
import { watch } from 'vue';
import useWindowScroll from '../../composables/useWindowScroll';

const { scrollTop, overY } = useWindowScroll(700);

watch(overY, (bool) => {
  console.log(bool)
})

</script>