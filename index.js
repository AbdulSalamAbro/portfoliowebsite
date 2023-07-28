function applyOnMobile() {
  const openBtn = document.getElementById('openbtn');
  const closeBtn = document.getElementById('closebtn');
  const menuLink1 = document.getElementById('menu-link1');
  const menuLink2 = document.getElementById('menu-link2');
  const menuLink3 = document.getElementById('menu-link3');
  const navBar = document.getElementById('navbar-grid');

  function openMenu() {
    navBar.style.left = '0';
  }

  function closeMenu() {
    navBar.style.left = '100%';
  }

  function removeMenu(event) {
    switch (event.target) {
      case menuLink1:
      case menuLink2:
      case menuLink3:
        navBar.style.left = '100%';
        break;
      default:
    }
  }

  openBtn.onclick = openMenu;
  closeBtn.onclick = closeMenu;
  document.onclick = removeMenu;
}

const mobileQuery = window.matchMedia('(max-width: 768px)');

function controlMobileScreen(event) {
  if (event.matches) {
    applyOnMobile();
  } else {
    document.getElementById('navbar-grid').style.left = '0';
  }
}

controlMobileScreen(mobileQuery);

mobileQuery.addEventListener('change', controlMobileScreen);

const projects = [
  {
    cardName: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    cardId: 'popupbtn1',
    popupTitle: 'Keeping track of hundreds of components',
    popupTech: ['Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    popupDes: "Description of card 06 pragraph 01 printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    popupDesTwo: "Description of card 06 pragraph 02 printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  },
  {
    cardName: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    cardId: 'popupbtn2',
    popupTitle: 'Keeping track of hundreds of components',
    popupTech: ['Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    popupDes: "Description of card 05 pragraph 01 printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    popupDesTwo: "Description of card 05 pragraph 02 printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  },
  {
    cardName: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    cardId: 'popupbtn3',
    popupTitle: 'Keeping track of hundreds of components',
    popupTech: ['Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    popupDes: "Description of card 04 pragraph 01 printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    popupDesTwo: "Description of card 04 pragraph 02 printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  },
  {
    cardName: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    cardId: 'popupbtn4',
    popupTitle: 'Keeping track of hundreds of components',
    popupTech: ['Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    popupDes: "Description of card 03 pragraph 01 printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    popupDesTwo: "Description of card 03 pragraph 02 printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  },
  {
    cardName: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    cardId: 'popupbtn5',
    popupTitle: 'Keeping track of hundreds of components',
    popupTech: ['Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    popupDes: "Description of card 02 pragraph 01 printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    popupDesTwo: "Description of card 02 pragraph 02 printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  },
  {
    cardName: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    cardId: 'popupbtn6',
    popupTitle: 'Keeping track of hundreds of components',
    popupTech: ['Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    popupDes: "Description of card 01 pragraph 01 printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    popupDesTwo: "Description of card 01 pragraph 02: printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  },
];

const workSection = document.getElementById('projects-card');

for (let i = 0; i < projects.length; i += 1) {
  const fetch = workSection.innerHTML;
  workSection.innerHTML = `
      <div class="project">
        <div class="content">
          <h3>
            ${projects[i].cardName}
          </h3>
          <ul class="languages">
            <li>${projects[i].technologies[0]}</li>
            <li>${projects[i].technologies[1]}</li>
            <li>${projects[i].technologies[2]}</li>
            <li>${projects[i].technologies[3]}</li>
          </ul>
          <div class="btn">
            <button class="greenbtn" id=${projects[i].cardId}>See project</button>
          </div>
        </div>
      </div> ${fetch}`;
}