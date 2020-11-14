const initInfiniteScroll = () => {
  function infiniteMove() {
    const winheight = window.innerHeight;
    const winoffset = window.pageYOffset;
    const scrollH = document.body.scrollHeight;
    if (winheight + winoffset >= scrollH)
      scroll(0,0);
  }
  window.addEventListener('scroll', infiniteMove);
}

export { initInfiniteScroll }
