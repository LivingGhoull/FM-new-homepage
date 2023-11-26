const navIcon = document.getElementById("mobil-icon");
const mobilNav = document.getElementById("mobil-nav");

const imgClosed = "/icon-menu-close.svg"
const imgOpen = "/icon-menu.svg"

navIcon.onclick = () => {
  const currentImg = navIcon.src.split('/')[navIcon.src.split('/').length - 1]
  navIcon.src = `/${currentImg}` === imgOpen ? imgClosed : imgOpen;

  mobilNav.classList.toggle('open')
};
