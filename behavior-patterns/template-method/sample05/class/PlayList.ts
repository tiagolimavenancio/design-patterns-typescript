import { MusicMp3, PlaybackMode } from "../model/MusicMp3";
import { SortByAuthor } from "./SortByAuthor";
import { SortByName } from "./SortByName";
import { SortByStars } from "./SortByStars";
import { SortByYear } from "./SortByYear";
import { SortTemplate } from "./SortTemplate";

export class PlayList {
  protected musics: Array<MusicMp3>;
  protected sort!: SortTemplate;

  constructor(mode: PlaybackMode) {
    this.musics = new Array<MusicMp3>();
    switch (mode) {
      case PlaybackMode.byName:
        this.sort = new SortByName();
        break;
      case PlaybackMode.byYear:
        this.sort = new SortByYear();
        break;
      case PlaybackMode.byAuthor:
        this.sort = new SortByAuthor();
        break;
      case PlaybackMode.byStars:
        this.sort = new SortByStars();
        break;
      default:
        break;
    }
  }

  setPlaybackMode(mode: PlaybackMode) {
    switch (mode) {
      case PlaybackMode.byName:
        this.sort = new SortByName();
        break;
      case PlaybackMode.byYear:
        this.sort = new SortByYear();
        break;
      case PlaybackMode.byAuthor:
        this.sort = new SortByAuthor();
        break;
      case PlaybackMode.byStars:
        this.sort = new SortByStars();
        break;
      default:
        break;
    }
  }

  addMusic(name: string, author: string, year: string, starts: number) {
    this.musics.push(new MusicMp3(name, author, year, starts));
  }

  showList() {
    let newList = new Array<MusicMp3>();
    newList = this.sort.sortMusic(this.musics);

    newList.forEach((music) => {
      console.log(
        `Name: ${music.name}, Author: ${music.author}, Year: ${music.year}, Stars: ${music.stars}`
      );
    });
  }
}
