import Image from "next/image";
import Link from "next/link";
import { home_videos } from "@/app/lib/placeholder-data";

export const HomeVideos = async () => {
  const { props } = await getHomeVideos();
  return (
    <div className="m-auto">
      <h1>Top videos website</h1>
      <div className="flex flex-wrap justify-between">
        {props.videos.map((video) => (
          <div
            key={video.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 my-2 px-2"
          >
            <Link
              href={`/video/${video.embed_code}`}
              className="hover:opacity-90"
            >
              <div className="block relative w-full h-[11rem]">
                <Image
                  src={video.video_image}
                  fill
                  sizes="auto"
                  alt={video.title}
                  className="object-cover w-full"
                  priority
                />
              </div>

              <div className="m-2 overflow-hidden line-clamp-2 hover:text-blue-400">
                {video.title}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

async function getHomeVideos() {
  // Fetch data from API

  const videos = home_videos;
  return {
    props: {
      videos,
    },
  };
}
