import { Rank } from "../rank";

export class MasterRank extends Rank {
    constructor() {
        super();
        this.name = "Master";
        this.minimumLevel = 90;
        this.maximumLevel = 99;
    }
}