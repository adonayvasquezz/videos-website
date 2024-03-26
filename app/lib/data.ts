import { IVideoDetailResponse, IVideos } from "@/interfaces";
import { home_videos } from "./placeholder-data";

export const fetchVideoDetail = async (
  embedCode: string
): Promise<IVideoDetailResponse> => {
  try {
    const videoDetail = home_videos.find(
      (video) => video.embed_code === embedCode
    );
    if (!videoDetail) {
      return {
        status: 400,
        data: null,
        message: "Video not found",
      };
    }
    return {
      status: 200,
      data: videoDetail,
      message: "",
    };
  } catch (error) {
    console.error(error);
    return {
      status: 400,
      data: null,
      message: JSON.stringify(error),
    };
  }
};
