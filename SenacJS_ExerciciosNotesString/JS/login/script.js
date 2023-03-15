function verifica() {
    var senhatxt = document.getElementById('senha').value;
    var senhaInt = parseInt(document.getElementById('senha').value);

    var verifica = false;
 
    var tamanhoOk = false;
    var ndivisivel = false;
    var doissequencia = false;
    var numeros = new Array();
    if(senhatxt.length >= 6 && senhatxt.length <= 8 ) {
        tamanhoOk = true;
    }
    
    for(let i = 10; i < 100; i++) {
        if(senhatxt.indexOf(i) > -1  ) {
            var n = i;
        if(n%3 == 0 || n%7 == 0) {
                 ndivisivel = true;
                console.log(n);          
            } 
        }
    }

    console.log(numeros);


    for(let j = 0; j < senhatxt.length; j++) {
       
        if(senhatxt.charCodeAt(j) > 64 && senhatxt.charCodeAt(j+1)  && senhatxt.charCodeAt(j) < 91  && senhatxt.charCodeAt(j+1) < 91 ) {
            doissequencia = true;
            
        }
    }

    if(doissequencia == true && ndivisivel == true &&  tamanhoOk == true) {
        verifica = true;
       
    }


    if(verifica == true) {
        window.location.href= 'conseguiu.html';
    }
}