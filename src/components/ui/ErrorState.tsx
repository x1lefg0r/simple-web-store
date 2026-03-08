import { AlertTriangleIcon } from "lucide-react";

export const ErrorState = ({
  message = "Что-то пошло не так",
}: {
  message?: string;
}) => (
  <div className="flex flex-col items-center justify-center py-20 gap-3 text-muted-foreground">
    <AlertTriangleIcon
      className="size-12 text-muted-foreground"
      color="red"
    ></AlertTriangleIcon>
    <span className="text-lg">{message}</span>
  </div>
);
