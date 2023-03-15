var nomes = new Array('Felipe', 'Leonardo', 'André', 'Bruno');

function consulta() {
    var pesquisa =  parseInt(document.getElementById('pesquisa').value);
    var resultado = document.getElementById('resultado');
    var mensagem = 'POSIÇÃO INVALIDA';
    var final = nomes[pesquisa];
    console.log(nomes.length)
    
    if(pesquisa <= nomes.length-1) {
    resultado.value = final.toString();
} else {
    resultado.value = mensagem;
}

}

function adicionar() {
    var pesquisa =  document.getElementById('pesquisa').value;
    var resultado = document.getElementById('resultado');


    
    nomes.push(pesquisa);
    console.log(nomes)
}

function tamanho() {


    var pesquisa =  parseInt(document.getElementById('pesquisa').value);
    var resultado = document.getElementById('resultado');

    if(pesquisa == 1) {
        var final = nomes[pesquisa-1];
    } 

    if(pesquisa == 2) {
        var final = nomes.pop();
    }

    resultado.value = final.toString();


}


function splice() {
    var del =  ParseInt(document.getElementById('delSplice').value);
    var pos =  ParseInt(document.getElementById('posSplice').value);
    var resultado = document.getElementById('resultado');
    var mensagem = 'POSIÇÃO INVALIDA';
    if(pos <= nomes.length-1) {
        nomes.slice(pos,del);
    } else {
        resultado.value = mensagem;
    }

   console.log(nomes);
   
}

