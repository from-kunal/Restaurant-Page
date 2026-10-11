import "./menupage.css";

export const loadMenupage = () => {
  const content = document.querySelector("#content");
  content.classList.add("menu-page");

  const menuHeading = document.createElement("h1");
  menuHeading.textContent = "MENU ITEMS";
  menuHeading.classList.add("menu-heading");
  content.appendChild(menuHeading);

  const rant = document.createElement("h1");
  rant.textContent = "I'm not adding images\nIt's boring as hell";
  rant.classList.add("rant");
  rant.style.whiteSpace = "pre-line";
  content.appendChild(rant);

  const menuItemsContainer = document.createElement("div");
  menuItemsContainer.classList.add("menu-items-container");

  const friedRiceDiv = document.createElement("div");
  friedRiceDiv.classList.add("menu-item");
  const friedRiceHeading = document.createElement("h1");
  friedRiceHeading.textContent = "Fried Rice";
  friedRiceDiv.appendChild(friedRiceHeading);
  menuItemsContainer.appendChild(friedRiceDiv);

  const garlicBreadDiv = document.createElement("div");
  garlicBreadDiv.classList.add("menu-item");
  const garlicBreadHeading = document.createElement("h1");
  garlicBreadHeading.textContent = "Garlic Bread";
  garlicBreadDiv.appendChild(garlicBreadHeading);
  menuItemsContainer.appendChild(garlicBreadDiv);

  const pizzaDiv = document.createElement("div");
  pizzaDiv.classList.add("menu-item");
  const pizzaHeading = document.createElement("h1");
  pizzaHeading.textContent = "Chicken Pizza";
  pizzaDiv.appendChild(pizzaHeading);
  menuItemsContainer.appendChild(pizzaDiv);

  content.appendChild(menuItemsContainer);
};
