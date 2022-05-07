// GitHub: @AleGV258

const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");
const Reader = require("../utils/Reader");

class ExplorerController{
    constructor (){}

    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        return explorersByMission;
    }
    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersUsername = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return explorersUsername;
    }
    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersLength = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return explorersLength;
    }
    static getExplorersFizzbuzz(score){
        const fizzbuzz = FizzbuzzService.applyValidationInNumber(score);
        return fizzbuzz;
    }
}

module.exports = ExplorerController;
