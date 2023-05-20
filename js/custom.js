// 네비

// 메인 이미지 전환

const slides = document.querySelectorAll("#container img");
const slideCount = slides.length;
let currentSlide = 0;

function showSlide(n) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[n].style.display = "block";
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slideCount;
  showSlide(currentSlide);
}

// 3초마다 슬라이드 전환
setInterval(nextSlide, 3000);

const container = document.querySelector("#container");
const button = document.querySelector("button");

window.addEventListener("scroll", () => {
  const containerBottom = container.getBoundingClientRect().bottom;
  const windowHeight = window.innerHeight;

  if (containerBottom > windowHeight) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

//매거진 버튼
const images = document.querySelectorAll("#magazine .img1 img");
const button1 = document.querySelector("#magazine .btn1");
const button2 = document.querySelector("#magazine .btn2");
let currentImageIndex = 0;

function showImage(n) {
  images[currentImageIndex].style.display = "none";
  currentImageIndex = (n + images.length) % images.length;
  images[currentImageIndex].style.display = "block";
}

function nextImage() {
  showImage(currentImageIndex + 1);
}

button1.addEventListener("click", function () {
  nextImage();
});

button2.addEventListener("click", function () {
  nextImage();
});

setInterval(nextImage, 3000);
