const themeSwitcher = document.getElementById("ThemeChanger");
const gridItems = document.querySelectorAll(".GridItem");
const header = document.getElementById("Search");
const buttons = document.querySelectorAll(".Buttons");
const heading2 = document.querySelectorAll("h2");
const heading3 = document.querySelectorAll("h3");
const removeButton = document.querySelectorAll(".RemoveButton");
const themeButton = document.getElementById("ThemeChanger");
const themeIcon = document.getElementById("themeIcon");

themeSwitcher.addEventListener("click", function () {
  document.body.classList.toggle("light-mode-body");
  gridItems.forEach((item) => {
    item.classList.toggle("light-modeb");
  });
  buttons.forEach((item) => {
    item.classList.toggle("light-modeb");
  });
  heading2.forEach((item) => {
    item.classList.toggle("light-h2");
  });
  heading3.forEach((item) => {
    item.classList.toggle("light-h2");
  });
  removeButton.forEach((item) => {
    item.classList.toggle("light-modeb");
  });
  header.classList.toggle("light-modeb");
  themeButton.classList.toggle("light-theme");

  if (themeIcon.src.includes("icon-sun.svg")) {
    themeIcon.src = "Images/icon-moon.svg";
  } else {
    themeIcon.src = "Images/icon-sun.svg";
  }
});
