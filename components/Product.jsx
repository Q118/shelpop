/** @format */

import { useContext } from "react";
import { Button } from "semantic-ui-react";

import { CartContext } from "../context/cart";

const Product = () => {
	const { dispatch } = useContext(CartContext);
// we inject our dispatch function by making a call to the useContext hook and makes that call when a user clicks the button
	return (
		<>
			{/* Product components */}
			<Button
				color="green"
				onClick={() =>
					dispatch({
						type: "ADD_ITEM",
						payload: { id },
					})
				}>
				Add to Cart
			</Button>
		</>
	);
};

export default Product;
