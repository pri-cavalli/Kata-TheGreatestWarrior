import { Rank } from "../rank";

export class SageRank extends Rank {
    constructor() {
        super();
        this.name = "Sage";
        this.minimumLevel = 50;
        this.maximumLevel = 59;
    }
}