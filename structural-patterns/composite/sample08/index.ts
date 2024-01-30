import { Directory } from "./class/Directory";
import { FileType } from "./class/FileType";

(function main() {
  const root = new Directory("usr");
  const homeDir = new Directory("home");

  homeDir.add(new FileType("HowToCode", "pdf"));
  homeDir.add(new FileType("ThingsToCode", "txt"));
  homeDir.add(new FileType("GrandCanyon", "png"));

  root.add(homeDir);

  const projectDir = new Directory("CodeProjects");
  const devMakingProj = new Directory("DevMaking");

  devMakingProj.add(new FileType("index", "html"));

  const ticTacToeProj = new Directory("AI_Tic-Tac-Toe");
  ticTacToeProj.add(new FileType("app", "py"));

  projectDir.add(devMakingProj);
  projectDir.add(ticTacToeProj);

  root.add(projectDir);

  root.ls();
})();
