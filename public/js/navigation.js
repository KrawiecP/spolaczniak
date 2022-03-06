const logo2 = document.querySelector(".logo--2");
const item1 = document.querySelector(".item-1");
const item2 = document.querySelector(".item-2");
const item3 = document.querySelector(".item-3");
const item4 = document.querySelector(".item-4");
const footer = document.querySelector(".footer");
const items = document.querySelectorAll(".navigation__item");
let scrollTimeout;

const descript = document.getElementById("descript");
const news = document.getElementById("news");
const gallery = document.getElementById("gallery");
const offer = document.getElementById("offer");
const info = document.getElementById("info");

const header = document.querySelector(".header");
const navigation = document.querySelector(".navigation");
const navHeight = navigation.getBoundingClientRect().height;
const hamburger = document.querySelector(".hamburger");

logo2.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    item.classList.remove("bold");
  }
  descript.scrollIntoView({ behavior: "smooth" });
});

item1.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    item.classList.remove("bold");
  }
  e.path[1].classList.add("bold");
  news.scrollIntoView({ behavior: "smooth" });
});

item2.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    item.classList.remove("bold");
  }
  e.path[1].classList.add("bold");
  gallery.scrollIntoView({ behavior: "smooth" });
});
item3.addEventListener("click", async (e) => {
  e.preventDefault();
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    item.classList.remove("bold");
  }
  e.path[1].classList.add("bold");
  offer.scrollIntoView({ behavior: "smooth" });
});
item4.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    item.classList.remove("bold");
  }
  e.path[1].classList.add("bold");
  info.scrollIntoView({ behavior: "smooth" });
});
///////////////////////////////////////
// Hamburger button

hamburger.addEventListener("click", () => {
  if (hamburger.classList.contains("hamburger__close")) {
    hamburger.classList.remove("hamburger__close");
    navigation.style.display = "none";
    return;
  }
  if (!hamburger.classList.contains("hamburger__close")) {
    hamburger.classList.add("hamburger__close");
    navigation.style.display = "block";
  }
});

///////////////////////////////////////
// Sticky navigation: Intersection Observer API

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) navigation.classList.add("sticky");
  else {
    navigation.classList.remove("sticky");
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      item.classList.remove("bold");
    }
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

let viewportWidth = window.innerWidth;
if (viewportWidth > 600) {
  headerObserver.observe(header);
}

const removeBold1 = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    item1.classList.remove("bold");
  }
};
const headerObserver1 = new IntersectionObserver(removeBold1, {
  root: null,
  threshold: 0.5,
});

if (viewportWidth > 600) {
  headerObserver1.observe(news);
}

const removeBold2 = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    item2.classList.remove("bold");
  }
};
const headerObserver2 = new IntersectionObserver(removeBold2, {
  root: null,
  threshold: 0.5,
});

if (viewportWidth > 600) {
  headerObserver2.observe(gallery);
}

const removeBold3 = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    item3.classList.remove("bold");
  }
};
const headerObserver3 = new IntersectionObserver(removeBold3, {
  root: null,
  threshold: 0.5,
});

if (viewportWidth > 600) {
  headerObserver3.observe(offer);
}

const removeBold4 = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    item4.classList.remove("bold");
  }
};
const headerObserver4 = new IntersectionObserver(removeBold4, {
  root: null,
  threshold: 0.5,
});

if (viewportWidth > 600) {
  headerObserver4.observe(info);
}
