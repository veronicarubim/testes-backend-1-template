import {pratica3} from "../src/pratica3"

describe("pratica3", () => {
    test("Deve receber dois numeros e retorar um objeto contendo soma e mult, guardando respectivamente a soma e a multiplicação dos numeros recebidos", () => {
        const result = pratica3(3, 9)
        expect(result.soma).toBe(12)
        expect(result.mult).toBe(27)
    })
})