// GitHub: @AleGV258
const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");
const FizzbuzzService = require("./lib/services/FizzbuzzService");
const ExplorerFizzbuzzService = require("./lib/services/ExplorerFizzbuzzService");

// Part 1 Read json file ===========================
const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo
// console.log(explorers)

// Part 2: Get the quantity of explorers names in node
const explorersInNode = ExplorerService.filterByMission(explorers, "node");
const explorersInNodeLength = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
// console.log(explorersInNode)
// console.log(explorersInNodeLength)

// Part 4: Get the explorer's usernames in Node
const usernamesInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
// console.log(usernamesInNode)

// Part 5: Get a new list of explorers in node, if the score numbers is divisible by 3, I need a new propery called trick, and the value assigned is FIZZ, if not the value should be the score itself.
// Part 6: Get a new list of explorers in node if the score number is divisible by 5, we need to set a new property called trick and set the value BUZZ, if not this value should be just the score
// Part 7: Get a new list of explorers in Node, if the score number is divisible by 3 AND by 5 we need to set a new property called FIZZBUZZ, if not this value should be the same score value

const explorer1 = {name: "Explorer1", score: 1}
const explorer1Trick = FizzbuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1} 
// console.log(explorer1Trick)

const explorer3 = {name: "Explorer3", score: 3}
const explorer3Trick = FizzbuzzService.applyValidationInExplorer(explorer3) // {name: "Explorer3", score: 3, trick: "FIZZ"}
// console.log(explorer3Trick)

const explorer5 = {name: "Explorer5", score: 5}
const explorer5Trick = FizzbuzzService.applyValidationInExplorer(explorer5) // {name: "Explorer5", score: 5, trick: "BUZZ"}
// console.log(explorer5Trick)

const explorer15 = {name: "Explorer15", score: 15}
const explorer15Trick = FizzbuzzService.applyValidationInExplorer(explorer15) // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
// console.log(explorer15Trick)

// Part 8: Get a list of the explorers in node, if the score is divisible by 5 and 3, set the property trick and the value FIZZBUZZ, if is just divisible by 5 set the property trcik and the value BUZZ, if is just divisible by 3 set the property trick and the value FIZZ, otherwise set the property trick and the score value. TODO

const explorerOne = {name: "ExplorerOne", score: 4, mission: "node"}
const explorerInNodeTrickOne = ExplorerFizzbuzzService.filterByMission_applyValidationInExplorer(explorerOne, "java")
// console.log(explorerInNodeTrickOne)

const explorerTwo = {name: "ExplorerTwo", score: 15, mission: "node"}
const explorerInNodeTrickTwo = ExplorerFizzbuzzService.filterByMission_applyValidationInExplorer(explorerTwo, "node")
// console.log(explorerInNodeTrickTwo)