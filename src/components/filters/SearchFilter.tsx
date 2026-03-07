import type { SearchFilterProps } from "@/types";
import { Input } from "../ui/input";

export const SearchFilter = ({ onChange }: SearchFilterProps) => {
  return (
    <div className="max-w-md mx-auto">
      <Input
        type="search"
        placeholder="Поиск..."
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
