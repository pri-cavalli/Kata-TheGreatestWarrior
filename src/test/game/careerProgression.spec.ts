import { expect } from 'chai';
import 'mocha';
import { CareerProgression } from '../../main/game/carrerProgression';

describe("Career Progression Test", () => {

    it("Given new CareerProgression When getExperience Should return 100", () => {
        const careerProgression = new CareerProgression();
        expect(100).to.be.equals(careerProgression.getExperienceValue());
    });

    it("Given new CareerProgression When getRank Should return 1", () => {
        const careerProgression = new CareerProgression();
        expect(1).to.be.equals(careerProgression.getLevel());
    });

    it("Given new CareerProgression with 270 When getRank Should return 2", () => {
        const careerProgression = new CareerProgression(270);
        expect(2).to.be.equals(careerProgression.getLevel());
    });
})