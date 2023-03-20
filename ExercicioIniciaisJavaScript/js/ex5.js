function calcular() {

    var AnoNasc = parseInt(document.getElementById('Anonasc').value);
    var MesNasc = parseInt(document.getElementById('Mesnasc').value);
    var DiaNasc = parseInt(document.getElementById('diaNasc').value);
    var AnoAtual = parseInt(document.getElementById('AnoAtual').value);
    var MesAtual = parseInt(document.getElementById('MesAtual').value);
    var DiaAtual = parseInt(document.getElementById('DiaAtual').value);
    var txtresultado = document.getElementById('resp');

     var maior = false

    var anos = AnoAtual-AnoNasc;
    console.log(anos);
    if(anos > 18) {maior = true}
    if(anos < 18  ) {maior = false}

    if(anos == 18) {

        if(MesNasc < MesAtual) {
            maior = true;
        }

        if(MesNasc == MesAtual) {
            if(DiaNasc <= DiaAtual ) {

                maior = true;
            }
        }

    }
    if(maior == true) {
       var resultado = 'É DE MAIOR'
    } else {
       var  resultado = 'NÃO É DE MAIOR'
 
    }
    txtresultado.value = resultado.toString();   
}