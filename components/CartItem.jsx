import { useContext } from "react";
import { Button, Dropdown, Icon } from "semantic-ui-react";
import { CartContext, MAX_AMOUNT_PER_ITEM } from "../context/cart";
import MoneyFormat from "./MoneyFormat";
import styles from "./cartRow.module.scss";

const CartItem = ({ id, name, description, price, amount }) => {
  const { dispatch } = useContext(CartContext);
  const options = [...new Array(MAX_AMOUNT_PER_ITEM)].map((v, index) => ({
    key: index,
    text: index + 1,
    value: index + 1,
  }));
  return (
    <div className={styles.row}>
      <div className={styles.columnStretched}>
        <strong>{name}</strong>
      </div>
      <div className={styles.column}>
        <Button
          icon
          size="mini"
          color="red"
          inverted
          onClick={() => dispatch({ type: "REMOVE_ITEM", payload: { id } })}
        >
          <Icon name="trash" />
        </Button>
      </div>
      <div className={styles.column}>
        <Dropdown
          compact
          scrolling={false}
          options={options}
          value={amount}
          onChange={(e, data) =>
            dispatch({
              type: "ADJUST_AMOUNT",
              payload: { amount: data.value, id },
            })
          }
        />
      </div>
      <div className={styles.column}>
        <MoneyFormat value={amount * price} />
      </div>
    </div>
  );
};

export default CartItem;
