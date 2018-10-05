import { expect } from 'chai';
import 'mocha';
import { Warrior } from '../../main/game/warrior';
import { Battle } from '../../main/game/battle';

describe("Battle Test", () => {

    it("Given Battle When warriors with same level Then report 'A good fight'", () => {
        const warrior: Warrior = new Warrior();
        const battle: Battle = new Battle(warrior, 1);

        expect("A good fight").to.equal(battle.getReport());
    });

    it("Given Battle When enemy warrior level is 0 Then throws 'Invalid level'", () => {
        const warrior: Warrior = new Warrior();
        expect(() => new Battle(warrior, 0)).to.throws("Invalid level");
    });

    it("Given Battle When enemy warrior level is 101 Then throws 'Invalid level'", () => {
        const warrior: Warrior = new Warrior();
        expect(() => new Battle(warrior, 0)).to.throws("Invalid level");
    });
})