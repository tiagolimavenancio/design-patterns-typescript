import { ICodec } from "../interface/ICodec";
import { MPEG4CompressionCodec } from "./MPEG4CompressionCodec";
import { OggCompressionCodec } from "./OggCompressionCodec";
import { VideoFile } from "./VideoFile";

export class CodecFactory {
  public static extract(file: VideoFile): ICodec {
    const type = file.getCodecType();

    if (type === "mp4") {
      console.log("CodecFactory: extracting mpeg audio...");
      return new MPEG4CompressionCodec();
    } else {
      console.log("CodecFactory: extracting ogg audio...");
      return new OggCompressionCodec();
    }
  }
}
