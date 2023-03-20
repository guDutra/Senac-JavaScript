function calcular() {

    var n1 = parseInt(document.getElementById('N1').value);
    var txtresultado = document.getElementById('resp');
    let divisores = 0;
    
    for(let i = 0; i < n1+1; i++) {

    if(n1 %i == 0) {

        divisores++;

    }
    }
    console.log(divisores);
    if(divisores > 2 ) {
    var resultado = 'NÃO É PRIMO'
    } else {
        var resultado = 'É PRIMO';
    }
    

    txtresultado.value = resultado.toString();   

}