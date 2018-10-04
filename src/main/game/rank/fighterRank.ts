import { Rank } from "../rank";

export class FighterRank extends Rank {
    constructor() {
        super();
        this.name = "Fighter";
        this.minimumLevel = 20;
        this.maximumLevel = 29;
    }
}