let swiper;
function initSwiper() {
  swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    slidesPerView: "auto",
    spaceBetween: 16,
  });
}

function destroySwiper() {
  swiper.destroy();
  swiper = null;
}

function handleResize() {
  if (window.innerWidth < 768) {
    if (!swiper) {
      initSwiper();
    }
  } else {
    if (swiper) {
      destroySwiper();
    }
  }
}
window.addEventListener("resize", handleResize);
handleResize();

let buttonShow = document.querySelector(".button__more--open");
let buttonHide = document.querySelector(".button__more--close");
let heightList = document.querySelector(".brands-slider__list");

buttonShow.addEventListener("click", function () {
  buttonHide.classList.remove("button__more--hidden");
  buttonShow.classList.add("button__more--hidden");
  heightList.classList.add("brands-slider__list--maxHeight");
});

buttonHide.addEventListener("click", function () {
  buttonHide.classList.add("button__more--hidden");
  buttonShow.classList.remove("button__more--hidden");
  heightList.classList.remove("brands-slider__list--maxHeight");
});
