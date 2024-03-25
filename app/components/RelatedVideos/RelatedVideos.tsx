import Image from "next/image";
import Link from "next/link";
import { IVideos } from "@/interfaces";

interface Props {
  videos: IVideos[];
}
export const RelatedVideos = ({ videos }: Props) => {
  return (
    <div className="mt-4">
      <h3 className="p-2 text-lg">Related Videos</h3>
      <div className="flex flex-wrap justify-between">
        {videos.map((video) => (
          <div
            key={video.id}
            className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 my-2 px-2 py-2"
          >
            <Link href={`/video/${video.embed_code}`}>
              <div className="block relative w-full h-[8rem]">
                <Image
                  src={video.video_image}
                  fill
                  sizes="auto"
                  alt={video.title}
                  className="object-cover w-full"
                  priority
                />
              </div>

              <div className="mt-1 overflow-hidden line-clamp-2 text-sm text-gray-300">
                {video.title}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
