export default (positionX: number, callBack: Function = () => null) => {
  
  if (typeof positionX !== 'number') return;

  const top = Math.max(positionX, 0);

  const onScroll = function(): void {
    if (window.pageYOffset.toFixed() === top.toFixed()) {
      window.removeEventListener('scroll', onScroll);
      try {
        callBack();
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  window.addEventListener('scroll', onScroll);

  window.scrollTo({
    top,
    behavior: 'smooth'
  });

}