import { Menu, Icon, Container } from "semantic-ui-react";
import { useRouter } from "next/router";
import Link from "next/link";
import { CartContext } from "../context/cart";
import { useContext } from "react";

export default function MainMenu() {
  const { pathname } = useRouter();
  const { state: items } = useContext(CartContext);
  const amount = items.reduce((acc, cur) => acc + cur.amount, 0);

  const buttons = [
    { path: "/", text: "products", icon: "shopping bag", position: "left" },
    {
      path: "/cart",
      text: `cart (${amount})`,
      icon: "shopping cart",
      position: "right",
    },
  ];

  return (
    <Menu
      fixed="top"
      inverted
      color="violet"
      style={{ border: "5px solid white" }}
    >
      <Container fluid>
        <Menu.Item header>Webshop</Menu.Item>
        {buttons.map((button) => (
          <Link key={button.text} href={button.path}>
            <Menu.Item
              active={pathname === button.path}
              position={button.position}
            >
              <Icon name={button.icon} />
              {button.text}
            </Menu.Item>
          </Link>
        ))}
      </Container>
    </Menu>
  );
}
