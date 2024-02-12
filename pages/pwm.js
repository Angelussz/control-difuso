import { entradaFusificar } from "../reglasDifusas";
const temperatura = document.getElementById("temperatura");
const ambiente = document.getElementById("hume_ambiente");
const suelo = document.getElementById("hume_suelo");
const calcular = document.getElementById("calculo");
const formulario = document.getElementById("formulario")
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    const temp = parseFloat(temperatura.value);
    const ambi = parseFloat(ambiente.value);
    const suel = parseFloat(suelo.value);
    let result = entradaFusificar(ambi,temp,suel); 
    // if(isNaN(result)){
    //     result = 0;
    // }
    console.log(result)
})