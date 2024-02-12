import { min as mathmin,map as mathmap, transpose, max as mathmax, dotMultiply,sum as mathsum} from "mathjs";

let array1 = [[4,5,6],[5,3,7]]

let maximos = transpose(array1)
// let maxVoltaje = maximos.map((col)=>{
    
//     return dotMultiply(array1[0],array1[1])
// })

console.log(mathsum(array1[0]))

// console.log(...maximos[0])