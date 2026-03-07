import type { Product, ProductsResponse } from "../types";

export const fetchProducts = async (
  search: string,
  page: number,
): Promise<ProductsResponse> => {
  const url = new URL("http://localhost:3000/products");
  url.searchParams.set("_page", String(page));
  url.searchParams.set("_per_page", "20");
  if (search) url.searchParams.set("title:contains", search);

  const response = await fetch(url.toString());

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
