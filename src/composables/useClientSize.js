import { ref, computed } from 'vue';

const width = ref(null);
const height = ref(null);

const update = () => {
  const { clientWidth, clientHeight } = document.documentElement;

  width.value = clientWidth;
  height.value = clientHeight;
}

window.addEventListener('resize', update);
update();

export default (breakPoint = 640) => {

  const isMobile = computed(() => width.value < breakPoint);

  return {
    width,
    height,
    isMobile,
  }
}