import {CommandeRover} from "./CommandeRover.ts";
import {RoverInterface} from "../rover.interface.ts";

export class CommandeVide implements CommandeRover{
    ExécuterSur(rover: RoverInterface): RoverInterface {
        return rover;
    }

}