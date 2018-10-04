import { CareerProgression } from "./carrerProgression";

export class Warrior {
    private careerProgression: CareerProgression;

    constructor(experience?: number) {
        this.careerProgression = new CareerProgression(experience);
    }
    
    public getExperienceValue(): number {
        return this.careerProgression.getExperienceValue();
    }
}