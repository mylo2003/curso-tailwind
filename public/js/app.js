const html = document.querySelector('html');
const button = document.getElementById('darkMode');
const button2 = document.getElementById('darkModeMobile');


button.addEventListener('click', () => {
   html.classList.toggle('dark');
});

button2.addEventListener('click', () => {
   html.classList.toggle('dark');
});