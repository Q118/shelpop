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

// this line allows us to send properties to our component and enables SSR
Products.getInitialProps = withProducts;
// so whatever withProduct returns will be available as properties in our component

export default Products;