interface Props {
  params: { search: string };
}

export async function generateMetadata({ params }: Props) {
  return {
    title: `Search ${params.search}`,
    description: `Video Search ${params.search}`,
  };
}
export default async function Page({ params }: Props) {
  return <div>search is : {params.search}</div>;
}
