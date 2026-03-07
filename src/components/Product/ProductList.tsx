import { useProducts } from "@/hooks/useProducts";
import { SearchFilter } from "../filters/SearchFilter";
import { ProductCard } from "./ProductCard";
import { InfiniteScrollTrigger } from "../ui/InfiniteScrollTrigger";
import { useProductsFilter } from "@/hooks/useProductsFilter";

export const ProductList = () => {
  const { data, fetchNextPage, hasNextPage } = useProducts();
  const { handleSearch } = useProductsFilter();

  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-5">
        <SearchFilter onChange={handleSearch} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-10">
          {data?.pages.map((page) =>
            page.data.map((product) => (
              <ProductCard key={product.id} product={product} />
            )),
          )}
        </div>
        <InfiniteScrollTrigger
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
        />
      </div>
    </div>
  );
};
