const navItems = document.querySelectorAll('.nav-item');
const animation = document.querySelector('.animation');

navItems.forEach((item, index) => {
  item.addEventListener('mouseover', () => {
    const width = item.offsetWidth;
    const left = item.offsetLeft;

    animation.style.width = `${width}px`;
    animation.style.left = `${left}px`;
  });

  item.addEventListener('mouseout', () => {
    animation.style.width = '0';
  });
});
