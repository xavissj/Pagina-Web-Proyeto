
document.getElementById("btn-success").addEventListener("click",register);


var formulario_register=document.querySelector(".formulario__register");
var nombre=document.getElementById("nombre").value;
var telefono=document.getElementById("telefono").value;
var correo=document.getElementById("correo").value;
var password=document.getElementById("password").value;

function nombre() {
    if(nombre === ""){
        alert("Ingrese un nombre por favor");
        return false;
    } 
}
function telefono() {
    if(telefono === ""){
        alert("El campo Télefono está vacio");
        return false;
    } 
}
function correo() {
    if(correo === ""){
        alert("El campo Email está vacio");
        return false;
    } 
}
function password() {
  if(password === ""){
      alert("El campo está vacio");
      return false;
  } 
}

function rutEsValido(rut) {
    if (!rut || rut.trim().length < 3) return false;
    const rutLimpio = rut.replace(/[^0-9kK-]/g, "");
  
    if (rutLimpio.length < 3) return false;
  
    const split = rutLimpio.split("-");
    if (split.length !== 2) return false;
  
    const num = parseInt(split[0], 10);
    const dgv = split[1];
  
    const dvCalc = calculateDV(num);
    return dvCalc === dgv;
  }
  
  function calculateDV(rut) {
    const cuerpo = `${rut}`;
    // Calcular Dígito Verificador
    let suma = 0;
    let multiplo = 2;
  
    // Para cada dígito del Cuerpo
    for (let i = 1; i <= cuerpo.length; i++) {
      // Obtener su Producto con el Múltiplo Correspondiente
      const index = multiplo * cuerpo.charAt(cuerpo.length - i);
  
      // Sumar al Contador General
      suma += index;
  
      // Consolidar Múltiplo dentro del rango [2,7]
      if (multiplo < 7) {
        multiplo += 1;
      } else {
        multiplo = 2;
      }
    }
  
    // Calcular Dígito Verificador en base al Módulo 11
    const dvEsperado = 11 - (suma % 11);
    if (dvEsperado === 10) return "k";
    if (dvEsperado === 11) return "0";
    return `${dvEsperado}`;
  }
  
