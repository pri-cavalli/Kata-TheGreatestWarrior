import { CareerProgression } from "./carrerProgression";
import { Rank } from "./rank";

export class Warrior {
    private careerProgression: CareerProgression;

    constructor(level?: number) {
        this.careerProgression = new CareerProgression(level);
    }
    
    public getExperience(): number {
        return this.careerProgression.getExperienceValue();
    }
    
    public getLevel(): number {
        return this.careerProgression.getLevel();
    }
    
    public getRank(): Rank {
        return this.careerProgression.getRank();
    }

    public toBattle(enemyLevel: number): void {
        const levelDelta: number = enemyLevel - this.getLevel();
        if(this.isEnemyLevelEqual(levelDelta)) {
            this.careerProgression.increaseExperience(10);
        }
        else if(this.isEnemyLevelLesser(levelDelta)) {
            this.increaseExperienceAgainstLesserLevel(levelDelta * -1);
        }
        else if(this.isEnemyLevelHigher(enemyLevel)) {
            this.increaseExperienceAgainstHigherLevel(levelDelta);
        }
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

    private increaseExperienceAgainstLesserLevel(levelDelta: number): void {
        if(levelDelta === 1) {
            this.careerProgression.increaseExperience(5);
        }
        else if(levelDelta === 2) {
            this.careerProgression.increaseExperience(0);
        }
    }

    private increaseExperienceAgainstHigherLevel(levelDelta: number): void {
        const experienceEarned: number = levelDelta * levelDelta * 20;
        this.careerProgression.increaseExperience(experienceEarned);
    }
}

