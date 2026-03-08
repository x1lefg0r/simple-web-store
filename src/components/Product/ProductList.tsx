import { useProducts } from "@/hooks/useProducts";
import { SearchFilter } from "../filters/SearchFilter";
import { ProductCard } from "./ProductCard";
import { InfiniteScrollTrigger } from "../ui/InfiniteScrollTrigger";
import { useProductsFilter } from "@/hooks/useProductsFilter";
import { EmptyState } from "../states/EmptyState";
import { ErrorState } from "../states/ErrorState";
import { motion } from "motion/react";
import { ProductCardSkeleton } from "../skeletons/ProductCardSkeleton";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const ProductList = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isError, error } =
    useProducts();
  const { handleSearch, search, setProduct } = useProductsFilter();

  const total = data?.pages[0]?.items;

  return (
    <motion.div
      className="w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-5">
        <SearchFilter onChange={handleSearch} />
        {!isLoading && !isError && (
          <p className="pt-5">Всего объявлений: {total}</p>
        )}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-10">
            {Array.from({ length: 10 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        ) : isError ? (
          <ErrorState message={error?.message} />
        ) : !total ? (
          <EmptyState search={search} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-10">
            {data?.pages.map((page) =>
              page.data.map((product) => (
                <motion.div key={product.id} variants={cardVariants}>
                  <ProductCard
                    product={product}
                    onOpen={() => setProduct(String(product.id))}
                  />
                </motion.div>
              )),
            )}
          </div>
        )}
        <InfiniteScrollTrigger
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
        />
      </div>
    </motion.div>
  );
};
