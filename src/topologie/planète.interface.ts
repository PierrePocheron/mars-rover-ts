import {Point} from "../geometrie/point.ts";

export interface Planète {
    Normaliser(position: Point) : Point;
    SelonAccessibilité<T>(point: Point, actionSiObstacle: () => T, actionSiLibre: () => T): T;
}