import { useLocalStorage } from './useLocalStorage';

export const useCart = initialValue => {
	const [cart, setCart] = useLocalStorage('cart', initialValue);

		const addItem = item => {
		const cartID = Date.now();
		const product = { ...item, cartID: cartID };
		setCart([...cart, product]);
	};

	const removeItem = item => {
		const newCart = [];
		cart.map(product => {
			if (product.cartID !== item) {
				newCart.push(product);
				console.log(product);
			}
		});
		setCart(newCart);
	};

	return [cart, addItem, removeItem];
};
