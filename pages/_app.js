import "semantic-ui-css/semantic.min.css";
import { Button, Container, Icon } from "semantic-ui-react";
import MainMenu from "../components/MainMenu";
import CartProvider from "../context/cart";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <div>
        <MainMenu />
        <Container fluid style={{ padding: "60px 0 20px 0" }}>
          <Component {...pageProps} />
        </Container>
        <div style={{ textAlign: "center" }}>
          <a href="https://gerardvanderput.com" target="_blank">
            <Button icon size="mini" labelPosition="left">
              <Icon name="heart" color="red" />
              Gerard van der Put.com
            </Button>
          </a>
        </div>
      </div>
    </CartProvider>
  );
}

export default MyApp;
