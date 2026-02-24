import './styles.css';
import logo from './assets/logo.jpeg'
import home from './home.js'
import menu from './menu.js'
import aboutus from './about.js'

const element = document.getElementById('logo');
element.src = logo;
const homepg = document.getElementById('home_pg'); 
const menupg = document.getElementById('menu_pg'); 
const aboutpg = document.getElementById('about_pg'); 
const content = document.getElementById('content');


function clear(){
    content.innerHTML = ``;
}

home();

homepg.addEventListener('click',(e)=>{
    e.preventDefault();
    clear();
    home();
})

aboutpg.addEventListener('click',(e)=>{
    e.preventDefault();
    clear();
    aboutus();
})

menupg.addEventListener('click',(e)=>{
    e.preventDefault();
    clear();
    menu();
})





