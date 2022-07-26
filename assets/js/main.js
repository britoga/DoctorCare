function onScroll() {
	showNavOnScroll();
	showBackToTopOnScroll();
	activateMenuAtCurrentSection();
}

// Para marcar no header aonde estamos, destacando o campo que estamos scrollando no momento
function activateMenuAtCurrentSection() {
	const targetLine = scrollY + innerHeight / 2;

	// Verificar se o topo está acima da linha
	const sectionTop = home.offsetTop;
	const sectionHeight = home.offsetHeight;

	const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

	console.log('O topo da sessão passou da linha? ' + sectionTopReachOrPassedTargetLine);

	// Verificar se a base está abaixo da linha
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
