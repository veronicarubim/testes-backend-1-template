import { fixacao } from "../src/fixacao"

describe("fixacao", () => {
    test("deve retornar todas as letras da string inserida", () => {
        const result = fixacao("oi")
    

        /* expect(result).toEqual(["v",'e','r','o','n','i','c','a'])
        expect(result2).toEqual(['j','a','s','k','i','e','r']) */
        expect(result).toEqual(['o','i'])
 
    })

})