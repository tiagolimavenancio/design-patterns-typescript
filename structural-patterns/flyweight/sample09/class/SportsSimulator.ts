import { Player } from "../model/Player";
import { PositionFlyweightFactory } from "../factory/PositionFlyweightFactory";
import { TeamFlyweightFactory } from "../factory/TeamFlyweightFactory";
import { IStats } from "../interfaces/IStats";
import { IPosition } from "../interfaces/IPosition";
import { ITeam } from "../interfaces/ITeam";
import { Stats } from "../model/Stats";

export class SportsSimulator {
  private players: Player[] = [];
  private positionFactory: PositionFlyweightFactory = new PositionFlyweightFactory();
  private teamFactory: TeamFlyweightFactory = new TeamFlyweightFactory();

  public addPlayer(name: string, position: IPosition, team: ITeam, stats: IStats): void {
    const positionFlyweight = this.positionFactory.getFlyweight(position);
    const teamFlyweight = this.teamFactory.getFlyweight(team);
    const statsPlayer = new Stats(stats.goals, stats.assists, stats.passes);
    const player = new Player(name, positionFlyweight, teamFlyweight, statsPlayer);

    this.players.push(player);
  }

  public displayPlayers(): void {
    this.players.forEach((player) => player.displayInfo());
  }
}
