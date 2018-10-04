import { Rank } from "../rank";

export class WarriorRank extends Rank {
    constructor() {
        super();
        this.name = "Warrior";
        this.minimumLevel = 30;
        this.maximumLevel = 39;
    }
}