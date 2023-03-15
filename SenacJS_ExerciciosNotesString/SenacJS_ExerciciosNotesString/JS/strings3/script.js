function calcular() {
    var valorTxt = document.getElementById('valor').value
    var valorInt = parseInt(document.getElementById('valor').value);

    if(valorTxt.length == 1 ) {
        calculaUnidade();
    } 

    if(valorTxt.length == 2 && valorInt < 20 && valorInt > 9) {
        calculaDezANove();
    }

    if(valorTxt.length == 2 && valorInt >= 20) {
        var unidade = calculaUnidade()
        calculaDezena(unidade);
    }

    if(valorTxt.length == 3) {
        
    }
}
