console.log("Hello");

const menuSub = document.querySelectorAll(".menu-sub");
const menuLinks = document.querySelectorAll(".menu-main__item__link");

// console.log(menuSub);
// console.log(menuLinks);

menuLinks.forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    item.classList.add("active");
    console.log(item);
  });
});

menuLinks.forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    item.classList.remove("active");
    console.log(item);
  });
});

menuSub.forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    const parent = item.closest(".menu-main__item");
    const child = parent.firstElementChild;
    child.classList.add("active");
  });
});

menuSub.forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    const parent = item.closest(".menu-main__item");
    const child = parent.firstElementChild;
    child.classList.remove("active");
  });
});
