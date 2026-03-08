import { DialogHeader } from "../ui/dialog";
import { Skeleton } from "../ui/skeleton";

export const ModalSkeleton = () => (
  <>
    <Skeleton className="w-full aspect-video" />
    <DialogHeader>
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </DialogHeader>
    <Skeleton className="h-10 w-24 ml-auto" />
  </>
);
