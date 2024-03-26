interface Props {
  params: { tag: string };
}
export default async function Page({ params }: Props) {
  return <div>tag is : {params.tag}</div>;
}
