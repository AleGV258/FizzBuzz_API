// GitHub: @AleGV258

const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Unit Tests for FizzbuzzService class", () => {
    const explorer1 = {name: "Explorer1", score: 1};
    const explorer3 = {name: "Explorer3", score: 3};
    const explorer5 = {name: "Explorer5", score: 5};
    const explorer15 = {name: "Explorer15", score: 15};

    test("Create FizzbuzzService object", () => {
        const fizzbuzz = new FizzbuzzService();
        expect(fizzbuzz).toEqual({});
    });

    test("FizzbuzzService Trick", () => {
        const Explorer1 = FizzbuzzService.applyValidationInExplorer(explorer1);
        const Explorer3 = FizzbuzzService.applyValidationInExplorer(explorer3);
        const Explorer5 = FizzbuzzService.applyValidationInExplorer(explorer5);
        const Explorer15 = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(Explorer1.trick).toBe(1);
        expect(Explorer3.trick).toBe("FIZZ");
        expect(Explorer5.trick).toBe("BUZZ");
        expect(Explorer15.trick).toBe("FIZZBUZZ");
    });
    
});

// npm test test/services/FizzbuzzService.test.js
