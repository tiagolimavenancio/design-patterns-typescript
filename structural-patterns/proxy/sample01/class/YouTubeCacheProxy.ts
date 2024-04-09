import { IThirdPartyYouTubeLib } from "../interface/IThirdPartyYouTubeLib";
import { ThirdPartyYouTubeClass } from "./ThirdPartyYouTubeClass";
import { Video } from "../model/Video";

export class YouTubeCacheProxy implements IThirdPartyYouTubeLib {
  private youtubeService: ThirdPartyYouTubeClass;
  private cachePopular = new Map<string, Video>();
  private cacheAll = new Map<string, Video>();

  constructor() {
    this.youtubeService = new ThirdPartyYouTubeClass();
  }

  popularVideos(): Map<string, Video> {
    if (this.cachePopular.size === 0) {
      this.cachePopular = this.youtubeService.popularVideos();
    } else {
      console.log("Retrieved list from cache.");
    }

    return this.cachePopular;
  }

  getVideo(id: string): Video {
    let video = this.cacheAll.get(id);

    if (!video) {
      video = this.youtubeService.getVideo(id);
      this.cacheAll.set(id, video);
    } else {
      console.log("Retrieved video " + id + " from cache.");
    }

    return video;
  }

  public reset(): void {
    this.cachePopular.clear();
    this.cacheAll.clear();
  }
}
