"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function MovieCarousel() {
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
    <Carousel setApi={setApi} className="w-screen ">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-6 max-h-[600px]">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                  {Array.from({ length: count }).map((_, index) => (
                    <div
                      onClick={() => api?.scrollTo(index)}
                      key={index}
                      className={` rounded-full size-4 ${
                        index + 1 === current ? "bg-white" : "bg-gray-600"
                      }`}
                    ></div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-13" />
      <CarouselNext className="right-13" />
    </Carousel>
  );
}
