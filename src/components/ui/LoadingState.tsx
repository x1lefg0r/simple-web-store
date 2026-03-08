import { Spinner } from "./spinner";

export const LoadingState = () => (
  <div className="flex flex-col items-center justify-center py-20 gap-3 text-muted-foreground">
    <Spinner className="size-14" color="blue"></Spinner>
    <span className="text-lg">Загрузка...</span>
  </div>
);
