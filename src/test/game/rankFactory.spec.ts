import { expect } from 'chai';
import 'mocha';
import { RankFactory } from '../../main/game/rankFactory';

describe("Rank Factory Test", () => {

    it("Given getRankByLevel 1 When getName Should return Pushover", () => {
        expect("Pushover").to.be.equals(RankFactory.getRankByLevel(1).getName());
    });

    it("Given getRankByLevel 10 When getName Should return Novice", () => {
        expect("Novice").to.be.equals(RankFactory.getRankByLevel(10).getName());
    });

    it("Given getRankByLevel 20 When getName Should return Fighter", () => {
        expect("Fighter").to.be.equals(RankFactory.getRankByLevel(20).getName());
    });

    it("Given getRankByLevel 30 When getName Should return Warrior", () => {
        expect("Warrior").to.be.equals(RankFactory.getRankByLevel(30).getName());
    });

    it("Given getRankByLevel 40 When getName Should return Veteran", () => {
        expect("Veteran").to.be.equals(RankFactory.getRankByLevel(40).getName());
    });

    it("Given getRankByLevel 50 When getName Should return Sage", () => {
        expect("Sage").to.be.equals(RankFactory.getRankByLevel(50).getName());
    });

    it("Given getRankByLevel 60 When getName Should return Elite", () => {
        expect("Elite").to.be.equals(RankFactory.getRankByLevel(60).getName());
    });

    it("Given getRankByLevel 70 When getName Should return Conqueror", () => {
        expect("Conqueror").to.be.equals(RankFactory.getRankByLevel(70).getName());
    });

    it("Given getRankByLevel 80 When getName Should return Champion", () => {
        expect("Champion").to.be.equals(RankFactory.getRankByLevel(80).getName());
    });

    it("Given getRankByLevel 90 When getName Should return Master", () => {
        expect("Master").to.be.equals(RankFactory.getRankByLevel(90).getName());
    });

    it("Given getRankByLevel 100 When getName Should return Greatest", () => {
        expect("Greatest").to.be.equals(RankFactory.getRankByLevel(100).getName());
    });
})