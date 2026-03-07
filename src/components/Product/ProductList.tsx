import { useProducts } from "@/hooks/useProducts";
import { SearchFilter } from "../filters/SearchFilter";
import { ProductCard } from "./ProductCard";
import { InfiniteScrollTrigger } from "../ui/InfiniteScrollTrigger";

export const ProductList = () => {
  const { data, fetchNextPage, hasNextPage } = useProducts();

  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-4">
        <SearchFilter />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
