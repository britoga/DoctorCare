function onScroll() {
	showNavOnScroll();
	showBackToTopOnScroll();
	activateMenuAtCurrentSection(services);
	activateMenuAtCurrentSection(about);
	// activateMenuAtCurrentSection(contact);
}

// Para marcar no header aonde estamos, destacando o campo que estamos scrollando no momento
function activateMenuAtCurrentSection(section) {
	const targetLine = scrollY + innerHeight / 2;

	const sectionTop = section.offsetTop;
	const sectionHeight = section.offsetHeight;
	const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

	const sectionEndsAt = sectionTop + sectionHeight;
	const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

	// Limites da sessão
	const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

	const sectionId = section.getAttribute('id');
	const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

	menuElement.classList.remove('active');
	if (sectionBoundaries) {
		menuElement.classList.add('active');
	}
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
}).reveal('#home, #home img, #home .stats, #services, #services header, #services .card', '#about', '#about header', '#about .services');
