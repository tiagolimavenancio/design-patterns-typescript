import { FlyweightFactory } from "./FlyweightFactory";
import { Team } from "../model/Team";
import { TeamFlyweight } from "../class/TeamFlyweight";

export class TeamFlyweightFactory extends FlyweightFactory<Team> {
  protected flyweights: Map<string, TeamFlyweight> = new Map();

  public getFlyweight(team: Team): TeamFlyweight {
    const key = `${team.name}_coach_${team.coach}`;

    if (this.flyweights.has(key)) {
      console.log(`ConcreteFlyweightFactory: Reusing existing flyweight for Team = ${key}`);
      return this.flyweights.get(key)!;
    }

    this.flyweights.set(key, new TeamFlyweight(team));
    console.log(`TeamFlyweightFactory: Created new flyweight for Team = ${key}`);
    return this.flyweights.get(key)!;
  }
}
