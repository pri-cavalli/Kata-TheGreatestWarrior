import { Experience } from "./experience";
import { Rank } from "./rank";
import { RankFactory } from "./rankFactory";

export class CareerProgression {
    private experience: Experience;

    private readonly EXPERIENCE_PER_LEVEL = 100;
    private static readonly MINIMUM_LEVEL = 1;
    private static readonly MAXIMUM_LEVEL = 100;

    constructor(level?: number) {
        const experienceValue: any = level * this.EXPERIENCE_PER_LEVEL || undefined;
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

    public increaseExperience(experienceEarned: number): void {
        this.experience.addToValue(experienceEarned);
    }

    public static validateLevel(level: number): void {
        if(level < this.MINIMUM_LEVEL || level > this.MAXIMUM_LEVEL) {
            throw new Error("Invalid level");
        }
    }

}