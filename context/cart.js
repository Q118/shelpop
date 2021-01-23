/** @format */

import React, { createContext, useReducer } from "react";

const initialState = [];

function reducer(state, action) {
	//...
}

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<CartContext.Provider value={{ state, dispatch }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;

