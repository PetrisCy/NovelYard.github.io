'use strict';

let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav-menu');

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    nav.classList.toggle('open')
}
