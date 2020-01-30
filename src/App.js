import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Contexts
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

//Hooks
import { useCart } from './hooks/useCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useCart([]);

	const addItem = item => {
		console.log('addItem', item);
		const cartID = Date.now();

		console.log(cartID);

		const product = { ...item, cartID: cartID };
		// item.cartID = cartID;

		setCart([...cart, product]);
		console.log('Cart', cart);
		console.log('Added to Cart', item);
	};

	const removeItem = item => {
		console.log('removeItem', item);
		const newCart = [];
		cart.map(product => {
			if (product.cartID !== item) {
				newCart.push(product);
				console.log(product);
			}
		});

		console.log('New Cart', newCart);

		setCart(newCart);

		// console.log('Removed from Cart');
	};

	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={{ cart, removeItem }}>
				<div className='App'>
					<Navigation />

					{/* Routes */}
					<Route exact path='/' component={Products} />

					<Route path='/cart' component={ShoppingCart} />
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
