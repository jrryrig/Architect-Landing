// Hamburger Menu Sidebar Toggle
document.querySelector('.hamburger-menu').addEventListener('click', () => {
  document.querySelector('.container').classList.toggle('change');
});

// Scroll Btn
document.querySelector('.scroll-btn').addEventListener('click', () => {
  document.querySelector('html').style.scrollBehavior = 'smooth';
  setTimeout(() => {
    document.querySelector('html').style.scrollBehavior = 'unset';
  }, 1000);
});
