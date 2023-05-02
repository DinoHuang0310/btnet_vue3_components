import { ref, computed } from 'vue';

const scrollTop = ref(0);

const update = () => {
  const y = window.pageYOffset || document.documentElement.scrollTop;

  scrollTop.value = y;
}
window.addEventListener('scroll', update);
update();

export default (breakPoint = 0) => {

  const overY = computed(() => scrollTop.value > breakPoint);

  return {
    scrollTop,
    overY,
  }
}