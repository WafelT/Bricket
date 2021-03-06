const section = document.querySelectorAll('section');
const burger = document.getElementById('burger');
const sidebar = document.getElementById('sidebar');
const contactBtn = document.getElementById('contactBtn');
const contacts = document.querySelector('.nav__contact--dk');
const body = document.querySelector('body');
const burgerLine = document.querySelector('.burger__line--move');
const logoLine = document.querySelector('.logo-line');
const logoLineMobile = document.querySelector('.logo-line-black');
const navItem = document.querySelectorAll('.nav__item');

contactBtn.addEventListener('click', function () {
    contacts.classList.toggle('none');
});

burger.addEventListener('click', function () {
    sidebar.classList.toggle('none');
    body.classList.toggle('show-sidebar');
});

burger.addEventListener('click', function () {
    burgerLine.classList.toggle('moving-line');
});

document.addEventListener('click', function(event) {
    if(event.target.closest(".nav__contact--dk")) return
    if(event.target.closest("#contactBtn")) return
    contacts.classList.add('none');
});

$(document).ready(function() {
    logoLine.style.width = "76%"
    logoLineMobile.style.width = "76%"
});

$('.nav__item').on('click', function() {
    sidebar.classList.add('none');
    body.classList.remove('show-sidebar');
    burgerLine.classList.remove('moving-line');
});
