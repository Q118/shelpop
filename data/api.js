/** @format */

import json from "./products.json";

export function getProducts() {
    return json.products;    
}
 

export async function withProducts() {
    const products = getProducts();
//withProducts is an asynch function so we could also execute code that takes time to execute; such as fetching data with a promise-based API: 
    //const products = await fetch('https://...');
	return {
		products,
	};
}

