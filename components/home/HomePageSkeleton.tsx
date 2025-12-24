import { Skeleton } from "../ui/skeleton";

export const HomePageSkeleton = () => {
  return (
    <div>
      {/* Carousel Skeleton */}
      <Skeleton className="w-screen h-[710px] sm:h-[600px]" />

      {/* Movie Containers Skeleton - Repeated 3 times for Upcoming, Popular, Top Rated */}
      {Array.from({ length: 3 }).map((_, sectionIndex) => (
        <div key={sectionIndex} className="py-8">
          {/* Title and See More Button */}
          <div className="flex justify-between items-center mb-6 px-4">
            <Skeleton className="w-[200px] h-[40px]" />
            <Skeleton className="w-[120px] h-[40px]" />
          </div>

          {/* Movie Cards */}
          <div className="flex gap-6 flex-wrap justify-center">
            {Array.from({ length: 10 }).map((_, i) => (
              <Skeleton className="w-[350px] h-[560px]" key={i} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
