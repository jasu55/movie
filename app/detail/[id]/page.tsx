type DetailDynamicPageProps = { params: Promise<{ id: string }> };

const DetailDynamicPage = async ({ params }: DetailDynamicPageProps) => {
  const dynamicParams = await params;
  const id = dynamicParams.id;
  return <div>page{id}</div>;
};
export default DetailDynamicPage;
