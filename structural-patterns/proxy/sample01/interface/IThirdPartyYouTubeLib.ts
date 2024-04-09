import { Video } from "../model/Video";

export interface IThirdPartyYouTubeLib {
  popularVideos(): Map<string, Video>;
  getVideo(id: string): Video;
}
