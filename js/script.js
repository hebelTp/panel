/* curent date */
document.getElementById('today').value = new Date().toISOString().slice(0, 10);
document.getElementById('today2').value = new Date().toISOString().slice(0, 10);

/* sidebar slide */
const hamburger = document.querySelector('.mobile__hamburger');
const sidebar = document.querySelector('.sidebar__mobile-list');
const topbar = document.querySelector('.mobile-bar__list');

hamburger.addEventListener('click', function(e){
  e.preventDefault();
  sidebar.classList.toggle('active');
  topbar.classList.toggle('active');
});