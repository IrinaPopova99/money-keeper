'use strict';

let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName('menu-item'),
    menuItemLi = document.createElement('li'),
    h = document.getElementById('title'),
    adv = document.getElementsByClassName('adv')[0],
    promptId = document.querySelector('#prompt');
   
console.log(menu);
console.log(menuItem);

menu.insertBefore(menuItem[2], menuItem[1]);
menuItemLi.classList.add('menu-item');
menuItemLi.textContent = 'Пятый пункт';
menu.appendChild(menuItemLi);

h.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove();

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

let opinion = prompt("Каково ваше отношение к технике Apple", "");
promptId.textContent = opinion;
