import { debounce } from "lodash";
import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router";

export const useProductsFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("title:contains") ?? "";
  const productId = searchParams.get("productId") ?? "";

  const setSearch = useCallback(
    (value: string) => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev.toString());
        if (!value) newParams.delete("title:contains");
        else newParams.set("title:contains", value);
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

  return { search, productId, setProduct, handleSearch, setSearch };
};
