import { expect } from 'chai';
import 'mocha';
import { RankFactory } from '../../main/game/rankFactory';

describe("Rank Factory Test", () => {

    it("Given getRankByLevel 1 When getName Then return Pushover", () => {
        expect("Pushover").to.be.equals(RankFactory.getRankByLevel(1).getName());
    });

    it("Given getRankByLevel 10 When getName Then return Novice", () => {
        expect("Novice").to.be.equals(RankFactory.getRankByLevel(10).getName());
    });

    it("Given getRankByLevel 20 When getName Then return Fighter", () => {
        expect("Fighter").to.be.equals(RankFactory.getRankByLevel(20).getName());
    });

    it("Given getRankByLevel 30 When getName Then return Warrior", () => {
        expect("Warrior").to.be.equals(RankFactory.getRankByLevel(30).getName());
    });

    it("Given getRankByLevel 40 When getName Then return Veteran", () => {
        expect("Veteran").to.be.equals(RankFactory.getRankByLevel(40).getName());
    });

    it("Given getRankByLevel 50 When getName Then return Sage", () => {
        expect("Sage").to.be.equals(RankFactory.getRankByLevel(50).getName());
    });

    it("Given getRankByLevel 60 When getName Then return Elite", () => {
        expect("Elite").to.be.equals(RankFactory.getRankByLevel(60).getName());
    });

    it("Given getRankByLevel 70 When getName Then return Conqueror", () => {
        expect("Conqueror").to.be.equals(RankFactory.getRankByLevel(70).getName());
    });

    it("Given getRankByLevel 80 When getName Then return Champion", () => {
        expect("Champion").to.be.equals(RankFactory.getRankByLevel(80).getName());
    });

    it("Given getRankByLevel 90 When getName Then return Master", () => {
        expect("Master").to.be.equals(RankFactory.getRankByLevel(90).getName());
    });

    it("Given getRankByLevel 100 When getName Then return Greatest", () => {
        expect("Greatest").to.be.equals(RankFactory.getRankByLevel(100).getName());
    });
})