var vetor  = new Array();
var votosKin = 0;
    var votosKanye = 0;
    var votosNulo = 0;
    var votos = 0;
let votosManhaKanye = 0;
    let votosManhaKin = 0;
    var  maisVotosManha = 0;
    var ultimoVoto = 0;
function ColocaNumero(numero) {
    var divFoto = document.getElementById('foto');
    var txt = document.getElementById('campo');
    var texto = numero.toString();	
    var paragrafo = document.getElementById('mensa');
 

if(txt.value.length < 2) {
console.log('opa');
txt.value =  txt.value+numero;
} else {
    alert('JÁ FORAM INSRERIDOS 2 NUMEROS')
}

if(parseInt(txt.value) == 55) {
    console.log('55');
   /* var imagem = document.getElementById('foto');
    imagem.style.backgroundImage = "url('/VotoJS/js/kin.jpg')";*/
    console.log("oi")
    const stylesheet = new CSSStyleSheet();
            stylesheet.insertRule("#foto {background-image: url('/VotoJS/js/kin.jpg'); background-size: cover; }");
            document.adoptedStyleSheets = [stylesheet];

    
            paragrafo.innerHTML = 'Kim Jong-un'
   // paragrafo.appendChild(nome);
    
}
if(parseInt(txt.value) == 69) {
   console.log('kanyeeee')
   const stylee = new CSSStyleSheet(); 

   stylee.insertRule("#foto {background-image: url('/VotoJS/js/kanye.jfif'); background-size: cover; }");
   document.adoptedStyleSheets = [stylee];

  
   paragrafo.innerHTML = 'Kanye Kardashian'
   
 

 

}

  stylesheet.insertRule("#foto p{padding-top: 300px} ");
  divFoto.appendChild(paragrafo);

  console.log(numero)
  console.log(texto);
   }


   function verificaCandidato() {
    var paragrafo = document.getElementById('mensa');
    paragrafo.innerHTML ='';
    
    
    var divFoto = document.getElementById('foto');
    var txt = document.getElementById('campo');
    var data = new Date();
 
    if(parseInt(txt.value) == 55) {
        votosKin++;
        votos++
        ultimoVoto = 55;
       let candidato = new Candidato(55,data.getHours(), data.getMinutes());
    vetor.push(candidato);
    hora = data.getHours();
    if(hora < 22 && hora > 13) {
        votosManhaKin++;
    }
    }

    if(parseInt(txt.value) == 69) {
        votosKanye++;
        votos++;
        ultimoVoto = 69;
        let candidato = new Candidato(69,data.getHours(), data.getMinutes());
    vetor.push(candidato);
        if(hora < 22 && hora > 13) {
            votosManhaKanye++;
        }
    }

    if(parseInt(txt.value) != 69 && parseInt(txt.value)!= 55 ) {
        votosNulo++;
    }

    if(votosManhaKanye > votosManhaKin) {
         maisVotosManha = 69;
    } 
    if(votosManhaKanye < votosManhaKin) {
        maisVotosManha = 55;
    }

    if(votosManhaKanye == votosManhaKin) {
        maisVotosManha = 0;
    }

    txt.value = '';
    const stylee = new CSSStyleSheet(); 
   stylee.insertRule("#foto {background-image: ''; }");
   document.adoptedStyleSheets = [stylee];
  /// paragrafo.style.display = 'none';
  
console.log('Votos manha Kanye: ' + votosManhaKanye);
console.log('Manha Kin: ' + votosManhaKin);
console.log(votosKanye.toString());
console.log(votosKin.toString());
console.log(votosNulo.toString())
   
resultados(votosKanye.toString(),votosKin.toString(), votosNulo.toString(), votos.toString(), vetor, maisVotosManha );
   }

   function sometelaVoto() {
    const stylee = new CSSStyleSheet(); 
    stylee.insertRule("#telaVoto {display: none; }");
    stylee.insertRule("#resultados{display:none;}");
    stylee.insertRule("#telaResultados{visibility: visible;}");
    document.adoptedStyleSheets = [stylee];
    
   }


 function  sometelaVotoSenha() {
    const stylee = new CSSStyleSheet(); 
    stylee.insertRule("#telaVoto {display: none; }");
    stylee.insertRule("#telaSenha{display:flex;}");
    //stylee.insertRule("#telaResultados{visibility: visible;}");
    document.adoptedStyleSheets = [stylee];
   }

function resultados(votosKanye, votosKin, nulo, votos, vetor, maisVotosManha) {

    var votosManha = maisVotosManha;
    console.log('aaa' + votosManha);
    var vet = vetor;
    let votoss = votos;
    let kanye = votosKanye;
    let nulos = nulo;
    let kin = votosKin;
    var Vcomputados = document.getElementById('votosCom');
    var VKanye = document.getElementById('votosKW');
    var Vkin = document.getElementById('votosKin');
    var Vnulos = document.getElementById('nulos');
    var vencedor = null;
console.log('votos do kanye  = ' + votoss)
console.log(typeof(votosKanye))
    
    Vcomputados.innerHTML =  'Votos Computados: '+ votoss;
    VKanye.innerHTML =  'Votos Kanye: '+ kanye;
    Vkin.innerHTML =  'Votos Kin:' + kin;
    Vnulos.innerHTML = 'Votos Nulos: ' + nulos;
 

    
    if(parseInt(kanye)  == parseInt(kin)) {
        if(votosManha != 0) {
            if(votosManha == 55) {
             vencedor = 'Kin';
            }
            if(votosManha == 69) {
             vencedor = 'Kanye';
            }
         }      

         if(votosManha == 0) {
             vencedor = 'Ninguem';
             if(ultimoVoto == 69) {
                vencedor = 'Kanye';
             } else {
                vencedor = 'Kin';
             }
         }
    }


   
    if(parseInt(kanye)  > parseInt(kin)) {
        vencedor = 'Kanye';
    }

    if(parseInt(kanye)  < parseInt(kin)) {
        vencedor = 'Kin';
    }


console.log('O vencedor é: ' +vencedor);
console.log(kanye);
console.log(kin)
mudaFotoGanhador(vencedor);
}

function Validar() {

    var inputTxt = document.getElementById('floatingInput').value;
    var inputInt = parseInt(document.getElementById('floatingInput').value);
    console.log('entrei no verificar');
    console.log(inputTxt);
    tamanho = false;
    nprimo = true;
    doisM = false;
    ok = false;
    var numero = null;
    var divisores = 0;
    var maiusculas = 0;
    if(inputTxt.length >= 6 && inputTxt.length <= 10) {
        tamanho = true;
        console.log('Tamanho correto');
    }

 for(let i = 0; i < inputTxt.length; i++) {
    

        if(inputTxt.charCodeAt(i) > 47 && inputTxt.charCodeAt(i)< 58) {
            if(inputTxt.charCodeAt(i+1) > 47 && inputTxt.charCodeAt(i+1)<58) {

                numero = inputTxt[i] + inputTxt[i+1];
                console.log('TENHO DOIS NUMEROS CONSECUTIVOS');
                console.log(numero)
                
            }
        }
  
 }
 if(numero != null) {
    for(let j = 1; j < numero+1; j++) {

        if(numero%j == 0) {
            divisores = divisores+1;
            console.log(j);
        }
    }
}  

 if(divisores >= 3) {
    console.log('NÃO É É PRIMO');
    nprimo = false;
}

for(let y = 0; y < inputTxt.length; y++) {
        
    if(inputTxt.charCodeAt(y) > 64 &&  inputTxt.charCodeAt(y) < 91) {
        console.log(inputTxt[y]);
        maiusculas = maiusculas+1;

    }
}

if(maiusculas > 1) {
    console.log('tem 2 maiuscula')
    doisM = true;
}

    if(doisM == true && nprimo == true &&tamanho == true ) {
        ok = true;
        
    } else {
        alert('SENHA ERRADA')
    }

    if(ok == true) {
        someTelaSenhaResultados();
    } 
}

function mudaFotoGanhador(vencedor) {
    let winner = vencedor;

    if(winner == 'Kanye') {
        const stylee = new CSSStyleSheet(); 

        stylee.insertRule("#fotoGanhador {background-image: url('/VotoJS/js/kanye.jfif'); background-size: cover; }");
        document.adoptedStyleSheets = [stylee];
    }

    if(winner == 'Kin') {
        const stylesheet = new CSSStyleSheet();
        stylesheet.insertRule("#fotoGanhador {background-image: url('/VotoJS/js/kin.jpg'); background-size: cover; }");
        document.adoptedStyleSheets = [stylesheet];
        console.log('MDS')
    }

    console.log(winner)

}

function someTelaSenhaResultados() {
    const stylee = new CSSStyleSheet(); 
    stylee.insertRule("#telaVoto {display: none; }");
    stylee.insertRule("#telaSenha {display: none; }");
   // stylee.insertRule("#telaResultados{display:flex;}");
    stylee.insertRule("#telaResultados{visibility: visible;}");
    document.adoptedStyleSheets = [stylee];
}
//  aaaa29aa
// aaaa2baa
//aaAA29aa
//baNaNa10
// baNaNa47
//  baNaNa29