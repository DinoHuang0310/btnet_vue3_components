import { ref, computed } from 'vue';

const width = ref<null | number>(null);
const height = ref<null | number>(null);

const update = function(): void {
  const { clientWidth, clientHeight } = document.documentElement;

  width.value = clientWidth;
  height.value = clientHeight;
}

window.addEventListener('resize', update);
update();

export default (breakPoint: number = 640) => {
  
  const isMobile = computed<boolean>(() => width.value ? width.value < breakPoint : false);

  return {
    width,
    height,
    isMobile,
  }
}