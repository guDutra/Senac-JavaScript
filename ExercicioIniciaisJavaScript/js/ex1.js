function calcular(hrE, hrS) {
    var txtresultado = document.getElementById('resp');
   var horaEntrada = document.getElementById("hrE").value;
   var horaSaida = document.getElementById("hrS").value;

   hrE = parseInt(horaEntrada);
   hrS = parseInt(horaSaida);

   var horasEstacionado = hrS-hrE;
   var valor = 0;
   
   if(horasEstacionado =>  1  ) {valor = valor + 5}
   if(horasEstacionado =>  2 ) {valor = valor + 5}
   if(horasEstacionado => 3   ) {valor = valor + 2}
   if(horasEstacionado =>  4 ) {valor = valor + 2}
   if(horasEstacionado => 5) {valor = valor + 1}
   var resultado = valor;
   txtresultado.value = resultado.toString();

}