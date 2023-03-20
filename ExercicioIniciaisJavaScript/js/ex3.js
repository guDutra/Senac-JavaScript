function calcular() {
    var salarioHora = document.getElementById('salarioH').value;
    var horaEntrada = document.getElementById('hrE').value;
    var horaSaida = document.getElementById('hrS').value;
    var txtresultado = document.getElementById('resp');

    var salHr = parseInt(salarioHora);
   var hrE = parseInt(horaEntrada);
   var hrS = parseInt(horaSaida);
   var resultado = 0;
   var horasAdicionais = 0;
   if(hrE < 6)  {
        horasAdicionais = 6-hrE;
        console.log(horasAdicionais);
   }
   if(hrS => 20) {
      horasAdicionais = horasAdicionais+hrS-20;
      console.log(horasAdicionais);
   } 

  var horasNormaisTrabalhadas = (hrS-hrE) - horasAdicionais;
  var valorTotalNormal = horasNormaisTrabalhadas*salHr;

if(horasAdicionais > 0) {
   var valorAd = horasAdicionais*(salHr*120/100);
  resultado =   valorTotalNormal+valorAd;
} else {
   resultado = valorTotalNormal;
}

txtresultado.value = resultado.toString();
  

}