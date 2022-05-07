// GitHub: @AleGV258

const ExplorerService = require('../../lib/services/ExplorerService')

describe("Unit Tests for ExplorerService class", () => {
    test('Create ExplorerService object', () => {
        const explorer = new ExplorerService()
        expect(explorer).toEqual({})
    })
})

// npm test test/services/ExplorerService.test.js



