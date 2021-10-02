window.addEventListener('load', () => {
	if (document.querySelector('.gallery')) {
		const gallery = document.querySelector('.gallery');
		const masonry = new Masonry(gallery, {
			itemSelector: '.gallery__item',
			gutter: 15,
			columnWidth: 2,
			horizontalOrder: true,
		});
	}
});



// Burger
const mainNavigation = document.getElementById('main-navigation');

document.querySelector('.burger').addEventListener('click', () => {
	mainNavigation.classList.add('active');
	hideScroll();
});

document.querySelector('.burger-menu__close').addEventListener('click', () => {
	mainNavigation.classList.remove('active');
	showScroll();
});

const hideScroll = () => {
    const scrollWidth = `${getScrollbarWidth()}px`;

	document.body.style.paddingRight = scrollWidth;
	document.body.style.overflow = 'hidden';

	mainNavigation.style.paddingRight = scrollWidth;
};

const showScroll = () => {
	document.body.style.paddingRight = '';
	document.body.style.overflow = 'visible';

	mainNavigation.style.paddingRight = '';
};

const resetNav = () => {
	mainNavigation.classList.remove('active');
	showScroll();
}

window.addEventListener('resize', resetNav);

const getScrollbarWidth = () => {
	const outer = document.createElement('div');

	outer.style.position = 'absolute';
	outer.style.top = '-9999px';
	outer.style.width = '50px';
	outer.style.height = '50px'; 
	outer.style.overflow = 'scroll';
	outer.style.visibility = 'hidden';

	document.body.appendChild(outer);
	const scrollBarWidth = outer.offsetWidth - outer.clientWidth;
	document.body.removeChild(outer);

	return scrollBarWidth;
}


// Sliders
if (document.querySelector('.swiperMain')) {
	const swiperMain = new Swiper('.swiperMain', {
		loop: true,
		spaceBetween: 16,
		slidesPerView: 'auto',
		loopedSlides: 3,
		centeredSlides: true,
	});
}

if (document.querySelector('.swiperDesigner')) {
	const swiperDesigner = new Swiper('.swiperDesigner', {
		loop: true,
		spaceBetween: 17,
	
		navigation: {
			nextEl: '.swiperDesigner__next',
			prevEl: '.swiperDesigner__prev',
		},

		breakpoints: {
			1541: {
				slidesPerView: 4,
			},

			992: {
				slidesPerView: 3,
			},

			576: {
				slidesPerView: 2,
			},

			320: {
				slidesPerView: 1,
			}
		}
	});
}

if (document.querySelector('.swiperReview')) {
	const swiperReview = new Swiper('.swiperReview', {
		loop: true,
		spaceBetween: 16,
	
		navigation: {
			nextEl: '.swiperReview__next',
			prevEl: '.swiperReview__prev',
		},

		breakpoints: {
			992: {
				slidesPerView: 3,
			},

			577: {
				slidesPerView: 2,
			},

			320: {
				slidesPerView: 1,
			},
		}
	});
}

// Smooth Scroll
if (document.querySelectorAll('a[data-smooth="smooth"]')) {
	const smoothLinks = document.querySelectorAll('a[data-smooth="smooth"]');
	for (let smoothLink of smoothLinks) {
		smoothLink.addEventListener('click', function (e) {
			e.preventDefault();
			const id = smoothLink.getAttribute('href');
			// mainNavigation.classList.remove('active');
			showScroll();
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		 });
	};
}


// Popups
const btnPopupClose = document.querySelectorAll('.close-popup-btn');
const bgPopupClose = document.querySelectorAll('.overlay-bg');

for (const bg of bgPopupClose) {
	bg.addEventListener('click', () => {
		bg.parentNode.classList.remove('active');
		showScroll();
	});
}

for (const btn of btnPopupClose) {
	btn.addEventListener('click', () => {
		btn.parentNode.parentNode.classList.remove('active');
		showScroll();
	});
}


const popupOffer = document.querySelector('.popup-offer');
const btnOpenPopupOffer = document.querySelectorAll('.popup-offer-btn-open');


for (const btn of btnOpenPopupOffer) {
	btn.addEventListener('click', () => {
		popupOffer.classList.add('active');
		hideScroll();
	});
}

window.addEventListener('load', () => {
	popupOffer.classList.add('popup-offer_hover');
});


const portfolioTabBtn = document.querySelectorAll('.portfolio-tabs__btn');
const portfolioTabContent = document.querySelectorAll('.portfolio-content');

for (const btn of portfolioTabBtn) {
	btn.addEventListener('click', () => {
		for (const btn2 of portfolioTabBtn) {
			btn2.classList.remove('active');
		}
		btn.classList.add('active');

		for (const content of portfolioTabContent) {
			content.classList.remove('active');

			if (content.getAttribute('data-portfolio-content') == btn.getAttribute('data-portfolio-btn')) {
				content.classList.add('active');
			}
		}
	});
}