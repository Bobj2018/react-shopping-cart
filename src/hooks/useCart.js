import { useLocalStorage } from './useLocalStorage';

export const useCart = initialValue => {
	const [cart, setCart] = useLocalStorage('cart', initialValue);

	return [cart, setCart];
};
