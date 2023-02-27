import { pratica2 } from "../src/pratica2"

describe("pratica2", () => {
    test("deve retornar true quando n for par", () => {
        const result = pratica2(10)
        const result2 = pratica2(2)

        expect(result).toBe(true)
        expect(result2).toBe(true)
    })

    test("Deve retornar false quando n for impar", () => {
        const result1 = pratica2(5)
        const result2 = pratica2(11)
        expect(result1).toBe(false)
        expect(result2).toBe(false)
    })
})