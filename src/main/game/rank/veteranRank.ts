import { Rank } from "../rank";

export class VeteranRank extends Rank {
    constructor() {
        super();
        this.name = "Veteran";
        this.minimumLevel = 40;
        this.maximumLevel = 49;
    }
}