import debounce from "debounce";
import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router";

export const useProductsFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("q") ?? "";
  const productId = searchParams.get("productId") ?? "";

  const setSearch = useCallback(
    (value: string) => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev.toString());
        if (!value) newParams.delete("q");
        else newParams.set("q", value);
        return newParams;
      });
    },
    [setSearchParams],
  );

  const setProduct = useCallback(
    (value: string) => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev.toString());
        if (!value) newParams.delete("productId");
        else newParams.set("productId", value);
        return newParams;
      });
    },
    [setSearchParams],
  );

  const handleSearch = useMemo(
    () => debounce((value: string) => setSearch(value), 200),
    [setSearch],
  );

  return { search, productId, setProduct, handleSearch };
};
