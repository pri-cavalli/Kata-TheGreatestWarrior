import { Rank } from "../rank";

export class EliteRank extends Rank {
    constructor() {
        super();
        this.name = "Elite";
        this.minimumLevel = 60;
        this.maximumLevel = 69;
    }
}