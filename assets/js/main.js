function onScroll() {
	showNavOnScroll();
	showBackToTopOnScroll();
	activateMenuAtCurrentSection(services);
	// activateMenuAtCurrentSection();
}

// Para marcar no header aonde estamos, destacando o campo que estamos scrollando no momento
function activateMenuAtCurrentSection(section) {
	// Linha imaginaria que sempre vai se localizar ao meio da pagina com ou sem o scroll, linha fixa ao meio da PAG
	const targetLine = scrollY + innerHeight / 2;

	// Verificar se o topo está acima da linha
	const sectionTop = section.offsetTop; // offsetTop função nativa para indentificar o topo de uma seção, nesse caso é a home

	const sectionHeight = section.offsetHeight; // offsetHeight função nativa para indentificar a altura da seção, que nos da um numero antes de começar a proxima seção

	const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

	// Informações
	console.log('O topo da sessão passou da linha? ', sectionTopReachOrPassedTargetLine);

	// Verificar se a base está abaixo da linha
	// Quais dados vou precisar?

	// A sessão termina aonde?
	const sectionEndsAt = sectionTop + sectionHeight;
	console.log('sectionEndsAt', sectionEndsAt);

	// O final da sessão passou da linha alvo?
	const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

	console.log(sectionEndPassedTargetLine);

	// Limites da sessão
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
