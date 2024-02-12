import { entradaFusificar } from "./reglasDifusas";
const Esp32IP = "192.168.4.1";
var connection = new WebSocket("ws://" + Esp32IP + ":81/");

let estado_boton = 0;
let flujo = 0;

let temperatura = 0;
let humedad = 0;
let humedad_suelo = 0;
let flujo_agua = 0;



const tempMeter = document.getElementById("temp_meter");
const tempValue = document.getElementById("temp_value");
const humMeter = document.getElementById("hum_meter");
const humValue = document.getElementById("hum_value");
const soilMeter = document.getElementById("soil_meter");
const soilValue = document.getElementById("soil_value");
const difuso = document.getElementById("difuso");
const ledOn = document.getElementById("led_on");
const ledOff = document.getElementById("led_off");
const vel = document.getElementById("vel");
const velCero = document.getElementById("velCero");
const flujoMeter = document.getElementById("flujo_meter");
const flujoValue = document.getElementById("flujo_value");

const velMax = document.getElementById("velMax");
connection.onmessage = function (event) {
  let datos_sensores = event.data;
  let data = JSON.parse(datos_sensores);
  temperatura = data.temp;
  humedad = data.hum;
  humedad_suelo = data.soil;
  flujo_agua = data.ml;
  console.log("temperatura:", temperatura);
  console.log("humedad:", humedad);
  console.log("humedad Suelo:", humedad_suelo);
  console.log("Flujo agua:", flujo_agua);
  tempMeter.value = temperatura;
  tempValue.innerHTML = temperatura;
  humMeter.value = humedad;
  humValue.innerHTML = humedad;
  soilMeter.value = humedad_suelo;
  soilValue.innerHTML = humedad_suelo;

  flujoMeter.value = humedad_suelo;
  flujoValue.innerHTML = humedad_suelo;
};
difuso.addEventListener("click",e=>{
  console.log(Math.round(entradaFusificar(humedad,temperatura,humedad_suelo)));
})
function button_on() {
  estado_boton = Math.round(entradaFusificar(humedad,temperatura,humedad_suelo));
  flujo = 1;
  console.log("Control Difuso");
  send_data();
}

function button_off() {
  estado_boton = 0;
  flujo=0;
  console.log("Velocidad bomba 0");
  send_data();
}
function on_maximo() {
  estado_boton = 255;
  flujo = 1;
  console.log("Velocidad bomba max");
  send_data();
}

function send_data() {
  var led_estado = '{"Motor" :' + estado_boton +","+ '"Flujo" :'+ flujo + "}";
  connection.send(led_estado);
}

vel.addEventListener("click", button_on);
velCero.addEventListener("click", button_off);
velMax.addEventListener("click", on_maximo);
