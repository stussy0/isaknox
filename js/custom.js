//=========== 네비 ===========
document.addEventListener("DOMContentLoaded", function () {
  var menuTrigger = document.querySelector(".menu-trigger");
  var menuDropdown = document.querySelector(".menu-dropdown");

  // .menu-trigger에 마우스가 올라갔을 때
  menuTrigger.addEventListener("mouseenter", function () {
    menuDropdown.classList.add("active");
  });

  // document에 마우스 이벤트를 추가하여 .menu-dropdown 영역을 벗어났을 때
  document.addEventListener("mousemove", function (event) {
    var isInsideTrigger = menuTrigger.contains(event.target);
    var isInsideDropdown = menuDropdown.contains(event.target);

    if (!isInsideTrigger && !isInsideDropdown) {
      menuDropdown.classList.remove("active");
    }
  });
});

// =========== 메인 이미지 전환 ===========
const slides = document.querySelectorAll(".main-img > div");
const slideCount = slides.length;
let currentSlide = 0;

function showSlide(n) {
  slides.forEach((slide, index) => {
    if (index === n) {
      slide.style.display = "block";
      slide.querySelector(".slide-text").style.display = "block";
    } else {
      slide.style.display = "none";
      slide.querySelector(".slide-text").style.display = "none";
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slideCount;
  showSlide(currentSlide);
}

// 초기 슬라이드 표시
showSlide(currentSlide);

// 3초마다 슬라이드 전환
setInterval(nextSlide, 3000);

//=========== 메인이미지 스크롤 버튼===========
const mainSection = document.querySelector(".main");
const button = document.querySelector(".main-btn");

function handleScroll() {
  const { bottom } = mainSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (bottom > windowHeight) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

window.addEventListener("scroll", handleScroll);

window.addEventListener("scroll", handleScroll);

//=========== 매거진 버튼 ===========
const items = document.querySelectorAll(".magazine-item");
const textItems = document.querySelectorAll(".magazine-text");
const button1 = document.querySelector(".magazine .magazine-bt1");
const button2 = document.querySelector(".magazine .magazine-bt2");
let currentIndex = 0;

function showItem(index) {
  items.forEach((item, i) => {
    if (i === index) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  textItems.forEach((textItem, i) => {
    if (i === index) {
      textItem.style.display = "block";
    } else {
      textItem.style.display = "none";
    }
  });

  currentIndex = index;
}

function nextItem() {
  const nextIndex = (currentIndex + 1) % items.length;
  showItem(nextIndex);
}

button1.addEventListener("click", function () {
  nextItem();
});

button2.addEventListener("click", function () {
  nextItem();
});

setInterval(nextItem, 3000);

// 첫 번째 아이템 표시
showItem(currentIndex);
