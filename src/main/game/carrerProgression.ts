import { Experience } from "./experience";
import { Rank } from "./rank";
import { RankFactory } from "./rankFactory";

export class CareerProgression {
    private experience: Experience;

    private readonly EXPERIENCE_PER_LEVEL = 100;

    constructor(experienceValue?: number) {
        this.experience = new Experience(experienceValue);
    }

    public getExperienceValue(): number {
        return this.experience.getValue();
    }
    
    public getLevel(): number {
        return Math.floor(this.getExperienceValue() / this.EXPERIENCE_PER_LEVEL);
    }

    public getRank(): Rank {
        return RankFactory.getRankByLevel(this.getLevel());
    }
}