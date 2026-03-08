import type { SearchFilterProps } from "@/types";
import { Input } from "../ui/input";
import { useProductsFilter } from "@/hooks/useProductsFilter";

export const SearchFilter = ({ onChange }: SearchFilterProps) => {
  const { search } = useProductsFilter();
  return (
    <div className="sticky top-5 z-40 max-w-md mx-auto bg-white rounded-md">
      <Input
        type="search"
        placeholder="Поиск..."
        defaultValue={search}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
