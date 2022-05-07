// GitHub: @AleGV258

const FizzbuzzService = require('../../lib/services/FizzbuzzService')

describe("Unit Tests for FizzbuzzService class", () => {
    test('Create FizzbuzzService object', () => {
        const trick = new FizzbuzzService()
        expect(trick).toEqual({})
    })
})

// npm test test/services/FizzbuzzService.test.js
