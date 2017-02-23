function convertirCelsious(){
var f=document.getElementById("fahrenheit");
document.getElementById("result").innerHTML=((f.value-32)*(5/9)).toFixed(2)+" C";
}
function convertirFahrenheit(){
  var c=document.getElementById("celsious");

  document.getElementById("result").innerHTML=(c.value*(9/5)+32).toFixed(2)+" F";
}
