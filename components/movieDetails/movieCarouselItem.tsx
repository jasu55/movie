"use client";
import { GetmoviesTrailer } from "@/get-data";

import { movieResponseType, MovieType } from "@/types";
import React from "react";
import { CarouselItem } from "../ui/carousel";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { GiPlayButton } from "react-icons/gi";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

export const MovieCarouselItem = ({ movie }: { movie: MovieType }) => {
  const [trailerKey, setTrailerKey] = React.useState("");
  const [mounted, setMounted] = React.useState(false);

  const getTrailerData = async () => {
    try {
      const trailerData: movieResponseType = await GetmoviesTrailer(
        movie.id.toString()
      );
      if (trailerData?.results) {
        const trailer = trailerData.results.find(
          (item) => item.type === "Trailer"
        );
        setTrailerKey(trailer?.key || "");
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  React.useEffect(() => {
    setMounted(true);
    getTrailerData();
  }, []);

  return (
    <CarouselItem
      key={movie.id}
      className="text-white w-[375px] h-[710px] relative sm:relative sm:w-[1440px] sm:h-[600px]"
    >
      {" "}
      <img
        className="absolute inset-0 h-[246px] w-full sm:h-[600px] object-cover"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
      ></img>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent sm:bg-gradient-to-r sm:from-black/90 sm:via-black/60 sm:to-transparent"></div>
      <div className="pt-[274px]  w-full  text-white  sm:absolute sm:pl-[140px] sm:pt-[178px] relative z-10  ">
        <p>Now Playing :</p>
        <Link href={`/moviebyid/${movie.id}`}>
          <p className="text-[36px] font-bold">{movie.title}</p>
        </Link>
        <p className="flex gap-2 items-center text-[18px] pt-[10px]">
          <FaStar className="h-[28px] w-[28px]" color="#FDE047" />
          {movie.vote_average}
          <span className="text-[16px] color-[#71717A]">/10</span>
        </p>
        <p className="sm:w-[500px] text-[12px] font-normal pt-[26px]">
          {movie.overview}
        </p>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="rounded-full bg-white  mt-10  ">
              <GiPlayButton /> Watch trailer
            </Button>
          </DialogTrigger>
          <DialogTitle className="sr-only">Movie Trailer</DialogTitle>

          <DialogContent className="max-w-[90vw] sm:max-w-[1000px] w-full p-0 overflow-hidden">
            <div className="relative w-full aspect-video">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${trailerKey}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </CarouselItem>
  );
};
