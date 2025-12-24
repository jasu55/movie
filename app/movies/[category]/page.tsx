import { getMoviesList } from "@/get-data";
import { movieResponseType } from "@/types";
import { MovieCard } from "@/components/movieDetails/Moviecard";
import { Paginationcomponent } from "@/components/home/Pagination";

type MoviesPageProps = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page: string }>;
};

const categoryMap: { [key: string]: string } = {
  upcoming: "upcoming",
  popular: "popular",
  "top-rated": "top_rated",
};

const titleMap: { [key: string]: string } = {
  upcoming: "Upcoming Movies",
  popular: "Popular Movies",
  "top-rated": "Top Rated Movies",
};

export default async function MoviesPage({
  params,
  searchParams,
}: MoviesPageProps) {
  const { category } = await params;
  const { page = "1" } = await searchParams;

  const apiCategory = categoryMap[category] || category;
  const movies: movieResponseType = await getMoviesList(apiCategory, page);

  const url = `/movies/${category}?`;

  return (
    <div className="mx-auto px-8 py-8">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">
          {titleMap[category] || category}
        </h1>
        <p className="text-lg text-muted-foreground">
          {movies.total_results} movies found
        </p>
      </div>

      <div className="flex gap-6 flex-wrap justify-center mb-8">
        {movies.results?.slice(0, 10).map((movie) => (
          <MovieCard
            key={movie.id}
            id={Number(movie.id)}
            title={movie.title}
            score={movie.vote_average}
            image={movie.poster_path}
          />
        ))}
      </div>

      <Paginationcomponent page={page} currentUrl={url} />
    </div>
  );
}
