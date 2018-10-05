import { expect } from 'chai';
import 'mocha';
import { CareerProgression } from '../../main/game/carrerProgression';

describe("Career Progression Test", () => {

    it("Given new CareerProgression When getExperience Then return 100", () => {
        const careerProgression = new CareerProgression();
        expect(100).to.be.equals(careerProgression.getExperienceValue());
    });

    it("Given new CareerProgression When getLevel Then return 1", () => {
        const careerProgression = new CareerProgression();
        expect(1).to.be.equals(careerProgression.getLevel());
    });

    it("Given new CareerProgression with 42 When getLevel Then return 42", () => {
        const careerProgression = new CareerProgression(42);
        expect(42).to.be.equals(careerProgression.getLevel());
    });
    
    it("Given CareerProgression When validateLevel 0 Then throws 'Invalid level'", () => {
        expect(() => CareerProgression.validateLevel(0)).to.throws("Invalid level");
    });

    it("Given CareerProgression When validateLevel 101 Then throws 'Invalid level'", () => {
        expect(() => CareerProgression.validateLevel(101)).to.throws("Invalid level");
    });
})