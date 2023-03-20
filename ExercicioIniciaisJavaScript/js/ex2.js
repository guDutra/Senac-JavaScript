function calcular() {
     var salarioHora = document.getElementById('salarioH').value;
     var horaEntrada = document.getElementById('hrE').value;
     var horaSaida = document.getElementById('hrS').value;
     var txtresultado = document.getElementById('resp');

     var salHr = parseInt(salarioHora);
    var hrE = parseInt(horaEntrada);
    var hrS = parseInt(horaSaida);
    var resultado = 0;
    if(hrS => 20) {
        var horasAdicionais = hrS-20;
    } else {
        var horasAdicionais = 0;
    }


   var horasNormaisTrabalhadas = (hrS-hrE) - horasAdicionais;
   
   var valorTotalNormal = salHr*horasNormaisTrabalhadas;
    
if(horasAdicionais > 0) {
    var valorAd = horasAdicionais*(120*salHr/100);
   resultado =   valorTotalNormal+valorAd;
} else {
    resultado = valorTotalNormal;
}
txtresultado.value = resultado.toString();
   

}