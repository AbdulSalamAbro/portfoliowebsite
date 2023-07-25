function applyOnMobile() {
  const openBtn = document.getElementById("openbtn");
  const closeBtn = document.getElementById("closebtn");
  const menuLink1 = document.getElementById("menu-link1");
  const menuLink2 = document.getElementById("menu-link2");
  const menuLink3 = document.getElementById("menu-link3");
  const navBar = document.getElementById("navbar-grid");

  function openMenu() {
    navBar.style.left = "0";
  }

  function closeMenu() {
    navBar.style.left = "100%";
  }

  function removeMenu(event) {
    switch (event.target) {
      case menuLink1:
      case menuLink2:
      case menuLink3:
        navBar.style.left = "100%";
        break;
      default:
    }
  }

  openBtn.onclick = openMenu;
  closeBtn.onclick = closeMenu;
  document.onclick = removeMenu;
}

const mobileQuery = window.matchMedia("(max-width: 768px)");

function controlMobileScreen(event) {
  if (event.matches) {
    applyOnMobile();
  }
}

controlMobileScreen(mobileQuery);

mobileQuery.addEventListener('change', controlMobileScreen);