import { HomePageSkeleton } from "@/components/home/HomePageSkeleton";
import { HomePage } from "@/components/movieDetails";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<HomePageSkeleton />}>
      <HomePage />
    </Suspense>
  );
}
