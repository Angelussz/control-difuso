import { min as mathmin,map as mathmap, transpose, max as mathmax, dotMultiply,sum as mathsum} from "mathjs";
import {
  MuySecoAmbiente,
  muyHumedoAmbiente,
  NormalAmbiente,
  humedadAmbiental,
} from "./conjuntosDifusos/conjuntoHumedadAmbiente";
import {
  tempBaja,
  tempAdecuada,
  tempAlta,
  temperatura,
} from "./conjuntosDifusos/conjuntoTemperatura";
import {
  humSueloSeco,
  humSuelohumedo,
  humSueloMuyHum,
  humedadSuelo,
} from "./conjuntosDifusos/conjuntoHumedadDelSuelo";
import {
  riegoApagado,
  riegoPrendido,
  riegoGoteo,
  riego,
} from "./conjuntosDifusos/conjuntoVoltajeSalida";
/**
 * HA:humedad del ambiente -----------  1.Muy seco 2. Muy humedo 3. Normal
 * TA: temperatura del ambiente -------------- 1.Frio 2.Adecuado 3. caliente
 * HS: humedad del suelo ---------------- 1. Seco 2. Humedo 3. Muy Humedo
 * TR: tiempo riego --------------------- 1.Aoagadi 2.Regado 3. Goteo
 */

// const arreglo = [1,2,3,5];
// const minimo = 3;
const reglas = [
  [1, 1, 1, 2],
  [2, 1, 1, 2],
  [3, 1, 1, 2],
  [1, 2, 1, 2],
  [2, 2, 1, 2],
  [3, 2, 1, 2],
  [1, 3, 1, 2],
  [2, 3, 1, 2],
  [3, 3, 1, 2],
  [1, 1, 2, 3],
  [2, 1, 2, 1],
  [3, 1, 2, 1],
  [1, 2, 2, 3],
  [2, 2, 2, 1],
  [1, 3, 2, 3],
  [2, 3, 2, 3],
  [3, 3, 2, 1],
  [1, 1, 3, 1],
  [2, 1, 3, 1],
  [3, 1, 3, 1],
  [1, 2, 3, 1],
  [2, 2, 3, 1],
  [3, 2, 3, 1],
  [1, 3, 3, 1],
  [2, 3, 3, 1],
  [3, 3, 3, 1],
  [3, 2, 2, 1],
];

const funcionesHAmbiente = [MuySecoAmbiente, muyHumedoAmbiente, NormalAmbiente];
const funcionesTAmbiente = [tempBaja, tempAdecuada, tempAlta];
const funcionesHSuelo = [humSueloSeco, humSuelohumedo, humSueloMuyHum];
const funcionesVoltaje = [riegoApagado,riegoPrendido,riegoGoteo];

const fusificar = (humedad, temperatura, suelo) => {
    let minAmbiente = 0;
    let minTemperatura = 0;
    let minSuelo = 0;
    let minimoInputs = 0;
    let minimoReglas = [];
    let maxVoltaje = [];
    // Aplicacion reglas (minimos)
    for (const regla of reglas) {
        minAmbiente = funcionesHAmbiente[regla[0]-1][humedad];
        minTemperatura = funcionesTAmbiente[regla[1]-1][temperatura];
        minSuelo = funcionesHSuelo[regla[2]-1][suelo];
        let grupoVoltajemin = funcionesVoltaje[regla[3]-1]
        minimoInputs = Math.min(minAmbiente, minTemperatura, minSuelo);
        let minimoCadaRegla = mathmap(grupoVoltajemin,(el)=>{
            return mathmin(minimoInputs,el)
        })
        minimoReglas.push(minimoCadaRegla)
    }
    let maximos = transpose(minimoReglas);
    maxVoltaje = maximos.map((col)=>{
        return mathmax(...col)
    })
  return maxVoltaje;
};

const desfusificarCentroide = (conjuntoFusificado)=>{
  const productos = dotMultiply(conjuntoFusificado,riego);
  const sumprodfus = mathsum(productos);
  const sumfusificado = mathsum(conjuntoFusificado);
  return sumprodfus/sumfusificado

}

export const entradaFusificar = (
  entradaHumedad,
  entradaTemperatura,
  entradaSuelo
) => {
  let indexHumedad = humedadAmbiental.indexOf(entradaHumedad);
  let indexTemperatura = temperatura.indexOf(entradaTemperatura);
  let indexSuelo = humedadSuelo.indexOf(entradaSuelo);
  let conjuntoDifuso = fusificar(indexHumedad, indexTemperatura, indexSuelo);
  let voltajeSalida = desfusificarCentroide(conjuntoDifuso);
  voltajeSalida = isNaN(voltajeSalida)?130:voltajeSalida;
  return {voltajeSalida,conjuntoDifuso};
};

// [Rules]

// HA-MS TA-F HS-S: TR-R
// HA-MH TA-F HS-S: TR-R
// HA-N

// 1 1 1
// 2 1 1
// 3 1 1
// 1 2 1
// 2 2 1
// 3 2 1
// 1 3 1
// 2 3 1
// 3 3 1
// 1 1 2
// 2 1 2
// 3 1 2
// 1 2 2
// 2 2 2
// 1 3 2
// 2 3 2
// 3 3 2
// 1 1 3
// 2 1 3
// 3 1 3
// 1 2 3
// 2 2 3
// 3 2 3
// 1 3 3
// 2 3 3
// 3 3 3
// 3 2 2
