import { MoviesContainerProps } from "@/types";
import { MovieCard } from "../movieDetails/Moviecard";
import { Button } from "../ui/button";
import Link from "next/link";

export const MoviesContainer = ({
  movies,
  title,
  category,
}: MoviesContainerProps) => {
  const categorySlug = category
    ? category.toLowerCase().replace(/ /g, "-")
    : "";

  return (
    <div className="py-8 px-30">
      <div className="flex justify-between items-center mb-6 px-4">
        <h2 className="text-3xl font-bold">{title}</h2>
        {category && (
          <Link href={`/movies/${categorySlug}`}>
            <Button className="bg-foreground">See more</Button>
          </Link>
        )}
      </div>
      <div className="flex gap-4 flex-wrap justify-center">
        {movies.slice(0, 10).map((movie) => (
          <MovieCard
            key={movie.id}
            id={Number(movie.id)}
            title={movie.title}
            score={movie.vote_average}
            image={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};
