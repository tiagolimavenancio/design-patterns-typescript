import { IThirdPartyYouTubeLib } from "../interface/IThirdPartyYouTubeLib";
import { Video } from "../model/Video";

export class ThirdPartyYouTubeClass implements IThirdPartyYouTubeLib {
  private experienceNetworkLatency() {
    let randomLatency = Math.floor(Math.random() * 10) + 1;

    for (let i = 0; i < randomLatency; i++) {
      try {
        setTimeout(() => {}, 1000);
      } catch (error) {
        console.log(error);
      }
    }
  }

  private connectToServer(server: string) {
    console.log("Connecting to " + server + "...");
    this.experienceNetworkLatency();
    console.log("Connected! \n");
  }

  private getRandomVideos(): Map<string, Video> {
    console.log("Downloading populars...");

    this.experienceNetworkLatency();

    const hmap = new Map<string, Video>();
    hmap.set("catzzzzzzzzz", new Video("sadgahasgdas", "Catzzzz.avi"));
    hmap.set("mkafksangasj", new Video("mkafksangasj", "Dog play with ball.mp4"));
    hmap.set("dancesvideoo", new Video("asdfas3ffasd", "Dancing video.mpq"));
    hmap.set("dlsdk5jfslaf", new Video("dlsdk5jfslaf", "Barcelona vs RealM.mov"));
    hmap.set("3sdfgsd1j333", new Video("3sdfgsd1j333", "Programing lesson#1.avi"));

    console.log("Done! \n");

    return hmap;
  }

  private getSomeVideo(id: string): Video {
    console.log("Downloading video...");

    this.experienceNetworkLatency();
    const video = new Video(id, "Some video title");

    console.log("Done! \n");
    return video;
  }

  popularVideos(): Map<string, Video> {
    this.connectToServer("http://www.youtube.com");
    return this.getRandomVideos();
  }

  getVideo(id: string): Video {
    this.connectToServer("http://www.youtube.com/" + id);
    return this.getSomeVideo(id);
  }
}
