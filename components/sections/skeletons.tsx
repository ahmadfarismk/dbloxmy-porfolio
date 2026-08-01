import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * Skeleton states for async content sections.
 * Used as <Suspense> fallbacks — also ready for future pages
 * (team members, blog posts) that load dynamic data.
 */

export function ProjectCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="aspect-[16/9] rounded-none" />
      <CardContent className="p-6 pt-5">
        <Skeleton className="mb-3 h-6 w-2/3" />
        <Skeleton className="mb-2 h-4 w-full" />
        <Skeleton className="mb-5 h-4 w-4/5" />
        <Skeleton className="mb-5 h-20 w-full" />
        <div className="flex gap-2">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-14 rounded-full" />
        </div>
      </CardContent>
    </Card>
  );
}

export function ProjectsSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function TestimonialCardSkeleton() {
  return (
    <Card>
      <CardContent className="p-6 pt-6">
        <Skeleton className="mb-2 h-4 w-full" />
        <Skeleton className="mb-2 h-4 w-11/12" />
        <Skeleton className="mb-8 h-4 w-3/5" />
        <div className="flex items-center gap-3">
          <Skeleton className="size-11 rounded-full" />
          <div className="flex-1">
            <Skeleton className="mb-1.5 h-4 w-28" />
            <Skeleton className="h-3 w-40" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function TestimonialsSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <TestimonialCardSkeleton key={i} />
      ))}
    </div>
  );
}

/** Ready for the future team page */
export function TeamMemberSkeleton() {
  return (
    <div className="flex flex-col items-center text-center">
      <Skeleton className="mb-4 size-28 rounded-full" />
      <Skeleton className="mb-2 h-5 w-32" />
      <Skeleton className="h-4 w-24" />
    </div>
  );
}

/** Ready for the future blog page */
export function BlogPostSkeleton() {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="aspect-[16/9] rounded-none" />
      <CardContent className="p-6 pt-5">
        <Skeleton className="mb-3 h-4 w-24" />
        <Skeleton className="mb-2 h-6 w-full" />
        <Skeleton className="h-6 w-2/3" />
      </CardContent>
    </Card>
  );
}
