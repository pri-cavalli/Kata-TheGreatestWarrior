import { Warrior } from "./warrior";

export class Battle {
    private warrior: Warrior;
    private enemyWarrior: Warrior;

    constructor(warrior: Warrior, levelEnemy: number) {
        this.warrior = warrior;
        this.enemyWarrior = new Warrior(levelEnemy);
    }

    public getEarnedExperience(): number {
        const levelDelta: number = this.enemyWarrior.getLevel() - this.warrior.getLevel();

        if(this.isEnemyLevelEqual(levelDelta)) {
            return 10;
        }
        else if(this.isEnemyLevelLesser(levelDelta)) {
            return this.calculateEarnedExperienceAgainstLesserLevel(levelDelta * -1);
        }
        else if(this.isEnemyLevelHigher(levelDelta) && this.isEnemyDefeated(levelDelta)) {
            return this.calculateEarnedExperienceAgainstHigherLevel(levelDelta);
        }
        return 0;
    }

    private isEnemyLevelEqual(levelDelta: number): boolean {
        return levelDelta === 0;
    }

    private isEnemyLevelLesser(levelDelta: number): boolean {
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

    private calculateEarnedExperienceAgainstLesserLevel(levelDelta: number): number {
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

