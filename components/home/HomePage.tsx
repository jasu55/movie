import { MovieCarousel } from "@/components/movieDetails";
import { movieResponseType } from "@/types";
import { getMoviesList } from "@/utils/get-data";
import { MoviesContainer } from "../movieDetails/MoviesContainer";

export async function HomePage() {
  const upcomingMovies: movieResponseType = await getMoviesList("upcoming");
  const popularMovies: movieResponseType = await getMoviesList("popular");
  const topRatedMovies: movieResponseType = await getMoviesList("top_rated");
  const nowPlayingMovies: movieResponseType = await getMoviesList(
    "now_playing"
  );

  console.log(upcomingMovies);

  return (
    <div>
      <MovieCarousel movies={nowPlayingMovies} />
      <MoviesContainer movies={upcomingMovies.results} title="Upcoming" />
      <MoviesContainer movies={popularMovies.results} title="Popular" />
      <MoviesContainer movies={topRatedMovies.results} title="Top Rated" />
    </div>
  );
}
