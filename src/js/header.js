const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const position = window.scrollY;

  if (position > 30) {
    header.style.backgroundColor = 'white';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});
