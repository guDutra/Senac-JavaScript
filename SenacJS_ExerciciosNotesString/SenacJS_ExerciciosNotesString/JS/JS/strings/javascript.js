var campo = '';



function calculaUnidade() {

    var valorTxt = document.getElementById('valor').value
    var valorInt = parseInt(document.getElementById('valor').value);
    var extensoTxt = document.getElementById('extenso');
    console.log(valorInt);
    console.log(valorTxt);
    var dezAvinte = new Array('','um', 'dois', 'tres','quatro', 'cinco', 'seis', 'sete', 'oito', 'nove');
    var posicao10 = valorInt%10;
    var posicao100 = (valorInt%100)
    var posicao100 = posicao100%10;
    if(valorTxt.length == 2) {
        var resultado = dezAvinte[posicao10];
        console.log('d')
        console.log('oi')
        campo = resultado.toString();
    } 
    if(valorTxt.length == 3) {
        var resultado = dezAvinte[posicao100];
        console.log('d')
        console.log('oi')
        campo = resultado.toString();
    } 
    
    if(valorTxt.length == 1)  {
        var resultado = dezAvinte[valorInt];
        console.log('d')
        console.log('oi')
        campo = resultado.toString();
    }

    
    extensoTxt.value = campo.toString();
    
    return campo;
}


function calculaDezANove(){
    var valorTxt = document.getElementById('valor').value
    var valorInt = parseInt(document.getElementById('valor').value);
    var extensoTxt = document.getElementById('extenso');
    var resultado = '';
    var dezAdezenove = new Array('dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze','dezesseis','dezesete', 'dezoito', 'dezenove')

    if(valorInt < 20) {
         resultado = dezAdezenove[valorInt-10];
        console.log('d')
        console.log('oi')
        campo = resultado.toString();
    } else {
        campo = '';
      
    }
    extensoTxt.value = campo.toString();
    
    return campo;
}





function calculaDezena(unidade) {
    var valorTxt = document.getElementById('valor').value
    var valorInt = parseInt(document.getElementById('valor').value);
    var extensoTxt = document.getElementById('extenso');
    var resultado = '';

    var dezenas = new Array('', '', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta','setenta', 'oitenta', 'noventa');


    if(unidade == '') {
        console.log('d')
        var numerodezena = Math.floor(valorInt/10)
        console.log(numerodezena)
        resultado = dezenas[numerodezena];
       
   } else {
       resultado = '';
     
   }

  

   campo = resultado.toString();
   

   if(unidade != '') {

    campo = campo +  ' e ' + unidade;

   }

   extensoTxt.value = campo.toString();
   return campo.toString();
}

function calculaCentena(texto) {
    var valorTxt = document.getElementById('valor').value
    var valorInt = parseInt(document.getElementById('valor').value);
    var extensoTxt = document.getElementById('extenso');
    var resultado = '';

    var centenas = new Array('cento', 'duzentos', 'trezentos', 'quatrocentros', 'quinhentos', 'seiscentos', 'setecentos','oitocentos', 'novecentos')
    
    var centena = Math.floor(valorInt/100);
    console.log(centena);

    resultado = centenas[centena-1];
    campo = resultado.toString();

    campo  = campo + ' e ' + texto;
    extensoTxt.value = campo.toString();
    return campo.toString();
}


function calcular() {
    var valorTxt = document.getElementById('valor').value
    var valorInt = parseInt(document.getElementById('valor').value);
     if(valorTxt.length <= 1) {
 
        calculaUnidade();
     }

     if(valorTxt.length == 2 && valorInt < 20 && valorInt >= 10 ) {
        calculaDezANove();
     }
    
     if(valorTxt.length == 2 && valorInt >= 20) {
        calculaUnidade();
        var unidade =  calculaUnidade();
        
        calculaDezena(unidade);
     }

     if(valorTxt.length == 3 ) {
        calculaUnidade();
        var unidade =  calculaUnidade();
        var campos =   calculaDezena(unidade);
        calculaCentena(campos);

     }


}