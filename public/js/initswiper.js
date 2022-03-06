const currentLink = document.querySelector(".current-gallery-link");
const galleryLinks = document.querySelectorAll(".gallery-link");

for (var i = 0, len = galleryLinks.length; i < len; i++) {
  galleryLinks[i].addEventListener("click", function (e) {
    const currentLink = document.querySelector(".current-gallery-link");
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      item.classList.remove("bold");
    }
    item2.classList.add("bold");
    const swiperWrapper = currentLink.parentElement.parentElement;
    const elementNumber = Number(e.target.dataset.link);

    const x = -100 - Math.floor(elementNumber / 3) * 100;
    // console.log("x=" + x);
    swiperWrapper.style.transform = `translate3d(${x}%, 0px, 0px)`;
    e.preventDefault();
    gallery.scrollIntoView({ behavior: "smooth" });
  });
}
