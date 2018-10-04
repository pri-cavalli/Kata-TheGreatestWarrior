import { Rank } from "../rank";

export class NoviceRank extends Rank {
    constructor() {
        super();
        this.name = "Novice";
        this.minimumLevel = 10;
        this.maximumLevel = 19;
    }
}