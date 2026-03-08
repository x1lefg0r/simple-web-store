import { Card, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export const ProductCardSkeleton = () => (
  <Card className="relative mx-auto w-full max-w-sm pt-0">
    <Skeleton className="aspect-video w-full" />
    <Skeleton className="h-5 w-16 ml-5" />
    <CardHeader>
      <Skeleton className="h-4 w-16" />
      <Skeleton className="h-5 w-3/4" />
    </CardHeader>
  </Card>
);
