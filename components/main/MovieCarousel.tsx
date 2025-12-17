"use client";
import * as React from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieCarouselProps } from "@/types";
import { MovieCarouselItem } from "./movieCarouselItem";

export function MovieCarousel({ movies }: MovieCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel setApi={setApi} className="w-screen">
        <CarouselContent className="m-auto">
          {movies.results.slice(0, 5).map((movie, index) => (
            <MovieCarouselItem key={index} movie={movie} />
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-13" />
        <CarouselNext className="right-13" />
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {Array.from({ length: count }).map((_, index) => (
            <div
              onClick={() => {
                api?.scrollTo(index);
              }}
              key={index}
              className={`rounded-full size-4 cursor-pointer transition-all ${
                index + 1 === current ? "bg-white" : "bg-gray-600"
              }`}
            ></div>
          ))}
        </div>
      </Carousel>
    </>
  );
}
