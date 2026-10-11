import Profile from "./assets/restaurant.jpeg";
import "./homepage.css";

export const loadHomepage = () => {
  const content = document.getElementById("content");

  const info = document.createElement("div");
  info.classList.add("restaurant-info");

  const headline = document.createElement("div");
  headline.id = "headline";
  const headingText = document.createElement("h1");
  headingText.textContent = "Dahitan Ghar";
  headline.appendChild(headingText);

  const brief = document.createElement("div");
  brief.id = "brief";
  brief.style.whiteSpace = "pre-line";
  brief.textContent = "Authentic Chaudhary Daru🍺\nJo Khaye bar bar aye";

  info.append(headline);
  info.append(brief);

  const picture = document.createElement("img");
  picture.src = Profile;
  picture.id = "restaurant-profile";

  content.appendChild(info);
  content.appendChild(picture);
};
