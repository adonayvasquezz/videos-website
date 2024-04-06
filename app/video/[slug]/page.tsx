import { RelatedVideos, VideoTags } from "@/app/components";
import { EMBED_BASE_URL } from "@/app/lib/constants";
import { fetchVideoDetail } from "@/app/lib/data";
import { home_videos } from "@/app/lib/placeholder-data";

export async function generateMetadata({ params }: Props) {
  return {
    title: `Video ${params.slug}`,
    description: `Video about ${params.slug}`,
  };
}

interface Props {
  params: { slug: string };
}
export default async function Page({ params }: Props) {
  const videoInfo = await fetchVideoDetail(params.slug);
  const tags = videoInfo.data?.tags ? videoInfo.data?.tags : [];

  return (
    <div>
      <div className="block mt-8 w-full md:w-[65%] h-[18rem] md:h-[65vh]">
        <iframe
          src={`${EMBED_BASE_URL}${params.slug}`}
          className="h-full w-full"
          allowFullScreen
        />
      </div>
      <h1 className="mt-3 px-2 text-2xl">{videoInfo.data?.title}</h1>
      <VideoTags tags={tags} />
      <RelatedVideos videos={home_videos} />
    </div>
  );
}
