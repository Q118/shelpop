import { Segment } from "semantic-ui-react";
import Product from "../components/Product";
import { withProducts } from "../data/api";

const Products = ({ products }) => {
  return (
    <Segment>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </Segment>
  );
};

Products.getInitialProps = withProducts;

export default Products;