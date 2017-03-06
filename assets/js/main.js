var f=document.getElementById("fahrenheit");
var c=document.getElementById("celsious");
function convertirCelsious(){
document.getElementById("result").innerHTML=((f.value-32)*(5/9)).toFixed(2)+" C";
}
function convertirFahrenheit(){
  document.getElementById("result").innerHTML=(c.value*(9/5)+32).toFixed(2)+" F";
}
