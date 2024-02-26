import { VideoFile } from "./VideoFile";

export class AudioMixer {
  public fix(result: VideoFile): File {
    console.log("AudioMixer: fixing audio...");
    return new File([JSON.stringify(result)], "tmp");
  }
}
