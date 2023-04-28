<template>
  <div>
    <h2 class="text-4xl text-center mb-6">YouTube player</h2>

    <BtYouTubePlayer
      class="w-2/5 mx-auto"
      videoId="61d4q1F_WoM"
      ref="videoRef"
      :playerVars="{ disablekb: 1 }"
      @onReady="showVideoControls = true"
      @onStateChange="stateChange"
    />

    <div v-if="showVideoControls" class="space-x-4 mt-4 text-center">
      <button class="bg-gray-300 px-4 py-3" @click="videoRef.player.playVideo">play</button>
      <button class="bg-gray-300 px-4 py-3" @click="videoRef.player.pauseVideo">pause</button>
      <button class="bg-gray-300 px-4 py-3" @click="videoRef.player.stopVideo">stop</button>
      <button class="bg-gray-300 px-4 py-3" @click="videoRef.player.seekTo(30)">seekTo30sec</button>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import BtYouTubePlayer from '../BtYouTubePlayer/Player.vue';

const videoRef = ref(null);

const showVideoControls = ref(false);

const stateChange = (e) => {
  console.log('stateChange', e)
}

</script>