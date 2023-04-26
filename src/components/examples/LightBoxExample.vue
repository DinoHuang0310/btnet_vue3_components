<template>
  <div>
    <h2 class="text-4xl text-center mb-6">light box</h2>
    <div class="text-base text-center">
      依賴套件: <a href="https://vue-final-modal.org/get-started/guide/setup" target="blank" class="text-primary">vue-final-modal</a>
    </div>

    <div class="space-x-4 text-center p-4">
      <button class="bg-gray-300 px-4 py-3" @click="showModal = !showModal">showModal</button>
      <button class="bg-gray-300 px-4 py-3" @click="showModal2 = !showModal2">showModal-2</button>
    </div>

    <VueFinalModal
      v-model="showModal"
      class="flex justify-center items-center"
      :content-class="setModalContentClass"
    >
      <h3 class="text-2xl mb-6">Title popup</h3>
      <p class="text-xl">hey test it</p>
      <p class="my-6">當台灣正因為產險業面臨防疫保單的理賠爭議問題，破壞了金融業與客戶之間最重要的「信任」關係之際，安聯集團也上演了一樣的「信任」大戲──同樣面臨重大的商譽傷害問題。因為私募基金經理人的重大弊案，逼得執行長不得不在第一時間站出來呼籲，並且補救與客戶之間的信任。</p>
      <p class="my-6">hey test it</p>
      <p class="my-6">hey test it</p>
      <p class="my-6">hey test it</p>
      <p class="my-6">hey test it</p>
      <p class="my-6">hey test it</p>
      <p class="my-6">hey test it</p>
      <p class="my-6">hey test it</p>
      <p class="my-6">hey test it</p>
      <p class="my-6">hey test it</p>
      <button class="inline-block bg-gray-400 p-4" @click="showModal = !showModal">close</button>
    </VueFinalModal>

    <VueFinalModal
      v-model="showModal2"
      class="flex justify-center items-center"
      :content-class="setModalContentClass"
    >
      hello
    </VueFinalModal>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { VueFinalModal } from 'vue-final-modal';

const showModal = ref(false);
const showModal2 = ref(false);

const setModalContentClass = computed(() => {
  return `flex flex-col max-w-xl max-h-3/4 overflow-auto m-4 p-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg`;
})

</script>