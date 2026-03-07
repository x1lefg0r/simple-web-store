import { useInfiniteQuery } from "@tanstack/react-query";
import { useProductsFilter } from "./useProductsFilter.tsx";
import { fetchProducts } from "../api/api.ts";

export const useProducts = () => {
  const { search } = useProductsFilter();
  const { hasNextPage, data, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["products", search],
      queryFn: async ({ pageParam }) => {
        const result = await fetchProducts(search, pageParam);
        return result;
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        return lastPage.next ?? undefined;
      },
    });

  return { hasNextPage, data, fetchNextPage, isFetchingNextPage };
};
