import { PlayList } from "./class/PlayList";
import { PlaybackMode } from "./model/MusicMp3";

(function main() {
  const playlist = new PlayList(PlaybackMode.byName);

  playlist.addMusic("Everlong", "Foo Fighters", "1997", 5);
  playlist.addMusic("Song 2", "Blur", "1997", 4);
  playlist.addMusic("American Jesus", "Bad Religion", "1993", 3);
  playlist.addMusic("No Cigar", "Milencollin", "2001", 2);
  playlist.addMusic("Ten", "Pearl Jam", "1991", 1);

  console.log("=== List by Music Name ===");
  playlist.showList();

  console.log("\n=== List by Author ===");
  playlist.setPlaybackMode(PlaybackMode.byAuthor);
  playlist.showList();

  console.log("\n=== List by Year ===");
  playlist.setPlaybackMode(PlaybackMode.byYear);
  playlist.showList();

  console.log("\n=== List by Stars ===");
  playlist.setPlaybackMode(PlaybackMode.byStars);
  playlist.showList();
})();
