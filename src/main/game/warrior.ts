import { CareerProgression } from "./carrerProgression";
import { Rank } from "./rank";
import { Battle } from "./battle";

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

    public battle(enemyLevel: number): void {
        const battle = new Battle(this, enemyLevel);
        const earnedExperience: number = battle.getEarnedExperience();
        this.careerProgression.increaseExperience(earnedExperience);
    }
}

