import { GetmoviesMorelikethis } from "@/get-data";
import { movieResponseType } from "@/types";
import { MovieCard } from "@/components/movieDetails/Moviecard";
import { Paginationcomponent } from "@/components/home/Pagination";

type MoreLikeThisPageProps = {
  searchParams: Promise<{ id: string; title: string; page?: string }>;
};

export default async function MoreLikeThisPage({
  searchParams,
}: MoreLikeThisPageProps) {
  const params = await searchParams;
  const id = params.id;
  const title = params.title;
  const page = params.page || "1";

  const movies: movieResponseType = await GetmoviesMorelikethis(
    id,
    page,
    title
  );

  const url = `/Morelikethispage?id=${id}&title=${title}&`;

  return (
    <div className="mx-auto  px-8 py-8">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">More like "{title}"</h1>
        <p className="text-lg text-muted-foreground">
          {movies.total_results} similar movies found
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
