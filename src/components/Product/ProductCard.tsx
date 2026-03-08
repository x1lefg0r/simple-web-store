import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useProductsFilter } from "@/hooks/useProductsFilter";
import type { ProductProps } from "@/types";
import { Badge } from "@/components/ui/badge";

export const ProductCard = ({ product }: ProductProps) => {
  const { setProduct } = useProductsFilter();
  const { title, price, image, category } = product;

  return (
    <Card
      className="relative mx-auto w-full max-w-sm pt-0 cursor-pointer transition-transform duration-300 hover:scale-105 h-full"
      onClick={() => setProduct(String(product.id))}
    >
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={image}
        alt={title}
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <Badge variant="default" className="ml-5">
        {category}
      </Badge>
      <CardHeader>
        <CardDescription>
          <span className="font-semibold">
            {price.toLocaleString("ru-RU")} ₽
          </span>
        </CardDescription>
        <CardTitle className="duration-300 hover:opacity-60">{title}</CardTitle>
      </CardHeader>
    </Card>
  );
};
