import { AdapterXboxToPlaystation } from "./class/AdapterXboxToPlaystation";
import { PlayStationSensor } from "./class/PlayStationSensor";
import { XboxJoystick } from "./class/XboxJoystick";

const adaptee: PlayStationSensor = new PlayStationSensor();
const adapter: AdapterXboxToPlaystation = new AdapterXboxToPlaystation(adaptee);
const target: XboxJoystick = new XboxJoystick(adapter);

target.connect();
target.yPressed();
target.xPressed();
target.aPressed();
target.bPressed();
