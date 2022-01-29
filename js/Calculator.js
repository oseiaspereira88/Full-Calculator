var calcType = "Media";

var colunaA;
var valuesA;
var colunaB;
var valuesB;
var nRows = 2;

var sequencia = [];
var media = 0, soma = 0, somaVariancia = 0, variancia = 0;
var desvioPadrao = 0, coefVariacao = 0;
var desvioMedio = 0, somaDesvioMedio = 0;
var amplitudeTotal = 0, xMax, xMin;

var resultTitle = document.getElementById("resultTitle");

function setCalcType(e){
   if(e == 0){
      calcType = "Media";
      resultTitle.innerHTML = "Média";
      mostrarResultado();
   } else if(e == 1){
      calcType = "DesvioMedio";
      resultTitle.innerHTML = "Desvio Médio";
      mostrarResultado();
   } else if(e == 2){
      calcType = "Variancia";
      resultTitle.innerHTML = "Variancia";
      mostrarResultado();
   } else if(e == 3){
      calcType = "DesvioPadrao";
      resultTitle.innerHTML = "Desvio Padrão";
      mostrarResultado();
   } else if(e == 4){
      calcType = "CoefVariacao";
      resultTitle.innerHTML = "Coef. Variação";
      mostrarResultado();
   } else if(e == 5){
      calcType = "AmplitudeTotal";
      resultTitle.innerHTML = "Ampl. Total";
      mostrarResultado();
   }
   mostrarResultado();
}

function calcular(){
   resetVars();
   pegarValores();
   montarSequencia();
   mostrarSequencia();
   calcularTudo();
   mostrarResultado();
}

function resetVars(){
   sequencia = [];
   media = 0;
   soma = 0;
   somaVariancia = 0;
   variancia = 0;
   desvioPadrao = 0;
   coefVariacao = 0;
   desvioMedio = 0;
   somaDesvioMedio = 0;
   amplitudeTotal = 0;
   xMax = 0;
   xMin = 0;
   valuesA = [];
   valuesB = [];
}

function pegarValores(){
   colunaA = document.getElementsByClassName("coluna-A");
   colunaB = document.getElementsByClassName("coluna-B");

   for(var i=0; i<nRows; i++){
      valuesA[i] = parseInt(colunaA[i].value);
      valuesB[i] = parseInt(colunaB[i].value);
   }
}

function montarSequencia(){
   for(var i=0; i<nRows; i++){
      for(var j=0; j<valuesB[i]; j++){
         sequencia.push(valuesA[i]);
      }
   }
}

function calcularTudo(){
   // cálculo da média
   for(var i=0; i<sequencia.length; i++){
      soma += sequencia[i];
   }
   media = (soma/sequencia.length);

   // cálculo do desvio médio
   for(var i=0; i<sequencia.length; i++){
      if((sequencia[i] - media) < 0){
         somaDesvioMedio += (sequencia[i] - media)*(-1);
      } else {
         somaDesvioMedio += (sequencia[i] - media);
      }

   }
   desvioMedio = somaDesvioMedio/sequencia.length;

   // cálculo da amplitude total
   xMax = sequencia[0];
   xMin = sequencia[0];

   for(var i=1; i<sequencia.length -1; i++){
      if(sequencia[i] > xMax){
         xMax = sequencia[i];
      }
      if(sequencia[i] < xMin){
         xMin = sequencia[i];
      }
   }

   amplitudeTotal = xMax - xMin;

   // cálculo da variância
   for(var i=0; i<sequencia.length; i++){
      somaVariancia += Math.pow((sequencia[i] - media), 2);
   }
   variancia = somaVariancia/sequencia.length;

   // cálculo do desvio padrão
   desvioPadrao = Math.sqrt(variancia);

   // cálculo do coef. de variação
   coefVariacao = (desvioPadrao/media) * 100;
}

function mostrarSequencia(){
   var textSequencia = "";

   for(var i=0; i<sequencia.length; i++){
      if(i != sequencia.length - 1){
         textSequencia += sequencia[i] + ", ";
      } else{
         textSequencia += sequencia[i]
      }
   }

   document.getElementById("resultSequencia").innerHTML = "<strong>{ </strong>" + textSequencia + "<strong> }</strong>";

}

function mostrarResultado(){
   if(calcType == "Media"){
      document.getElementById("resultArea").innerText = media.toFixed(2);
   } else if(calcType == "DesvioMedio"){
      document.getElementById("resultArea").innerText = desvioMedio.toFixed(2);
   } else if(calcType == "Variancia"){
      document.getElementById("resultArea").innerText = variancia.toFixed(2);
   } else if(calcType == "DesvioPadrao"){
      document.getElementById("resultArea").innerText = desvioPadrao.toFixed(2) ;
   } else if(calcType == "CoefVariacao"){
      document.getElementById("resultArea").innerText = coefVariacao.toFixed(2) + "%";
   } else if(calcType == "AmplitudeTotal"){
      document.getElementById("resultArea").innerText = amplitudeTotal.toFixed(2);
   }
}