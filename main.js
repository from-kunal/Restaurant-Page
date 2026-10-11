/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/restaurant-logo.jpeg"
/*!*****************************************!*\
  !*** ./src/assets/restaurant-logo.jpeg ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6277bda36142f1fc2d5f.jpeg";

/***/ },

/***/ "./src/assets/restaurant.jpeg"
/*!************************************!*\
  !*** ./src/assets/restaurant.jpeg ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c2816bfe4029b2164e5f.jpeg";

/***/ },

/***/ "./src/aboutpage.js"
/*!**************************!*\
  !*** ./src/aboutpage.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAboutpage: () => (/* binding */ loadAboutpage)\n/* harmony export */ });\n\n\nconst loadAboutpage = () => {\n  const content = document.querySelector(\"#content\");\n\n  const contactForm = document.createElement(\"form\");\n\n  const nameLabel = document.createElement(\"label\");\n  nameLabel.setAttribute(\"for\", \"usr-name\");\n  nameLabel.textContent = \"Name:*\";\n  const nameInput = document.createElement(\"input\");\n  nameInput.setAttribute(\"type\", \"text\");\n  nameInput.setAttribute(\"name\", \"usr-name\");\n  nameInput.setAttribute(\"id\", \"usr-name\");\n  nameInput.required = true;\n  contactForm.appendChild(nameLabel);\n  contactForm.appendChild(nameInput);\n\n  const emailLabel = document.createElement(\"label\");\n  emailLabel.setAttribute(\"for\", \"usr-email\");\n  emailLabel.textContent = \"Email:*\";\n  const emailInput = document.createElement(\"input\");\n  emailInput.setAttribute(\"type\", \"email\");\n  emailInput.setAttribute(\"name\", \"usr-email\");\n  emailInput.setAttribute(\"id\", \"usr-email\");\n  emailInput.required = true;\n  contactForm.appendChild(emailLabel);\n  contactForm.appendChild(emailInput);\n\n  const commentLabel = document.createElement(\"label\");\n  commentLabel.setAttribute(\"for\", \"usr-comment\");\n  commentLabel.textContent = \"Comment:\";\n  const commentInput = document.createElement(\"textarea\");\n  commentInput.setAttribute(\"rows\", \"5\");\n  commentInput.setAttribute(\"name\", \"usr-comment\");\n  commentInput.setAttribute(\"id\", \"usr-comment\");\n  contactForm.appendChild(commentLabel);\n  contactForm.appendChild(commentInput);\n\n  const submitBtn = document.createElement(\"button\");\n  submitBtn.textContent = \"Submit\";\n  contactForm.appendChild(submitBtn);\n\n  content.appendChild(contactForm);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWJvdXRwYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBeUI7O0FBRWxCO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0cGFnZS5qcz8wMzM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vYWJvdXRwYWdlLmNzc1wiO1xuXG5leHBvcnQgY29uc3QgbG9hZEFib3V0cGFnZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBjb25zdCBjb250YWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInVzci1uYW1lXCIpO1xuICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIk5hbWU6KlwiO1xuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ1c3ItbmFtZVwiKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidXNyLW5hbWVcIik7XG4gIG5hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG4gIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgY29uc3QgZW1haWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZW1haWxMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ1c3ItZW1haWxcIik7XG4gIGVtYWlsTGFiZWwudGV4dENvbnRlbnQgPSBcIkVtYWlsOipcIjtcbiAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZW1haWxcIik7XG4gIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInVzci1lbWFpbFwiKTtcbiAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInVzci1lbWFpbFwiKTtcbiAgZW1haWxJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xuICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChlbWFpbElucHV0KTtcblxuICBjb25zdCBjb21tZW50TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbW1lbnRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ1c3ItY29tbWVudFwiKTtcbiAgY29tbWVudExhYmVsLnRleHRDb250ZW50ID0gXCJDb21tZW50OlwiO1xuICBjb25zdCBjb21tZW50SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGNvbW1lbnRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIFwiNVwiKTtcbiAgY29tbWVudElucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ1c3ItY29tbWVudFwiKTtcbiAgY29tbWVudElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidXNyLWNvbW1lbnRcIik7XG4gIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGNvbW1lbnRMYWJlbCk7XG4gIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGNvbW1lbnRJbnB1dCk7XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RGb3JtKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/aboutpage.js\n\n}");

/***/ },

/***/ "./src/homepage.js"
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHomepage: () => (/* binding */ loadHomepage)\n/* harmony export */ });\n/* harmony import */ var _assets_restaurant_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/restaurant.jpeg */ \"./src/assets/restaurant.jpeg\");\n\n\n\nconst loadHomepage = () => {\n  const content = document.getElementById(\"content\");\n\n  const info = document.createElement(\"div\");\n  info.classList.add(\"restaurant-info\");\n\n  const headline = document.createElement(\"div\");\n  headline.id = \"headline\";\n  const headingText = document.createElement(\"h1\");\n  headingText.textContent = \"Dahitan Ghar\";\n  headline.appendChild(headingText);\n\n  const brief = document.createElement(\"div\");\n  brief.id = \"brief\";\n  brief.style.whiteSpace = \"pre-line\";\n  brief.textContent = \"Authentic Chaudhary Daru🍺\\nJo Khaye bar bar aye\";\n\n  info.append(headline);\n  info.append(brief);\n\n  const picture = document.createElement(\"img\");\n  picture.src = _assets_restaurant_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n  picture.id = \"restaurant-profile\";\n\n  content.appendChild(info);\n  content.appendChild(picture);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZXBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0M7QUFDdkI7O0FBRWpCO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isb0RBQU87QUFDdkI7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVwYWdlLmpzPzk4ZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4vYXNzZXRzL3Jlc3RhdXJhbnQuanBlZ1wiO1xuaW1wb3J0IFwiLi9ob21lcGFnZS5jc3NcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRIb21lcGFnZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5mby5jbGFzc0xpc3QuYWRkKFwicmVzdGF1cmFudC1pbmZvXCIpO1xuXG4gIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGxpbmUuaWQgPSBcImhlYWRsaW5lXCI7XG4gIGNvbnN0IGhlYWRpbmdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkaW5nVGV4dC50ZXh0Q29udGVudCA9IFwiRGFoaXRhbiBHaGFyXCI7XG4gIGhlYWRsaW5lLmFwcGVuZENoaWxkKGhlYWRpbmdUZXh0KTtcblxuICBjb25zdCBicmllZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJyaWVmLmlkID0gXCJicmllZlwiO1xuICBicmllZi5zdHlsZS53aGl0ZVNwYWNlID0gXCJwcmUtbGluZVwiO1xuICBicmllZi50ZXh0Q29udGVudCA9IFwiQXV0aGVudGljIENoYXVkaGFyeSBEYXJ18J+NulxcbkpvIEtoYXllIGJhciBiYXIgYXllXCI7XG5cbiAgaW5mby5hcHBlbmQoaGVhZGxpbmUpO1xuICBpbmZvLmFwcGVuZChicmllZik7XG5cbiAgY29uc3QgcGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHBpY3R1cmUuc3JjID0gUHJvZmlsZTtcbiAgcGljdHVyZS5pZCA9IFwicmVzdGF1cmFudC1wcm9maWxlXCI7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChpbmZvKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChwaWN0dXJlKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/homepage.js\n\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_restaurant_logo_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/restaurant-logo.jpeg */ \"./src/assets/restaurant-logo.jpeg\");\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _menupage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menupage.js */ \"./src/menupage.js\");\n/* harmony import */ var _aboutpage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutpage.js */ \"./src/aboutpage.js\");\n\n\n\n\n\n\nconst restaurantLogoImage = document.createElement(\"img\");\nrestaurantLogoImage.id = \"restaurant-logo-image\";\nrestaurantLogoImage.src = _assets_restaurant_logo_jpeg__WEBPACK_IMPORTED_MODULE_0__;\nconst restarurantLogoDiv = document.querySelector(\".restaurant-logo-div\");\nrestarurantLogoDiv.appendChild(restaurantLogoImage);\n\n// highlight currently selected nav button\nconst navButtons = document.querySelectorAll(\"nav button\");\n\nconst setActiveButton = (activeButton) => {\n  // remove class active from all nav buttons\n  navButtons.forEach((currButton) => {\n    currButton.classList.remove(\"active\");\n  });\n\n  // at last add class active on curr selected nav buttons\n  activeButton.classList.add(\"active\");\n};\n\n(0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.loadHomepage)();\nsetActiveButton(document.querySelector(\"#home-button\"));\n\ndocument.querySelector(\"#home-button\").addEventListener(\"click\", (event) => {\n  const content = document.querySelector(\"#content\");\n  content.textContent = \"\";\n  content.classList.remove(\"menu-page\");\n  (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.loadHomepage)();\n  setActiveButton(event.currentTarget);\n});\n\ndocument.querySelector(\"#menu-button\").addEventListener(\"click\", (event) => {\n  const content = document.querySelector(\"#content\");\n  content.textContent = \"\";\n  (0,_menupage_js__WEBPACK_IMPORTED_MODULE_2__.loadMenupage)();\n  setActiveButton(event.currentTarget);\n});\n\ndocument.querySelector(\"#about-button\").addEventListener(\"click\", (event) => {\n  const content = document.querySelector(\"#content\");\n  content.textContent = \"\";\n  (0,_aboutpage_js__WEBPACK_IMPORTED_MODULE_3__.loadAboutpage)();\n  setActiveButton(event.currentTarget);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBc0I7QUFDcUM7QUFDZDtBQUNBO0FBQ0U7O0FBRS9DO0FBQ0E7QUFDQSwwQkFBMEIseURBQWM7QUFDeEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUEsMERBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMERBQVk7QUFDZDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBRSwwREFBWTtBQUNkO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxFQUFFLDREQUFhO0FBQ2Y7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzPzU1N2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgcmVzdGF1cmFudExvZ28gZnJvbSBcIi4vYXNzZXRzL3Jlc3RhdXJhbnQtbG9nby5qcGVnXCI7XG5pbXBvcnQgeyBsb2FkSG9tZXBhZ2UgfSBmcm9tIFwiLi9ob21lcGFnZS5qc1wiO1xuaW1wb3J0IHsgbG9hZE1lbnVwYWdlIH0gZnJvbSBcIi4vbWVudXBhZ2UuanNcIjtcbmltcG9ydCB7IGxvYWRBYm91dHBhZ2UgfSBmcm9tIFwiLi9hYm91dHBhZ2UuanNcIjtcblxuY29uc3QgcmVzdGF1cmFudExvZ29JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5yZXN0YXVyYW50TG9nb0ltYWdlLmlkID0gXCJyZXN0YXVyYW50LWxvZ28taW1hZ2VcIjtcbnJlc3RhdXJhbnRMb2dvSW1hZ2Uuc3JjID0gcmVzdGF1cmFudExvZ287XG5jb25zdCByZXN0YXJ1cmFudExvZ29EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnQtbG9nby1kaXZcIik7XG5yZXN0YXJ1cmFudExvZ29EaXYuYXBwZW5kQ2hpbGQocmVzdGF1cmFudExvZ29JbWFnZSk7XG5cbi8vIGhpZ2hsaWdodCBjdXJyZW50bHkgc2VsZWN0ZWQgbmF2IGJ1dHRvblxuY29uc3QgbmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJuYXYgYnV0dG9uXCIpO1xuXG5jb25zdCBzZXRBY3RpdmVCdXR0b24gPSAoYWN0aXZlQnV0dG9uKSA9PiB7XG4gIC8vIHJlbW92ZSBjbGFzcyBhY3RpdmUgZnJvbSBhbGwgbmF2IGJ1dHRvbnNcbiAgbmF2QnV0dG9ucy5mb3JFYWNoKChjdXJyQnV0dG9uKSA9PiB7XG4gICAgY3VyckJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KTtcblxuICAvLyBhdCBsYXN0IGFkZCBjbGFzcyBhY3RpdmUgb24gY3VyciBzZWxlY3RlZCBuYXYgYnV0dG9uc1xuICBhY3RpdmVCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn07XG5cbmxvYWRIb21lcGFnZSgpO1xuc2V0QWN0aXZlQnV0dG9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZS1idXR0b25cIikpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWUtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtcGFnZVwiKTtcbiAgbG9hZEhvbWVwYWdlKCk7XG4gIHNldEFjdGl2ZUJ1dHRvbihldmVudC5jdXJyZW50VGFyZ2V0KTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGxvYWRNZW51cGFnZSgpO1xuICBzZXRBY3RpdmVCdXR0b24oZXZlbnQuY3VycmVudFRhcmdldCk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhYm91dC1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgbG9hZEFib3V0cGFnZSgpO1xuICBzZXRBY3RpdmVCdXR0b24oZXZlbnQuY3VycmVudFRhcmdldCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ },

/***/ "./src/menupage.js"
/*!*************************!*\
  !*** ./src/menupage.js ***!
  \*************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenupage: () => (/* binding */ loadMenupage)\n/* harmony export */ });\n\n\nconst loadMenupage = () => {\n  const content = document.querySelector(\"#content\");\n  content.classList.add(\"menu-page\");\n\n  const menuHeading = document.createElement(\"h1\");\n  menuHeading.textContent = \"MENU ITEMS\";\n  menuHeading.classList.add(\"menu-heading\");\n  content.appendChild(menuHeading);\n\n  const menuItemsContainer = document.createElement(\"div\");\n  menuItemsContainer.classList.add(\"menu-items-container\");\n\n  const friedRiceDiv = document.createElement(\"div\");\n  friedRiceDiv.classList.add(\"menu-item\");\n  const friedRiceHeading = document.createElement(\"h1\");\n  friedRiceHeading.textContent = \"Fried Rice\";\n  friedRiceDiv.appendChild(friedRiceHeading);\n  menuItemsContainer.appendChild(friedRiceDiv);\n\n  const garlicBreadDiv = document.createElement(\"div\");\n  garlicBreadDiv.classList.add(\"menu-item\");\n  const garlicBreadHeading = document.createElement(\"h1\");\n  garlicBreadHeading.textContent = \"Garlic Bread\";\n  garlicBreadDiv.appendChild(garlicBreadHeading);\n  menuItemsContainer.appendChild(garlicBreadDiv);\n\n  const pizzaDiv = document.createElement(\"div\");\n  pizzaDiv.classList.add(\"menu-item\");\n  const pizzaHeading = document.createElement(\"h1\");\n  pizzaHeading.textContent = \"Chicken Pizza\";\n  pizzaDiv.appendChild(pizzaHeading);\n  menuItemsContainer.appendChild(pizzaDiv);\n\n  content.appendChild(menuItemsContainer);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudXBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF3Qjs7QUFFakI7QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51cGFnZS5qcz80M2IzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbWVudXBhZ2UuY3NzXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkTWVudXBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1lbnUtcGFnZVwiKTtcblxuICBjb25zdCBtZW51SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgbWVudUhlYWRpbmcudGV4dENvbnRlbnQgPSBcIk1FTlUgSVRFTVNcIjtcbiAgbWVudUhlYWRpbmcuY2xhc3NMaXN0LmFkZChcIm1lbnUtaGVhZGluZ1wiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51SGVhZGluZyk7XG5cbiAgY29uc3QgbWVudUl0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUl0ZW1zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1zLWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBmcmllZFJpY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmcmllZFJpY2VEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcbiAgY29uc3QgZnJpZWRSaWNlSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgZnJpZWRSaWNlSGVhZGluZy50ZXh0Q29udGVudCA9IFwiRnJpZWQgUmljZVwiO1xuICBmcmllZFJpY2VEaXYuYXBwZW5kQ2hpbGQoZnJpZWRSaWNlSGVhZGluZyk7XG4gIG1lbnVJdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChmcmllZFJpY2VEaXYpO1xuXG4gIGNvbnN0IGdhcmxpY0JyZWFkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ2FybGljQnJlYWREaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcbiAgY29uc3QgZ2FybGljQnJlYWRIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBnYXJsaWNCcmVhZEhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkdhcmxpYyBCcmVhZFwiO1xuICBnYXJsaWNCcmVhZERpdi5hcHBlbmRDaGlsZChnYXJsaWNCcmVhZEhlYWRpbmcpO1xuICBtZW51SXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FybGljQnJlYWREaXYpO1xuXG4gIGNvbnN0IHBpenphRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGl6emFEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcbiAgY29uc3QgcGl6emFIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBwaXp6YUhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkNoaWNrZW4gUGl6emFcIjtcbiAgcGl6emFEaXYuYXBwZW5kQ2hpbGQocGl6emFIZWFkaW5nKTtcbiAgbWVudUl0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKHBpenphRGl2KTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtc0NvbnRhaW5lcik7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menupage.js\n\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;