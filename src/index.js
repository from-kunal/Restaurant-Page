import "./styles.css";
import restaurantLogo from "./assets/restaurant-logo.jpeg";
import { loadHomepage } from "./homepage.js";
import { loadMenupage } from "./menupage.js";
import { loadAboutpage } from "./aboutpage.js";

const restaurantLogoImage = document.createElement("img");
restaurantLogoImage.id = "restaurant-logo-image";
restaurantLogoImage.src = restaurantLogo;
const restarurantLogoDiv = document.querySelector(".restaurant-logo-div");
restarurantLogoDiv.appendChild(restaurantLogoImage);

// highlight currently selected nav button
const navButtons = document.querySelectorAll("nav button");

const setActiveButton = (activeButton) => {
  // remove class active from all nav buttons
  navButtons.forEach((currButton) => {
    currButton.classList.remove("active");
  });

  // at last add class active on curr selected nav buttons
  activeButton.classList.add("active");
};

loadHomepage();
setActiveButton(document.querySelector("#home-button"));

document.querySelector("#home-button").addEventListener("click", (event) => {
  const content = document.querySelector("#content");
  content.textContent = "";
  content.classList.remove("menu-page");
  loadHomepage();
  setActiveButton(event.currentTarget);
});

document.querySelector("#menu-button").addEventListener("click", (event) => {
  const content = document.querySelector("#content");
  content.textContent = "";
  loadMenupage();
  setActiveButton(event.currentTarget);
});

document.querySelector("#about-button").addEventListener("click", (event) => {
  const content = document.querySelector("#content");
  content.textContent = "";
  loadAboutpage();
  setActiveButton(event.currentTarget);
});
