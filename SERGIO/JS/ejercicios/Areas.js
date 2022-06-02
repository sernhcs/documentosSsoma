// acá quería poner el number en vez del parsefloat 
let result;
function areaTriangulo(){
  let baseT = document.getElementById("textoBaseT").value;
  let alturaT= document.getElementById('textoAlturaT').value;
    result = parseFloat(baseT)*(parseFloat(alturaT)/2);
    document.getElementById("AreaResult").innerHTML = result;
}