import { PushoverRank } from "./rank/pushoverRank";
import { Rank } from "./rank";
import { NoviceRank } from "./rank/noviceRank";
import { FighterRank } from "./rank/fighterRank";
import { WarriorRank } from "./rank/warriorRank";
import { VeteranRank } from "./rank/veteranRank";
import { SageRank } from "./rank/sageRank";
import { EliteRank } from "./rank/EliteRank";
import { ConquerorRank } from "./rank/ConquerorRank";
import { ChampionRank } from "./rank/ChampionRank";
import { MasterRank } from "./rank/MasterRank";
import { GreatestRank } from "./rank/GreatestRank";

export class RankFactory {

    private static readonly ranks: Array<Rank> = [
        new PushoverRank(),
        new NoviceRank(),
        new FighterRank(),
        new WarriorRank(),
        new VeteranRank(),
        new SageRank(),
        new EliteRank(),
        new ConquerorRank(),
        new ChampionRank(),
        new MasterRank(),
        new GreatestRank()
    ];

    public static getRankByLevel(level: number): Rank {
        const ranksFilteredByLevel: Array<Rank> =
            this.ranks.filter(rank => rank.isLevelInRange(level));
        
        this.validateRanksFilteredLength(ranksFilteredByLevel.length, level);

        return ranksFilteredByLevel[0];
    }

    private static validateRanksFilteredLength(ranksFilteredLength: number, level: number): void {        
        if (this.isLevelSupportedBySystem(ranksFilteredLength)) {
            throw new Error("Level " + level + " isn't support in this game.");
        }
        if (this.isLevelIncludedInMoreThanOneRank(ranksFilteredLength)) {
            throw new Error("Error: " + ranksFilteredLength + " ranks include the level " + level + ".");
        }
    }

    private static isLevelSupportedBySystem(ranksFilteredLength: number): boolean {
        return ranksFilteredLength === 0;
    }

    private static isLevelIncludedInMoreThanOneRank(ranksFilteredLength: number): boolean {
        return ranksFilteredLength > 1;
    }
}