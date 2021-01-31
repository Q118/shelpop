import React, { createContext, useReducer } from "react";

export const MAX_AMOUNT_PER_ITEM = 5;
const initialState = [];

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
      const { amount } = action.payload;
      return state.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: Math.min(amount, MAX_AMOUNT_PER_ITEM),
          };
        }
        return item;
      });
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== id);
    default:
      return state;
  }
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
