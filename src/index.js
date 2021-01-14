import home from './home';
import menu from './menu';
import about from './about';

const contentDiv = document.getElementById('content');

let html = '<div id="header"><h1>The Food Place!</h1></div>';
html += '<nav><ul><li id="home" class="active">Home</li><li id="menu">Menu</li><li id="about">About</li></ul></nav>';
html += '<div id="tab-display"></div>';

contentDiv.innerHTML = html;

const navElements = document.querySelector("ul").children;

const removeActive = (arr) => {
  arr.forEach((ele) => {
    if (ele.classList.length > 0) {
      ele.classList.remove("active");
    }
  });
}

const displayDiv = document.getElementById('tab-display');
const homeTab = document.getElementById('home');
const menuTab = document.getElementById('menu');
const aboutTab = document.getElementById('about');

homeTab.addEventListener("click", () => {
  removeActive([...navElements]);
  displayDiv.innerHTML = home()
  homeTab.classList.add("active");
});
menuTab.addEventListener("click", () => {
  removeActive([...navElements]);
  displayDiv.innerHTML = menu()
  menuTab.classList.add("active");
});
aboutTab.addEventListener("click", () => {
  removeActive([...navElements]);
  displayDiv.innerHTML = about()
  aboutTab.classList.add("active");
});

displayDiv.innerHTML = home();