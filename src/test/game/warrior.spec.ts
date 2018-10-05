import { expect } from 'chai';
import 'mocha';
import { Warrior } from '../../main/game/warrior';

describe("Warrior Test", () => {

    it("Given new Warrior When getExperience Then return 100 ", () => {
        const warrior: Warrior = new Warrior();
        expect(100).to.equal(warrior.getExperience());
    });

    it("Given warrior When battle against same level Then receive 10 exp points", () => {
        const warrior: Warrior = new Warrior();
        const experienceBeforeBattle = warrior.getExperience();
        warrior.battle(1);
        const experienceAfterBattle = warrior.getExperience();

        expect(10).to.equal(experienceAfterBattle - experienceBeforeBattle);
    });

    it("Given warrior When battle against 1 level lesser Then receive 5 exp points", () => {
        const warrior: Warrior = new Warrior(99);
        const experienceBeforeBattle = warrior.getExperience();
        warrior.battle(98);
        const experienceAfterBattle = warrior.getExperience();

        expect(5).to.equal(experienceAfterBattle - experienceBeforeBattle);
    });

    it("Given warrior When battle against 2 level lesser Then receive 0 exp points", () => {
        const warrior: Warrior = new Warrior(99);
        const experienceBeforeBattle = warrior.getExperience();
        warrior.battle(97);
        const experienceAfterBattle = warrior.getExperience();

        expect(0).to.equal(experienceAfterBattle - experienceBeforeBattle);
    });

    it("Given warrior When battle against 1 level higher Then receive 20 exp points", () => {
        const warrior: Warrior = new Warrior(42);
        const experienceBeforeBattle = warrior.getExperience();
        warrior.battle(43);
        const experienceAfterBattle = warrior.getExperience();

        expect(20).to.equal(experienceAfterBattle - experienceBeforeBattle);
    });

    it("Given warrior When battle against 4 level higher Then receive 20 exp points", () => {
        const warrior: Warrior = new Warrior(75);
        const experienceBeforeBattle = warrior.getExperience();
        warrior.battle(79);
        const experienceAfterBattle = warrior.getExperience();

        expect(320).to.equal(experienceAfterBattle - experienceBeforeBattle);
    });

    it("Given warrior When battle against 6 level higher and same rank Then receive 20 exp points", () => {
        const warrior: Warrior = new Warrior(63);
        const experienceBeforeBattle = warrior.getExperience();
        warrior.battle(69);
        const experienceAfterBattle = warrior.getExperience();

        expect(720).to.equal(experienceAfterBattle - experienceBeforeBattle);
    });

    it("Given warrior When battle against 5 level higher and diferent rank Then receive 0 exp points", () => {
        const warrior: Warrior = new Warrior(25);
        const experienceBeforeBattle = warrior.getExperience();
        warrior.battle(30);
        const experienceAfterBattle = warrior.getExperience();

        expect(0).to.equal(experienceAfterBattle - experienceBeforeBattle);
    });
})