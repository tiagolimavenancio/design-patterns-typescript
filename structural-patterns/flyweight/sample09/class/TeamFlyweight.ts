import { IFlyweight } from "../interfaces/IFlyweight";
import { Team } from "../model/Team";

export class TeamFlyweight implements IFlyweight {
  private team: Team;

  constructor(team: Team) {
    this.team = team;
  }

  display(extrinsicState: any): void {
    console.log(`Team: ${this.team.name} (${this.team.coach})`);
  }

  getTeam(): Team {
    return this.team;
  }
}
