import { useContext } from "react";
import { Button, Icon, Label } from "semantic-ui-react";
import { CartContext } from "../context/cart";
import MoneyFormat from "./MoneyFormat";
import styles from "./product.module.scss";

const Product = ({ id, name, description, price }) => {
  const { dispatch } = useContext(CartContext);
  return (
    <div className={styles.product}>
      <div>
        <div>
          <strong>{name}</strong>
        </div>
        <div>{description}</div>
      </div>
      <div>
        <MoneyFormat value={price} />
      </div>
      <div>
        <Button
          color="green"
          icon
          size="mini"
          onClick={() => dispatch({ type: "ADD_ITEM", payload: { id } })}
        >
          <Icon name="plus" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default Product;
