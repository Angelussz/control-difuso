import { entradaFusificar } from "../reglasDifusas";

const Esp32IP = "192.168.4.1";
let connection;
let flujo=1;
const temperatura = document.getElementById("temperatura");
const ambiente = document.getElementById("hume_ambiente");
const suelo = document.getElementById("hume_suelo");
const calcular = document.getElementById("calculo");
const detenerFuzzy  = document.getElementById("vel-det");
const formulario = document.getElementById("formulario")
const conectarESP = document.getElementById("accion");
const vel = document.getElementById("velocidad-motor");
conectarESP.addEventListener("click", () => {
    connection = new WebSocket("ws://" + Esp32IP + ":81/");
    console.log("conectado al ESP32")
    
  });
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    flujo = 1;
    const temp = parseFloat(temperatura.value);
    const ambi = parseFloat(ambiente.value);
    const suel = parseFloat(suelo.value);
    let result = entradaFusificar(ambi,temp,suel); 
    let control_difuso = Math.round(result.voltajeSalida);
    var motor = '{"Motor" :' + control_difuso +","+ '"Flujo" :'+ flujo + "}";
    connection.send(motor);
    console.log(result)
    vel.textContent = result.voltajeSalida
})
detenerFuzzy.addEventListener("click",()=>{
    let control_difuso = 0;
    flujo = 0;
    var motor = '{"Motor" :' + control_difuso +","+ '"Flujo" :'+ flujo + "}";
    connection.send(motor);
})
