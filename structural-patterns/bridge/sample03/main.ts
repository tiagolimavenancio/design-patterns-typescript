import { AlertWindow } from "./class/AlertWindow";
import { DialogWindow } from "./class/DialogWindow";
import { Linux } from "./class/Linux";
import { Windows } from "./class/Windows";

function main() {
  let window = new DialogWindow(new Linux());
  window.draw();

  window = new AlertWindow(new Linux());
  window.draw();

  window = new DialogWindow(new Windows());
  window.draw();
}
