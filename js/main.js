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
const subContent = document.querySelector(".sub-content");

subContent.addEventListener('click', (e) => {
  if (e.target.nodeName.toLowerCase() == 'img') {
    const start = bg.style.backgroundImage.lastIndexOf('img')
    const end = bg.style.backgroundImage.indexOf('jpg') + 3
    const oldOne = bg.style.backgroundImage.slice(start, end) || 'bg.jpg'
    bg.style.backgroundImage = `url(${e.target.src})`;
    e.target.src = oldOne.indexOf('imgs') === -1 ? `imgs/${oldOne}` : oldOne
  }
})

// reveal loader
const loader = document.querySelector(".loader");
window.onload = function () {
  loader.style.opacity = 0;
  loader.style.display = "none";
  loader.style.visibility = "hidden";
};
