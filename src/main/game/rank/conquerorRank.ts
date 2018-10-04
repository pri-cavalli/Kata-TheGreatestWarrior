import { Rank } from "../rank";

export class ConquerorRank extends Rank {
    constructor() {
        super();
        this.name = "Conqueror";
        this.minimumLevel = 70;
        this.maximumLevel = 79;
    }
}