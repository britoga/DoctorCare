function onScroll() {
	showNavOnScroll();
	showBackToTopOnScroll();
}

function showNavOnScroll() {
	let navigationScroll = document.getElementById('navigation');

	if (scrollY > 0) {
		navigationScroll.classList.add('scroll');
	} else {
		navigationScroll.classList.remove('scroll');
	}
}

function showBackToTopOnScroll() {
	let backToTopScroll = document.getElementById('backToTop');

	if (scrollY > 500) {
		backToTopScroll.classList.add('show');
	} else {
		backToTopScroll.classList.remove('show');
	}
}

function openMenu() {
	document.body.classList.add('menu-expanded');
}

function closeMenu() {
	document.body.classList.remove('menu-expanded');
}

ScrollReveal({
	origin: 'top',
	distance: '30px',
	duration: 700,
}).reveal('#home, #home img, #home .stats, #services, #services header, #services .card', '#about-us', '#about-us header', '#about-us .services');
