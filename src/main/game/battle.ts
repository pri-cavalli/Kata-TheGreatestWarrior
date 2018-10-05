import { Warrior } from "./warrior";
import { CareerProgression } from "./carrerProgression";
import { throws } from "assert";

export class Battle {
    private warrior: Warrior;
    private enemyWarrior: Warrior;

    private readonly DEFEATED_REPORT = "You've been defeated";
    private readonly EASY_FIGHT_REPORT = "Easy fight";
    private readonly GOOD_FIGHT_REPORT = "A good fight";
    private readonly INTENSE_FIGHT_REPORT = "An intense fight";

    constructor(warrior: Warrior, enemyLevel: number) {
        CareerProgression.validateLevel(enemyLevel);

        this.warrior = warrior;
        this.enemyWarrior = new Warrior(enemyLevel);
    }

    public getReport(): string {
        return "A good fight";
    }

    public getEarnedExperience(): number {
        const levelDelta: number = this.enemyWarrior.getLevel() - this.warrior.getLevel();

        if(this.isEnemyLevelEqual(levelDelta)) {
            return 10;
        }
        else if(this.isEnemyLevelLower(levelDelta)) {
            return this.calculateEarnedExperienceAgainstLowerLevel(levelDelta * -1);
        }
        else if(this.isEnemyLevelHigher(levelDelta) && this.isEnemyDefeated(levelDelta)) {
            return this.calculateEarnedExperienceAgainstHigherLevel(levelDelta);
        }
        return 0;
    }

    private isEnemyLevelEqual(levelDelta: number): boolean {
        return levelDelta === 0;
    }

    private isEnemyLevelLower(levelDelta: number): boolean {
        return levelDelta < 0;
    }

    private isEnemyLevelHigher(levelDelta: number): boolean {
        return levelDelta > 0;
    }

    private isEnemyDefeated(levelDelta: number): boolean {
        return !this.doesEnemyWin(levelDelta);
    }

    private doesEnemyWin(levelDelta: number): boolean {
        return levelDelta >= 5 
            && this.warrior.getRank().getName() !== this.enemyWarrior.getRank().getName();
    }

    private calculateEarnedExperienceAgainstLowerLevel(levelDelta: number): number {
        if(levelDelta === 1) {
            return 5;
        }
        else if(levelDelta === 2) {
            return 0;
        }
    }

    private calculateEarnedExperienceAgainstHigherLevel(levelDelta: number): number {
        return levelDelta * levelDelta * 20;
    }
}

