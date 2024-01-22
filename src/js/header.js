const header = document.querySelector('header');
const offices = document.querySelector('#offices');
const customers = document.querySelector('#customers');
const workers = document.querySelector('#workers');
const projects = document.querySelector('#projects');

window.addEventListener('scroll', () => {
  const position = window.scrollY;

  if (position > 30) {
    header.style.backgroundColor = 'white';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});
