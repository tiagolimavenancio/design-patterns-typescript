import { VideoConversionFacade } from "./class/VideoConversionFacade";

(function main() {
  const converter = new VideoConversionFacade();
  const mp4Video = converter.convertVideo("youtubevideo.ogg", "mp4");
})();
