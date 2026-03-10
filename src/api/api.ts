import type { Product, ProductsResponse } from "../types";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchProducts = async (
  search: string,
  page: number,
): Promise<ProductsResponse> => {
  const url = new URL(`${API_URL}/products`);
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
  const response = await fetch(`${API_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return response.json();
};
