import { VideosComponent } from "@/app/components";
import { home_videos } from "@/app/lib/placeholder-data";

interface Props {
  params: { search: string };
}

export async function generateMetadata({ params }: Props) {
  const searchSplit = params.search.split(" ");
  return {
    title: `Search ${params.search}`,
    description: `Video Search ${params.search}`,
    keywords: [...searchSplit, "videos web", "trending videos"],
  };
}
export default async function Page({ params }: Props) {
  const { props } = await getSearchVideos();
  const phraseSearched = params.search.replaceAll("%20", " ");

  const searchedVideos = props.videos.filter((videos) =>
    videos.title.includes(phraseSearched)
  );

  return (
    <div className="pt-12">
      <h1 className="text-xl mb-4">Search is {phraseSearched}</h1>
      {searchedVideos.length ? (
        <VideosComponent videos={searchedVideos} />
      ) : (
        <h4>No se encontraron videos con esta busqueda</h4>
      )}

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
