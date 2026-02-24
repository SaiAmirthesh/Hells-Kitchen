import './styles.css';
import logo from './assets/logo.jpeg';
import home from './home.js';
import menu from './menu.js';
import about from './about.js';

const element = document.getElementById('logo');
element.src = logo;

const homepg = document.getElementById('home_pg');
const menupg = document.getElementById('menu_pg');
const aboutpg = document.getElementById('about_pg');
const content = document.getElementById('content');

function clear() {
  content.innerHTML = '';
}

content.style.flexDirection = 'row';
content.style.gap = '0rem';
home();

homepg.addEventListener('click', (e) => {
  e.preventDefault();
  content.style.flexDirection = 'row';
  content.style.gap = '0rem';
  clear();
  home();
});

aboutpg.addEventListener('click', (e) => {
  e.preventDefault();
  content.style.flexDirection = 'row';
  content.style.gap = '0rem';
  clear();
  about();
});

menupg.addEventListener('click', (e) => {
  e.preventDefault();
  content.style.flexDirection = 'column';
  content.style.gap = '6rem';
  clear();
  menu();
});

const logopic = document.getElementById('logo');

logopic.addEventListener('click', (e) => {
  e.preventDefault();
  content.style.flexDirection = 'row';
  content.style.gap = '0rem';
  logopic.style.cursor = 'pointer';
  clear();
  about();
});
