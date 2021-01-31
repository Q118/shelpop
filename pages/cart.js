import React, { useContext } from "react";
import { Message, Segment } from "semantic-ui-react";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";
import { CartContext } from "../context/cart";
import { withProducts } from "../data/api";

const Cart = ({ products }) => {
  const { state: items } = useContext(CartContext);
  const findProduct = (id) => products.find((p) => p.id === id);

  const getContent = () => {
    if (!items.length) {
      return (
        <Message info>
          <Message.Header>Your shopping cart is empty.</Message.Header>
          <p>Try adding some products!</p>
        </Message>
      );
    }
    return (
      <Segment>
        {items.map(({ id, amount }) => {
          const product = findProduct(id);
          return <CartItem key={product.id} {...product} amount={amount} />;
        })}
        <CartTotal products={products} />
      </Segment>
    );
  };

  return <div>{getContent()}</div>;
};

Cart.getInitialProps = withProducts;

export default Cart;
