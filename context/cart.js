/** @format */

import React, { createContext, useReducer } from "react";

const initialState = [];
// empty arrau = empty cart

function reducer(state, action) {
	//...
}

export const CartContext = createContext();

//! useReducer returns: the current state and a dispatch function
    //the dispatch function allows us to manipulate the current state by executing actions/

const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<CartContext.Provider value={{ state, dispatch }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;

