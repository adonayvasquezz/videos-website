import { VideosComponent } from "@/app/components";
import { home_videos } from "@/app/lib/placeholder-data";

interface Props {
  params: { tag: string };
}

export async function generateMetadata({ params }: Props) {
  return {
    title: `Tag ${params.tag}`,
    description: `Video tag ${params.tag}`,
    keywords: [params.tag, "videos web", "trending videos"],
  };
}
export default async function Page({ params }: Props) {
  const { props } = await getSearchVideos();
  const tagSearched = params.tag.replaceAll("%20", " ");
  const searchedVideos = props.videos.filter((videos) =>
    videos.tags?.includes(tagSearched)
  );

  return (
    <div className="pt-12">
      <h1 className="text-xl mb-4">
        Tag <span className="font-bold">{tagSearched}</span> Videos
      </h1>

      <VideosComponent videos={searchedVideos} />

      <div className="mt-16">
        <h3 className="p-2 text-lg">Related videos</h3>
        <VideosComponent videos={home_videos} />
      </div>
    </div>
  );
}

async function getSearchVideos() {
  // Fetch data from API

  const videos = home_videos;
  return {
    props: {
      videos,
    },
  };
}
