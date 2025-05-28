function createToggleCartIcon () {
	const header = document.querySelector('.head');
	const toggleCart = document.createElement('button');
	toggleCart.classList.toggle('shop-toggle-cart');
	toggleCart.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z" fill="#FFFFFF"/></svg>`;

	header.appendChild(toggleCart);
}

createToggleCartIcon();

const toggleCart = document.querySelector('.shop-toggle-cart');
const cart = document.querySelector('.shop-cart');
toggleCart.addEventListener('click', () => cart.classList.toggle('active'));