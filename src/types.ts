export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: URL;
  description: string;
}

export interface ProductsResponse {
  products: Product[];
}

export interface FilterState {
  page: number;
  search: string;
}
