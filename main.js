const d = new Date(); 
let year = d.getFullYear();

document.querySelector('#year').innerHTML = year; 

// Hamburger Menu 
const mainnav = document.querySelector('.navUl')
const hambutton = document.querySelector('#menu')
const hr = document.querySelector('hr')

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show')
  hambutton.classList.toggle('show')
});