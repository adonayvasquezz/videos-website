interface Props {
  params: { tag: string };
}

export async function generateMetadata({ params }: Props) {
  return {
    title: `Tag ${params.tag}`,
    description: `Video tag ${params.tag}`,
    keywords: [params.tag, "videos website", "trending videos"],
  };
}
export default async function Page({ params }: Props) {
  return <div>tag is : {params.tag}</div>;
}
