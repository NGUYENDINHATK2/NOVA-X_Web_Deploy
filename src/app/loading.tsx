import { Skeleton } from "@/core/adnui/components/ui/skeleton";

export default function Loading() {
    return (
      <div className="w-screen h-screen flex items-center justify-center font-serif font-medium text-bgPrimarySolidFocus bg-white">
        <Skeleton className="w-full h-4" />
      </div>
    );
  }
  