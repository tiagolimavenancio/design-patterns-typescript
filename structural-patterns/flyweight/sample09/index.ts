import { SportsSimulator } from "./class/SportsSimulator";
import { IPosition } from "./interfaces/IPosition";
import { IStats } from "./interfaces/IStats";
import { ITeam } from "./interfaces/ITeam";

(function main() {
  const simulator = new SportsSimulator();

  const forward: IPosition = { name: "Forward", role: "Attacker" };
  const midfielder: IPosition = { name: "Midfielder", role: "Support" };
  const defender: IPosition = { name: "Defender", role: "Defender" };
  const goalkeeper: IPosition = { name: "Goalkeeper", role: "Goalkeeper" };

  const positions = [goalkeeper, defender, midfielder, forward];

  const teams: ITeam[] = [
    { name: "New Team", coach: "Roberto Sedinho" },
    { name: "Furano FC", coach: "Koujiro Hyuuga" },
    { name: "Toho Academy", coach: "Kira Hiroto" },
    { name: "Nankatsu SC", coach: "Tsubasa Ozora" },
    { name: "Otomo FC", coach: "Shingo Aoi" },
    { name: "Hirado FC", coach: "Hajime Taki" },
    { name: "Mamoru United", coach: "Taro Misaki" },
    { name: "Meiwa FC", coach: "Jun Misugi" },
  ];

  const captainTsubasaCharacters: string[] = [
    "Tsubasa Ozora",
    "Koujiro Hyuuga",
    "Genzo Wakabayashi",
    "Taro Misaki",
    "Shingo Aoi",
    "Hikaru Matsuyama",
    "Jun Misugi",
    "Ken Wakashimazu",
    "Kazuo Tachibana",
    "Masao Tachibana",
    "Ryo Ishizaki",
    "Kojiro Hyuga",
    "Teppei Kisugi",
    "Hiroshi Jito",
    "Shun Nitta",
    "Mamoru Izawa",
    "Hanji Urabe",
    "Shingo Takasugi",
    "Mitsuru Sano",
    "Makoto Soda",
  ];

  for (let i = 0; i < 25 * teams.length - 1; i++) {
    const team = teams[i % teams.length];
    const position = positions[i % positions.length];
    const player = captainTsubasaCharacters[i % captainTsubasaCharacters.length];
    const stats: IStats = {
      goals: Math.floor(Math.random() * 20),
      assists: Math.floor(Math.random() * 20),
      passes: Math.floor(Math.random() * 20),
    };

    simulator.addPlayer(player, position, team, stats);
  }

  simulator.displayPlayers();
})();
