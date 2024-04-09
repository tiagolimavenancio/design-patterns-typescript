import { ThirdPartyYouTubeClass } from "./class/ThirdPartyYouTubeClass";
import { YouTubeCacheProxy } from "./class/YouTubeCacheProxy";
import { YouTubeDownloader } from "./class/YouTubeDownloader";

function test(downloader: YouTubeDownloader) {
  const startTime = Date.now();

  // User behavior in our app:
  downloader.renderPopularVideos();
  downloader.renderVideoPage("catzzzzzzzzz");
  downloader.renderPopularVideos();
  downloader.renderVideoPage("dancesvideoo");

  // Users might visit the same page quite often.
  downloader.renderVideoPage("catzzzzzzzzz");
  downloader.renderVideoPage("someothervid");

  const estimatedTime = Date.now() - startTime;
  console.log("Time elapsed: " + estimatedTime + "ms");

  return estimatedTime;
}

(function main() {
  const naiveDownloader = new YouTubeDownloader(new ThirdPartyYouTubeClass());
  const smartDownloader = new YouTubeDownloader(new YouTubeCacheProxy());

  const naive = test(naiveDownloader);
  const smart = test(smartDownloader);

  console.log("Time saved by caching proxy: " + (naive - smart) + "ms");
})();
