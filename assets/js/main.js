function onScroll() {
	let navigationScroll = document.getElementById('navigation');

	if (scrollY > 0) {
		navigationScroll.classList.add('scroll');
	} else {
		navigationScroll.classList.remove('scroll');
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
}).reveal('#home, #home img, #home .stats, #services, #services header, #services .card');
