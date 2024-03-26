export interface IVideos {
  id: string;
  title: string;
  video_image: string;
  embed_code: string;
  tags?: string[];
}

export interface IVideoDetailResponse {
  status: number;
  data: IVideos | null;
  message: string;
}
