const cartButton = document.querySelector('.btn-success');
let cartCount = 0;
const addToCartButtons = document.querySelectorAll('input[type="submit"]');
addToCartButtons.forEach((button) => {
	button.addEventListener('click', function (event) {
		event.preventDefault();
		cartCount++;
		const cartBadge = cartButton.querySelector('.badge');
		cartBadge.textContent = cartCount;
	});
});
