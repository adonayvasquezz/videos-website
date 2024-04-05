interface Props {
  params: { search: string };
}
export default async function Page({ params }: Props) {
  return <div>search is : {params.search}</div>;
}
