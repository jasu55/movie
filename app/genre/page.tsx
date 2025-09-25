import { MovieCard } from "@/components/home";
import { movieResponseType } from "@/types";
import { getMoviesByGenreId } from "@/utils/get-data";

type GenrePageProps = {
  searchParams: Promise<{ id: string; name: string; page: string }>;
};

const Genre = async ({ searchParams }: GenrePageProps) => {
  const params = await searchParams;
  const id = params.id;
  const name = params.name;
  const page = params.page || "1";

  const filteredMoviesResponse: movieResponseType = await getMoviesByGenreId(
    id,
    page
  );
  console.log("FILTERDSEN KINONUUD", filteredMoviesResponse);
  return (
    <div>
      {name}
      <div className="flex flex-wrap gap-3">
        {filteredMoviesResponse.results.slice(0, 10).map((movie) => (
          <MovieCard
            id={movie.id}
            key={movie.id}
            title={movie.title}
            score={movie.vote_average}
            image={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default Genre;
