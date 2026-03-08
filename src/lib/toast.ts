import { toast } from "sonner";

export const showToast = (
  type: "success" | "warning" | "info",
  message: string,
) => {
  switch (type) {
    case "success":
      toast.success(message, { position: "top-right" });
      break;
    case "warning":
      toast.warning(message);
      break;
    case "info":
      toast.info(message);
      break;
  }
};
