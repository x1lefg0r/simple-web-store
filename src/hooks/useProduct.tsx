import { useQuery } from "@tanstack/react-query";
import { useProductsFilter } from "./useProductsFilter";
import { fetchProduct } from "../api/api";

export const useProduct = () => {
  const { productId } = useProductsFilter();
  const { data, isError, isLoading } = useQuery({
    enabled: !!productId,
    queryKey: ["products", productId],
    queryFn: () => fetchProduct(Number(productId)),
  });

  return { data, isError, isLoading };
};
