import { Video } from "../types/Assets";

export const getTrailerKey = (videos: Array<Video>) => {
  for (const video of videos) {
    if (video.site === "YouTube" && video.official && video.type === "Trailer")
      return video.key;
  }
  return false;
};
