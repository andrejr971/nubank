function scrollHeader() {
  const nav = document.getElementById('header');

  if (this.scrollY >= 50) {
    nav.classList.add('active-header');
  } else {
    nav.classList.remove('active-header');
  }
}

window.addEventListener('scroll', scrollHeader);

const dropdownMenu1 = document.getElementById('dropdown-item-1');
const dropdownMenu2 = document.getElementById('dropdown-item-2');
const dropdownMenu3 = document.getElementById('dropdown-item-3');

const menuItem1 = document.getElementById('menu-item-1');
const menuItem2 = document.getElementById('menu-item-2');
const menuItem3 = document.getElementById('menu-item-3');

function showDropdown1(e) {
  e.preventDefault();
  dropdownMenu1.classList.toggle('active-dropdown-menu');
  dropdownMenu2.classList.remove('active-dropdown-menu');
  dropdownMenu3.classList.remove('active-dropdown-menu');
}

function showDropdown2(e) {
  e.preventDefault();
  dropdownMenu1.classList.remove('active-dropdown-menu');
  dropdownMenu2.classList.toggle('active-dropdown-menu');
  dropdownMenu3.classList.remove('active-dropdown-menu');
}

function showDropdown3(e) {
  e.preventDefault();
  dropdownMenu1.classList.remove('active-dropdown-menu');
  dropdownMenu2.classList.remove('active-dropdown-menu');
  dropdownMenu3.classList.toggle('active-dropdown-menu');
}

function removeDropdown() {
  dropdownMenu1.classList.remove('active-dropdown-menu');
  dropdownMenu2.classList.remove('active-dropdown-menu');
  dropdownMenu3.classList.remove('active-dropdown-menu');
}

menuItem1.addEventListener('click', e => showDropdown1(e));
menuItem2.addEventListener('click', e => showDropdown2(e));
menuItem3.addEventListener('click', e => showDropdown3(e));

dropdownMenu1.addEventListener('mouseleave', removeDropdown);
dropdownMenu2.addEventListener('mouseleave', removeDropdown);
dropdownMenu3.addEventListener('mouseleave', removeDropdown);

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', e => {
      nav.classList.toggle('active-menu-mobile');
      toggle.classList.toggle('active-bx');
    });
  }
};

showMenu('bx', 'menu-mobile');