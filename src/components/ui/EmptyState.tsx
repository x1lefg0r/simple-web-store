import { SearchX } from "lucide-react";

export const EmptyState = ({ search }: { search: string }) => (
  <div className="flex flex-col items-center justify-center py-20 gap-3 text-muted-foreground">
    <SearchX className="size-12 text-muted-foreground" color="blue"></SearchX>
    <span className="text-lg">Ничего не найдено по запросу «{search}»</span>
  </div>
);
