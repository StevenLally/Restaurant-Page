import home from './home';
import menu from './menu';
import about from './about';

const contentDiv = document.getElementById('content');

let html = '<div id="header"><h1>The Food Place!</h1></div>';
html += '<nav><ul><li id="home">Home</li><li id="menu">Menu</li><li id="about">About</li></ul></nav>';
html += '<div id="tab-display"></div>';

contentDiv.innerHTML = html;

const displayDiv = document.getElementById('tab-display');
const homeTab = document.getElementById('home');
const menuTab = document.getElementById('menu');
const aboutTab = document.getElementById('about');

homeTab.addEventListener("click", () => displayDiv.innerHTML = home());
menuTab.addEventListener("click", () => displayDiv.innerHTML = menu());
aboutTab.addEventListener("click", () => displayDiv.innerHTML = about());

displayDiv.innerHTML = home();