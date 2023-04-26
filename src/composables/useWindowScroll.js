import { ref, onMounted, onUnmounted } from 'vue';

export default (breakPoint = 0) => {
  const scrollTop = ref(0);
  const overY = ref(false);

  const update = () => {
    const y = window.pageYOffset || document.documentElement.scrollTop;
    overY.value = y > breakPoint;
    scrollTop.value = y;
  }

  onMounted(() => {
    window.addEventListener('scroll', update);
    update();
  });

  onUnmounted(() => window.removeEventListener('scroll', update));

  return {
    scrollTop,
    overY,
  }
}