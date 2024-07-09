export enum PlaybackMode {
  byName,
  byAuthor,
  byYear,
  byStars,
}

export class MusicMp3 {
  name: string;
  author: string;
  year: string;
  stars: number;

  constructor(name: string, author: string, year: string, stars: number) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.stars = stars;
  }
}
