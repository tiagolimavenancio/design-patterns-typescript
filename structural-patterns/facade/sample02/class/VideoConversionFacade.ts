import { VideoFile } from "./VideoFile";
import { CodecFactory } from "./CodecFactory";
import { BitrateReader } from "./BitrateReader";

import { OggCompressionCodec } from "./OggCompressionCodec";
import { MPEG4CompressionCodec } from "./MPEG4CompressionCodec";
import { ICodec } from "../interface/ICodec";
import { AudioMixer } from "./AudioMixer";

export class VideoConversionFacade {
  public convertVideo(fileName: string, format: string): File {
    console.log("VideoConversionFacade: conversion started.");

    const file: VideoFile = new VideoFile(fileName);
    const sourceCodec: ICodec = CodecFactory.extract(file);
    let destinationCodec: ICodec;

    if (format === "mp4") {
      destinationCodec = new MPEG4CompressionCodec();
    } else {
      destinationCodec = new OggCompressionCodec();
    }

    const buffer = BitrateReader.read(file, sourceCodec);
    const intermediateResult = BitrateReader.convert(buffer, destinationCodec);

    const result: File = new AudioMixer().fix(intermediateResult);

    console.log('"VideoConversionFacade: conversion completed."');
    return result;
  }
}
