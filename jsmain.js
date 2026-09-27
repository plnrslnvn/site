document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.nes-menu-icon');
  const menuContent = document.querySelector('.nes-menu-content');

  if (!menuIcon || !menuContent) return;

  // Открытие/закрытие по клику на бургер
  menuIcon.addEventListener('click', () => {
    menuContent.classList.toggle('is-open');
  });

  // Закрытие при клике на пункт меню
  menuContent.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuContent.classList.remove('is-open');
    });
  });

  // Закрытие при клике вне меню
  document.addEventListener('click', e => {
    if (!menuIcon.contains(e.target) && !menuContent.contains(e.target)) {
      menuContent.classList.remove('is-open');
    }
  });
});
