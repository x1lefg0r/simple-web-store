export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export interface ProductsResponse {
  data: Product[];
  pages: number;
  next: number | null;
}

export interface FilterState {
  page: number;
  search: string;
}

export interface ProductProps {
  product: Product;
}

export interface InfiniteScrollTriggerProps {
  hasNextPage: boolean;
  fetchNextPage: () => void;
}

export interface SearchFilterProps {
  onChange: (value: string) => void;
}
