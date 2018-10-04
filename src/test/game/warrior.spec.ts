import { expect } from 'chai';
import 'mocha';
import { Warrior } from '../../main/game/warrior';

describe("Warrior Test", () => {

    it("Given new Warrior When getExperienceValue Should return 100 ", () => {
        const warrior: Warrior = new Warrior();
        expect(100).to.equal(warrior.getExperienceValue());
    });
})