// header sticky on clicking
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const icon = document.querySelector("#icon");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});
// open clicking icon
document.querySelector(".icon").onclick = function () {
  nav.classList.toggle("active");
  icon.classList.toggle("active");
};
// close clicking outside
document.onclick = function (e) {
  if (
    e.target.id !== "icon" &&
    e.target.id !== "box" &&
    e.target.id !== "span1" &&
    e.target.id !== "span2" &&
    e.target.id !== "span3"
  ) {
    nav.classList.remove("active");
    icon.classList.remove("active");
  }
};
// switching imgs on clicking
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");
const bg = document.querySelector(".landing");
let i = 0;
let j = 0;
let k = 0;
let l = 0;

img1.onclick = function () {
  img2.src = "./imgs/img6.jpg";
  img3.src = "./imgs/img5.jpg";
  img4.src = "./imgs/img4.jpg";
  i++;
  j = 0;
  k = 0;
  l = 0;
  console.log(i);

  if (i % 2 != 0) {
    img1.src = "./imgs/bg.jpg";
    bg.style.backgroundImage = "url(./imgs/img3.jpg)";
  } else {
    img1.src = "./imgs/img3.jpg";
    bg.style.backgroundImage = "url(./imgs/bg.jpg)";
  }
};

img2.onclick = function () {
  img1.src = "./imgs/img3.jpg";
  img3.src = "./imgs/img5.jpg";
  img4.src = "./imgs/img4.jpg";
  j++;
  i = 0;
  k = 0;
  l = 0;
  console.log(j);

  if (j % 2 != 0) {
    img2.src = "./imgs/bg.jpg";
    bg.style.backgroundImage = "url(./imgs/img6.jpg)";
  } else {
    img2.src = "./imgs/img6.jpg";
    bg.style.backgroundImage = "url(./imgs/bg.jpg)";
  }
};
img3.onclick = function () {
  img1.src = "./imgs/img3.jpg";
  img2.src = "./imgs/img6.jpg";
  img4.src = "./imgs/img4.jpg";

  k++;
  i = 0;
  j = 0;
  l = 0;
  console.log(k);

  if (k % 2 != 0) {
    img3.src = "./imgs/bg.jpg";
    bg.style.backgroundImage = "url(./imgs/img5.jpg)";
  } else {
    img3.src = "./imgs/img5.jpg";
    bg.style.backgroundImage = "url(./imgs/bg.jpg)";
  }
};
img4.onclick = function () {
  img1.src = "./imgs/img3.jpg";
  img2.src = "./imgs/img6.jpg";
  img3.src = "./imgs/img5.jpg";
  l++;
  i = 0;
  j = 0;
  k = 0;

  console.log(l);

  if (l % 2 != 0) {
    img4.src = "./imgs/bg.jpg";
    bg.style.backgroundImage = "url(./imgs/img4.jpg)";
  } else {
    img4.src = "./imgs/img4.jpg";
    bg.style.backgroundImage = "url(./imgs/bg.jpg)";
  }
};

// reveal loader
const loader = document.querySelector(".loader");
window.onload = function () {
  loader.style.opacity = 0;
  loader.style.display = "none";
  loader.style.visibility = "hidden";
};
