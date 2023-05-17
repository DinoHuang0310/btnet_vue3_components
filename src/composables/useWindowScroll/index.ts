import { ref, computed } from 'vue';

const scrollTop = ref<number>(0);

const update = function(): void {
  const y = window.pageYOffset || document.documentElement.scrollTop;

  scrollTop.value = y;
}
window.addEventListener('scroll', update);
update();

export default (breakPoint: number = 0) => {

  const overY = computed<boolean>(() => scrollTop.value > breakPoint);

  return {
    scrollTop,
    overY,
  }
}