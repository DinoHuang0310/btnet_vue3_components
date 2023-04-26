import { ref, onMounted, onUnmounted } from 'vue';

export default (breakPoint = 640) => {
  const width = ref(null);
  const height = ref(null);
  const isMobile = ref(false);

  const update = () => {
    const { clientWidth, clientHeight } = document.documentElement;

    width.value = clientWidth;
    height.value = clientHeight;
    isMobile.value = clientWidth < breakPoint;
  }

  onMounted(() => {
    window.addEventListener('resize', update);
    update();
  });

  onUnmounted(() => window.removeEventListener('resize', update));

  return {
    width,
    height,
    isMobile,
  }
}