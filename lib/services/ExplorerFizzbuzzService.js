// GitHub: @AleGV258

class ExplorerFizzbuzzService {
    constructor (){}
    
    static filterByMission_applyValidationInExplorer(explorers, mission){
        if(explorers.mission == mission){
            if(explorers.score%5 === 0 && explorers.score%3 === 0){
                explorers.trick = "FIZZBUZZ";
                return explorers;
            }else{
                if(explorers.score%3 === 0){
                    explorers.trick = "FIZZ";
                    return explorers;
                }else{
                    if(explorers.score%5 === 0){
                        explorers.trick = "BUZZ";
                        return explorers;
                    }else{
                        explorers.trick = explorers.score;
                        return explorers;
                    }
                }
            }
        }
    }
}

module.exports = ExplorerFizzbuzzService;