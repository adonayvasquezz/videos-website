interface Props {
  params: { search: string };
}

export async function generateMetadata({ params }: Props) {
  const searchSplit = params.search.split(" ");
  return {
    title: `Search ${params.search}`,
    description: `Video Search ${params.search}`,
    keywords: [...searchSplit, "videos website", "trending videos"],
  };
}
export default async function Page({ params }: Props) {
  return <div>search is : {params.search}</div>;
}
