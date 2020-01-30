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

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		console.log('addItem', item);
		setCart([...cart, item]);
		console.log('Added to Cart');
	};

	const removeItem = item => {
		console.log('removeItem', item)
		const newCart = [];
		cart.map(task => {
			if (task.id !== item) {
				newCart.push(task);
			}
		})



		setCart(newCart)
		
		console.log('Removed from Cart')
	}

	return (
		<ProductContext.Provider value={{ products, addItem}}>
			<CartContext.Provider value={{cart, removeItem}}>
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
