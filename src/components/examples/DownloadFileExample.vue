<template>
  <div>
    <h2 class="text-4xl text-center mb-6">檔案下載</h2>
    <div class="text-center">
      <button class="bg-gray-300 px-4 py-3" @click="handleDownload">Download Icon</button>
    </div>
  </div>
</template>

<script setup>
import useDownloadFile from '../../composables/useDownloadFile';

const fileUrl = new URL('/public/favicon.ico', import.meta.url).href;

const handleDownload = async () => {
  await useDownloadFile(fileUrl, 'download-icon.ico');
  console.log('download OK!');
}
</script>