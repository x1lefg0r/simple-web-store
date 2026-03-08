import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useProduct } from "@/hooks/useProduct";
import { useProductsFilter } from "@/hooks/useProductsFilter";
import { CardDescription } from "../ui/card";
import { useBuy } from "@/hooks/useBuy";
import { Spinner } from "../ui/spinner";
import { ModalSkeleton } from "../skeletons/ModalSkeleton";

export const CardModal = () => {
  const { productId, setProduct } = useProductsFilter();
  const { buy, isLoadingBuy } = useBuy();

  const { data, isLoading } = useProduct();

  return (
    <Dialog
      open={!!productId}
      onOpenChange={(open) => {
        if (!open) setProduct("");
      }}
    >
      <DialogContent
        className="sm:max-w-lg"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        {isLoading ? (
          <ModalSkeleton />
        ) : (
          <>
            <img
              src={data?.image}
              alt={data?.title}
              className="pt-10 w-full "
            />
            <DialogHeader>
              <DialogTitle className="text-lg">{data?.title}</DialogTitle>
              <DialogDescription className="text-lg">
                {data?.description}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex gap-4 items-center">
              <CardDescription>
                <span className="font-semibold text-black text-lg">
                  {data?.price?.toLocaleString("ru-RU")} ₽
                </span>
              </CardDescription>
              <Button
                type="submit"
                size={"lg"}
                variant={"buy"}
                onClick={buy}
                disabled={isLoadingBuy}
              >
                {isLoadingBuy && <Spinner data-icon="inline-start" />}
                Купить
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
