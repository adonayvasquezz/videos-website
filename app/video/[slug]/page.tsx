import { VideosComponent, VideoTags } from "@/app/components";
import { EMBED_BASE_URL } from "@/app/lib/constants";
import { fetchVideoDetail } from "@/app/lib/data";
import { home_videos } from "@/app/lib/placeholder-data";

export async function generateMetadata({ params }: Props) {
  const videoInfo = await fetchVideoDetail(params.slug);
  const tags = videoInfo.data?.tags
    ? videoInfo.data?.tags
    : ["videos web", "trending videos"];

  return {
    title: `Video ${params.slug}`,
    description: `Video about ${params.slug}`,
    keywords: tags,
    openGraph: {
      images: videoInfo.data?.video_image || "/og-image.png",
    },
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
      <h1 className="md:mt-4 px-2 font-bold text-lg md:text-xl">
        {videoInfo.data?.title}
      </h1>
      <VideoTags tags={tags} />
      <div className="mt-4">
        <h3 className="p-2 text-lg">Related videos</h3>
        <VideosComponent videos={home_videos} />
      </div>
    </div>
  );
}
