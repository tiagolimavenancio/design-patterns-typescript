import { MSTeamsAdapter } from "./class/MSTeamsAdapter";
import { MSTeamsClient } from "./class/MSTeamsClient";
import { SlackAdapter } from "./class/SlackAdapter";
import { SlackClient } from "./class/SlackClient";

function main() {
  const slackClient = new SlackClient();
  const slackAdapter = new SlackAdapter(slackClient);

  const msTeamsClient = new MSTeamsClient();
  const msTeamsAdapter = new MSTeamsAdapter(msTeamsClient);

  slackAdapter.sendMessage("general", "alice", "Hello, Alice!");
  msTeamsAdapter.sendMessage("general", "bob", "Hello, Bob!");
}

main();
