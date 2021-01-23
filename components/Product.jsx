/** @format */

import { useContext } from "react";
import { Button } from "semantic-ui-react";

import { CartContext } from "../context/cart";

const Product = () => {
	const { dispatch } = useContext(CartContext);

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
