const initInfiniteScroll = () => {
  function infiniteMove() {
    const p = window.location.pathname;
    const winheight = window.innerHeight;
    const winoffset = window.pageYOffset;
    const scrollH = document.body.scrollHeight;
    if ((p.length === 0 || p === "/" || p.match(/^\/?index/)) && (winheight + winoffset) >= scrollH)
      scroll(0,0);
  }
  window.addEventListener('scroll', infiniteMove);
}

export { initInfiniteScroll }
