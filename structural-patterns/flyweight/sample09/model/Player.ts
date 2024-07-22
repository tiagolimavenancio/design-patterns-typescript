import { PositionFlyweight } from "../class/PositionFlyweight";
import { TeamFlyweight } from "../class/TeamFlyweight";
import { Stats } from "./Stats";

export class Player {
  private name: string;
  private position: PositionFlyweight;
  private team: TeamFlyweight;
  private stats: Stats;

  constructor(name: string, position: PositionFlyweight, team: TeamFlyweight, stats: Stats) {
    this.name = name;
    this.position = position;
    this.team = team;
    this.stats = stats;
  }

  public displayInfo(): void {
    console.log(
      `Player - Name: ${this.name}, Stats: [Goals: ${this.stats.goals}, Assists: ${this.stats.assists}, Matches: ${this.stats.matches}]`
    );
    this.position.display(this.stats);
  }
}
