import { useState } from "react";
import { useProductsFilter } from "./useProductsFilter";
import { showToast } from "@/lib/toast";

export const useBuy = () => {
  const [isLoadingBuy, setIsLoading] = useState(false);
  const { setProduct } = useProductsFilter();

  const buy = () => {
    setIsLoading(true);
    setTimeout(() => {
      setProduct("");
      setIsLoading(false);
      showToast("success", "Покупка совершена! Наслаждайтесь");
    }, 1000);
  };

  return { buy, isLoadingBuy };
};
