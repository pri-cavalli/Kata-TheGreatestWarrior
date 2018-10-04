import { Rank } from "../rank";

export class ChampionRank extends Rank {
    constructor() {
        super();
        this.name = "Champion";
        this.minimumLevel = 80;
        this.maximumLevel = 89;
    }
}