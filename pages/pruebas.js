import { entradaFusificar } from "../reglasDifusas";
import {humedadAmbiental,muyHumedoAmbiente,MuySecoAmbiente,NormalAmbiente} from '../conjuntosDifusos/conjuntoHumedadAmbiente';
import {humedadSuelo} from '../conjuntosDifusos/conjuntoHumedadDelSuelo';
import {temperatura} from '../conjuntosDifusos/conjuntoTemperatura';
// console.log(humedadAmbiental.length)
// console.log(humedadSuelo.length)
// console.log(temperatura.length)
for (let i = 0; i < 50; i++) {
    let valAmbiente = Math.floor(Math.random() * (humedadAmbiental.length - 0));
    let valtemperatura = Math.floor(Math.random() * (temperatura.length - 0));
    let valSuelo = Math.floor(Math.random() * (humedadSuelo.length - 0));
    let respuesta = entradaFusificar(humedadAmbiental[valAmbiente],temperatura[valtemperatura],humedadSuelo[valSuelo])
    console.log({HUME:humedadAmbiental[valAmbiente], SOLO:humedadSuelo[valSuelo], TEMP:temperatura[valtemperatura],respuesta})
}
