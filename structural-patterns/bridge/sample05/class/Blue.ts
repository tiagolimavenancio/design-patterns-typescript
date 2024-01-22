import { IColor } from "../interface/IColor";

export class Blue implements IColor {
    log(): string {
        return 'Blue';
    }
}