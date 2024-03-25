import { RelatedVideos } from "@/app/components";
import { EMBED_BASE_URL } from "@/app/lib/constants";
import { home_videos } from "@/app/lib/placeholder-data";

export default function Page({ params }: { params: { slug: string } }) {
  // ToDo: detail endpoint call to get full video information

  const title = "Claude 3 vs ChatGPT: ¿Quien lidera la IA? Mi veredicto";
  return (
    <>
      <div className="block mt-8 w-full md:w-[65%] h-[18rem] md:h-[65vh]">
        <iframe
          src={`${EMBED_BASE_URL}${params.slug}`}
          className="h-full w-full"
          allowFullScreen
        />
      </div>
      <h1 className="mt-3 px-2 text-2xl">{title}</h1>

      <RelatedVideos videos={home_videos} />
    </>
  );
}
