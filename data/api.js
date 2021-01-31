import json from "./products.json";

export function getProducts() {
  return json.products;
}

export async function withProducts() {
  const products = getProducts();
  return {
    products,
  };
}

export const getTotalSum = (products, items) => {
  return items
    .map(({ id, amount }) => ({
      product: products.find((p) => p.id === id),
      amount,
    }))
    .map(({ product: { price }, amount }) => amount * price)
    .reduce((acc, cur) => acc + cur, 0);
};
