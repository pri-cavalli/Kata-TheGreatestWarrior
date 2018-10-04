import { Rank } from "../rank";

export class GreatestRank extends Rank {
    constructor() {
        super();
        this.name = "Greatest";
        this.minimumLevel = 100;
        this.maximumLevel = 100;
    }
}