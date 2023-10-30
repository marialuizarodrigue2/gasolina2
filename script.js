function calcular(){

var valorGas = parseFloat(gas.value);
var valorEta = parseFloat(eta.value);
  
var custo = (valorEta/valorGas)


if(custo>0.7){

  alert("compensa abastecer gasolina");

}

if(custo<0.7){

   alert("use alcool");

}

if(custo==0.7){

   alert("tanto faz");

}

}
