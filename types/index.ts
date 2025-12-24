export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: string;
  original_language: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  runtime: number;
  genres: CrewType[];
  Movietrailer: any;
  vote_count: number;
  src: string;
  type: string;
  key: string;
  name: string;
  Score: number;
  Image: string;
  releasedate: string;
  crew: CrewType[];
  cast: CrewType[];
};

export type movieResponseType = {
  page: number;
  totalPages: number;
  id: string;
  key: string;
  type: string;
  name: string;
  results: MovieType[];
  total_results: number;
};
export type Trailer = {
  key: string;
};

export type CrewType = {
  job: string;
  name: string;
  id: string;
};

export type Directorname = {
  cast: CrewType[];
  crew: CrewType[];
};

export type MovieCarouselProps = {
  movies: movieResponseType;
};

export type GenreResponseType = {
  genres: GenreType[];
};

export type GenreType = {
  id: string;
  name: string;
};
export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
};
export type PaginationcomponentProps = {
  currentUrl: string;
  page: string;
};
export type SearchPageProps = {
  params: Promise<{ value: string }>;
  searchParams: Promise<{ id?: string; name?: string }>;
};
export type MoviesContainerProps = {
  movies: MovieType[];
  title: string;
  category?: string;
};
export type MovieCardProps = {
  title: string;
  score: number;
  image: string;
  id: number;
};
