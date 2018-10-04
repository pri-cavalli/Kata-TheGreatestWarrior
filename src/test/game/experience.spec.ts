import { expect } from 'chai';
import 'mocha';
import { Experience } from '../../main/game/Experience';

describe("Experience Test", () => {

    it("Give new Warrior When getValue Should experience be 100 ", () => {
        const experience: Experience = new Experience();
        expect(100).to.equal(experience.getValue());
    });

    it("Give new Warrior with 200 When getValue Should experience be 200", () => {
        const experience: Experience = new Experience(200);
        expect(200).to.equal(experience.getValue());
    });

    it("Give new Warrior with 42 When getValue value 42 Should experience be 100", () => {
        const experience: Experience = new Experience(42);
        expect(100).to.equal(experience.getValue());
    });

    it("Give new Warrior with 10042 When getValue value 1042 Should experience be 10000", () => {
        const experience: Experience = new Experience(10042);
        expect(10000).to.equal(experience.getValue());
    });
})