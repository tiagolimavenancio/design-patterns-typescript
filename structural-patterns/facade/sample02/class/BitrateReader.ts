import { ICodec } from "../interface/ICodec";
import { VideoFile } from "./VideoFile";

export class BitrateReader {
  public static read(file: VideoFile, codec: ICodec) {
    console.log("BitrateReader: reading file...");
    return file;
  }

  public static convert(buffer: VideoFile, codec: ICodec) {
    console.log("BitrateReader: writing file...");
    return buffer;
  }
}
