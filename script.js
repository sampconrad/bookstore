// LOGIN/REGISTRATION FORM
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const indicator = document.getElementById('indicator');

function register() {
	registerForm.style.transform = 'translateX(0px)';
	loginForm.style.transform = 'translateX(0px)';
	indicator.style.transform = 'translateX(100px)';
}

function login() {
	registerForm.style.transform = 'translateX(300px)';
	loginForm.style.transform = 'translateX(300px)';
	indicator.style.transform = 'translateX(0px)';
}

// TOGGLE MOBILE MENU
let MenuItems = document.getElementById('MenuItems');
MenuItems.style.maxHeight = '0px';
function menutoggle() {
	if (MenuItems.style.maxHeight == '0px') {
		MenuItems.style.maxHeight = '200px';
	} else {
		MenuItems.style.maxHeight = '0px';
	}
}

// STICKY INDEX NAVBAR
const navbar = document.getElementById('index-navbar');
window.onscroll = () => {
	if (window.scrollY > 50) {
		navbar.classList.add('nav-active');
	} else {
		navbar.classList.remove('nav-active');
	}
};

// SEARCH BOX
const searchBox = document.querySelector('.search-box');
const searchBtn = document.querySelector('.search-icon');
const cancelBtn = document.querySelector('.cancel-icon');
const searchInput = document.querySelector('input');
const searchData = document.querySelector('.search-data');
searchBtn.onclick = () => {
	searchBox.classList.add('active');
	searchBtn.classList.add('active');
	searchInput.classList.add('active');
	cancelBtn.classList.add('active');
	searchInput.focus();
	if (searchInput.value != '') {
		var values = searchInput.value;
		searchData.classList.remove('active');
		searchData.innerHTML =
			'You just typed ' +
			"<span style='font-weight: 500;'>" +
			values +
			'</span>';
	} else {
		searchData.textContent = '';
	}
};
cancelBtn.onclick = () => {
	searchBox.classList.remove('active');
	searchBtn.classList.remove('active');
	searchInput.classList.remove('active');
	cancelBtn.classList.remove('active');
	searchData.classList.toggle('active');
	searchInput.value = '';
};

// PRODUCT GALLERY
const productImg = document.getElementById('productImg');
const smallImg = document.getElementsByClassName('small-img');

smallImg[0].onclick = function () {
	productImg.src = smallImg[0].src;
};
smallImg[1].onclick = function () {
	productImg.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
	productImg.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
	productImg.src = smallImg[3].src;
};
