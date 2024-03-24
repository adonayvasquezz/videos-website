import Image from "next/image";
import { home_videos } from "@/app/lib/placeholder-data";

export const HomeVideos = async () => {
  const { props } = await getHomeVideos();
  return (
    <div className="w-5/6 m-auto">
      HomeVideos
      <div className="flex flex-wrap justify-between">
        {props.videos.map((video) => (
          <div
            key={video.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 my-2 px-2"
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

            <div
              className="m-2 overflow-hidden"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {video.title}
            </div>
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
