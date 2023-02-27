interface Pratica3 {
    soma: number,
    mult: number
}

export const pratica3 = (x: number, y: number): Pratica3 => {
   
    if (
        typeof x !== "number"
        || typeof y !== "number"
    ) {
        throw new Error("argumentos invalidos")
    }
    
    return {
        soma: x + y,
        mult: x * y
    }
       
    
}