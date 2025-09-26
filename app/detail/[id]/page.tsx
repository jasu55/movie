import { getMovieDetail, getMovieTrailers } from "@/utils/get-data";
import { TrailerResponseType } from "@/types";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TrailerDialog } from "@/components/trailer/TrailerDialog";

type DetailDynamicPageProps = { params: Promise<{ id: string }> };

export const generateMetadata = async ({ params }: DetailDynamicPageProps) => {
  const dynamicParams = await params;
  const id = dynamicParams.id;
  const movieDetailData = await getMovieDetail(id);

  return {
    title: `MovieZ | ${movieDetailData.title}`,
    description: movieDetailData.overview,
    keywords: movieDetailData.title,
  };
};

const DetailDynamicPage = async ({ params }: DetailDynamicPageProps) => {
  const dynamicParams = await params;
  const id = dynamicParams.id;
  const movieDetailData = await getMovieDetail(id);
  const trailerData: TrailerResponseType = await getMovieTrailers(id);
  console.log("TRAILER DATA", trailerData);
  console.log("MOVIE DETAIL DATA", movieDetailData);

  const trailer = trailerData.results.find(
    (trailer) => trailer.type === "Trailer"
  );

  return (
    <div className="text-2xl font-bold">
      {movieDetailData.title}
      <div>
        <TrailerDialog youtubeKey={trailer?.key} />
      </div>
    </div>
  );
};
export default DetailDynamicPage;
