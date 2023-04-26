<template>
  <div class="text-center">
    <h2 class="text-4xl mb-6">scroll to</h2>
    <div class="space-y-4">
      <div class="space-x-4">
        <button class="bg-gray-300 px-4 py-3" @click="useScrollTo(1200)">scroll to 1200px</button>
        <button class="bg-gray-300 px-4 py-3" @click="useScrollTo(0)">scroll to top</button>
      </div>
      <div class="space-x-4">
        <button class="bg-gray-300 px-4 py-3" @click="handleScrollTo">scroll to 1000px use callback</button>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import useScrollTo from '../../composables/useScrollTo';

const handleScrollTo = () => {
  useScrollTo(1000, () => {
    console.log('scroll done!')
  });
}

</script>