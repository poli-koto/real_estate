const swiper = new Swiper('.slider-main-block', {
	// Optional parameters
	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: '.body-main-block__arrow.swiper-button-next',
		prevEl: '.body-main-block__arrow.swiper-button-prev',
	},
});


///Переключение объектов в блоке Property
const tabNavItems = document.querySelectorAll('.tabs-property__button');
const tabItems = document.querySelectorAll('.item-tabs');

document.addEventListener("click", function(e) {
	const targetElement = e.target;
	let currentActiveIndex = null;
	let newActiveIndex = null;
	if (targetElement.closest('.tabs-property__button')){
		tabNavItems.forEach((tabNavItem, index) => {
			if (tabNavItem.classList.contains('active')){
				currentActiveIndex = index;
				tabNavItem.classList.remove('active');
			}
			if (tabNavItem === targetElement){
				newActiveIndex = index;
			}
		});
		targetElement.classList.add('active');
		tabItems[currentActiveIndex].classList.remove('active');
		tabItems[newActiveIndex].classList.add('active');
	}

});