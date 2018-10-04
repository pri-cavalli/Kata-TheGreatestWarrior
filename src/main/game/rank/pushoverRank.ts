import { Rank } from "../rank";

export class PushoverRank extends Rank {
    constructor() {
        super();
        this.name = "Pushover";
        this.minimumLevel = 1;
        this.maximumLevel = 9;
    }
}