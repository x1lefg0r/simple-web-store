import { useInfiniteQuery } from "@tanstack/react-query";
import { useProductsFilter } from "./useProductsFilter.tsx";
import { fetchProducts } from "../api/api.ts";

export const useProducts = () => {
  const { search } = useProductsFilter();
  const { hasNextPage, data, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["products", search],
      queryFn: ({ pageParam }) => fetchProducts(search, pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage?.products.length < 20 ? undefined : allPages.length + 1;
      },
    });

  return { hasNextPage, data, fetchNextPage, isFetchingNextPage };
};
