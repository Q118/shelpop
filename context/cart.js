/** @format */

import React, { createContext, useReducer } from "react";

const initialState = [];
// empty arrau = empty cart

function reducer(state, action) {
	const { id } = action.payload;
	switch (action.type) {
		case "ADD_ITEM":
			const entry = state.find((item) => item.id === id);
			if (entry) {
				return state.map((item) => {
					if (item.id === id) {
						return {
							...item,
							amount: Math.min(item.amount + 1, MAX_AMOUNT_PER_ITEM),
						};
					}
					return item;
				});
			}
			return [...state, { id, amount: 1 }];
		case "ADJUST_AMOUNT":
		// ...
		case "REMOVE_ITEM":
		// ...
		default:
			return state;
	}
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
