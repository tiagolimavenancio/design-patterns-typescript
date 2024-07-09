import { MusicMp3 } from "../model/MusicMp3";

export abstract class SortTemplate {
  public sortMusic(list: Array<MusicMp3>): Array<MusicMp3> {
    const newList = new Array<MusicMp3>();

    for (const m of list) {
      newList.push(m);
    }

    for (let i = 0; i < newList.length; i++) {
      for (let j = i; j < newList.length; j++) {
        if (!this.isFirst(newList[i], newList[j])) {
          const temp = newList[j];
          newList[j] = newList[i];
          newList[i] = temp;
        }
      }
    }

    return newList;
  }

  abstract isFirst(music1: MusicMp3, music2: MusicMp3): boolean;
}
