import { humedadAmbiental } from "../conjuntosDifusos/conjuntoHumedadAmbiente";
import { entradaFusificar } from "../reglasDifusas";
const Esp32IP = "192.168.4.1";
let connection;

let control_difuso = 0;
let flujo = 0;

let temperatura = 0;
let humedad = 0;
let humedad_suelo = 0;
let flujo_agua = 0;

let lecturaDifusa;
let apagado = 0;

const tempMeter = document.getElementById("temp_meter");
const tempValue = document.getElementById("temp_value");
const humMeter = document.getElementById("hum_meter");
const humValue = document.getElementById("hum_value");
const soilMeter = document.getElementById("soil_meter");
const soilValue = document.getElementById("soil_value");
// const flujoMeter = document.getElementById("flujo_meter");
const flujoValue = document.getElementById("flujo_value");
// const fuzzy = document.getElementById("difuso");
const fuzzy = document.getElementById("vel");
const detenerFuzzy  = document.getElementById("vel-det");
// const difuso = document.getElementById("difuso");
// const ledOn = document.getElementById("led_on");
// const ledOff = document.getElementById("led_off");
const vel = document.getElementById("velocidad-motor");
// const velCero = document.getElementById("velCero");

const imprimirDatosEntrada =(humedadSueloEntrada,humedadAmbienteEntrada,temperaturaEntrada,flujo)=>{
    tempValue.textContent = temperaturaEntrada;
    tempMeter.style.width = `${temperaturaEntrada}%`
    soilValue.textContent = (humedadSueloEntrada).toFixed(1);
    soilMeter.style.width = `${(humedadSueloEntrada)}%`
    humValue.textContent = humedadAmbienteEntrada;
    humMeter.style.width = `${humedadAmbienteEntrada}%`
    flujoValue.textContent = flujo;
}
const conectarESP = document.getElementById("accion");
const desconectarESP = document.getElementById("desconectar");
conectarESP.addEventListener("click", () => {
  connection = new WebSocket("ws://" + Esp32IP + ":81/");
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
    imprimirDatosEntrada(humedad_suelo,humedad,temperatura,flujo_agua);

  };
});
desconectarESP.addEventListener("click",()=>{
    console.log("Desconectar")
    connection.close();
})

fuzzy.addEventListener("click",()=>{
    lecturaDifusa = setInterval(()=>{
        let result = entradaFusificar(humedad,temperatura,humedad_suelo);
        control_difuso = Math.round(result.voltajeSalida)
        flujo = 1;
        vel.textContent = control_difuso;
        // apagado +=1;
        console.log(control_difuso)
        console.log(result)
        send_data();
        
      },1000)
})
detenerFuzzy.addEventListener("click",()=>{
    control_difuso = 0;
    flujo = 0;
    send_data();
    vel.textContent = 0;
    clearInterval(lecturaDifusa);
})

function send_data() {
    var estado_motor = '{"Motor" :' + control_difuso +","+ '"Flujo" :'+ flujo + "}";
    connection.send(estado_motor);
  }