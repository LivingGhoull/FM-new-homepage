const navIcon = document.getElementById("mobil-icon");
const mobilNav = document.getElementById("mobil-nav");

console.log(navIcon);
console.log(mobilNav);

const imgClosed = "/icon-menu-close.svg"
const imgOpen = "/icon-menu.svg"

navIcon.onclick = () => {

  console.log('clciked');
  
  const currentImg = navIcon.src.split('/')[navIcon.src.split('/').length - 1]
  navIcon.src = `/${currentImg}` === imgOpen ? imgClosed : imgOpen;

  mobilNav.classList.toggle('open')
};
