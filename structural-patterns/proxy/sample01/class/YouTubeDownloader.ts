import { IThirdPartyYouTubeLib } from "../interface/IThirdPartyYouTubeLib";
import { Video } from "../model/Video";

export class YouTubeDownloader {
  private api: IThirdPartyYouTubeLib;

  constructor(api: IThirdPartyYouTubeLib) {
    this.api = api;
  }

  renderVideoPage(id: string) {
    const video = this.api.getVideo(id);

    console.log("\n-------------------------------");
    console.log("Video page (imagine fancy HTML)");
    console.log("ID: " + video.id);
    console.log("Title: " + video.title);
    console.log("-------------------------------\n");
  }

  renderPopularVideos() {
    const list = this.api.popularVideos();

    console.log("\n-------------------------------");
    console.log("Most popular videos on YouTube (imagine fancy HTML)");

    for (let video of list.values()) {
      console.log("ID: " + video.id + " / Title: " + video.title);
    }

    console.log("-------------------------------\n");
  }
}
