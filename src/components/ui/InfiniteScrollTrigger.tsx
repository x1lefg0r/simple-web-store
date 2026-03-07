import type { InfiniteScrollTriggerProps } from "@/types";
import { useEffect, useRef } from "react";

export const InfiniteScrollTrigger = ({
  hasNextPage,
  fetchNextPage,
}: InfiniteScrollTriggerProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);

  return <div ref={ref}></div>;
};
