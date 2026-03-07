import type { Product, ProductsResponse } from "../types";

export const fetchProducts = async (
  search: string,
  page: number,
): Promise<ProductsResponse> => {
  const response = await fetch(
    `http://localhost:3000/products?q=${search}&_page=${page}&_limit=20`,
  );

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return response.json();
};

export const fetchProduct = async (id: number): Promise<Product> => {
  const response = await fetch(`http://localhost:3000/products/${id}`);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return response.json();
};
