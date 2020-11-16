const initScrollBar = () => {

  function scrollingBar() {
    const sharp = document.querySelector("#sharp");
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
    sharp.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
    sharp.style.color = "white";
    if (window.pageYOffset === 0)
      sharp.style.color = "#fe0000";
  }

  window.addEventListener('scroll', () => {
    scrollingBar();
  });
}

export { initScrollBar }
