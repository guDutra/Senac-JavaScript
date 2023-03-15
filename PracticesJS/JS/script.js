var vetorCandidatos  = new Array();
var vetorVotantes  = new Array();
var vetorResultados = new Array();
var votosPoze = 0;
var votosNey = 0;
var votoCorpse = 0;

var Mcpoze = new Candidatos('333', 'Mc Poze do Rodo - O pitbull do funk', '/images/mc-poze.webp');
var Neymar = new Candidatos('010', 'Neymar Jr', '/images/neymar2.jfif');
var Corpse = new Candidatos('666', 'Corpse Husband',' /images/corpse.jfif');
vetorCandidatos.push(Mcpoze);
vetorCandidatos.push(Neymar);
vetorCandidatos.push(Corpse);

var votosNulos = new Resultados('000', 'Votos Nulo', '/images/cinza.jpg', 0 );
var votosMcPoze = new Resultados('333', 'Mc Poze do Rodo - O pitbull do funk', '/images/mc-poze.webp', 0 );
var votosNeymar = new Resultados('010', 'Neymar Jr', '/images/neymar2.jfif', 0 );
var votosCorpse = new Resultados('666', 'Corpse Husband',' /images/corpse.jfif', 0);
vetorResultados.push(votosNulos);
vetorResultados.push(votosMcPoze);
vetorResultados.push(votosNeymar);
vetorResultados.push(votosCorpse);

function ColocaNumero(numero) {
    
    var txtCampo = document.getElementById('campo');
    var divFoto = document.getElementById('fotoCandidato');
    var txtNome = document.getElementById('nomeCandidato');

if(txtCampo.value.length < 3 ) {
    txtCampo.value = txtCampo.value+numero;
 
}

for (let i = 0; i < vetorCandidatos.length; i++) {
    
    if(txtCampo.value == vetorCandidatos[i].numero) {
        divFoto.style.backgroundImage = `url("${vetorCandidatos[i].imagem}")`;
        txtNome.innerHTML = vetorCandidatos[i].nome;
        console.log(vetorCandidatos[i].nome);

    }   
}
}

function btCancela() {

var txtCampo = document.getElementById('campo');
    var divFoto = document.getElementById('fotoCandidato');
    var txtNome = document.getElementById('nomeCandidato');

    txtCampo.value = '';
    divFoto.style.backgroundImage = "url('/images/cinza.jpg')"
    txtNome.innerHTML = '';

}

function btNulo() {
    var votanteNulo = new Votantes('indefinido', 0, '000');
    vetorVotantes.push(votanteNulo);
    for (let i = 0; i < vetorResultados.length; i++) {
    
        if(vetorResultados[i].nome == 'Votos Nulo') {
            vetorResultados[i].quantidade = vetorResultados[i].quantidade+1;
        }

    }
    btCancela();
}

function CadastraCandidato() {

    var newCandName = document.getElementById('name');
    var newCandNumber = document.getElementById('numero');
    var newCandImage =  document.getElementById('imagem');
    var divConsultaCand = document.getElementById('divConsultaCand');
    var stringInteira = '';
    var strLinhas = '';
    var vazio = '';
    var vetorString = new Array();
    var newCandidato = new Candidatos(newCandNumber.value, newCandName.value, newCandImage.value);
    vetorCandidatos.push(newCandidato);
    var novoCandidato = new Resultados(newCandNumber, newCandName, newCandImage, 0);
    vetorResultados.push(novoCandidato);

    for(let i = 0; i < vetorCandidatos.length; i++) {

        strLinhas = `<h3> ${vetorCandidatos[i].nome} - ${vetorCandidatos[i].numero} `
        vetorString.push(strLinhas);
    }

    divConsultaCand.innerHTML = vetorString.toString();
   
    newCandNumber.value = '';
    newCandName.value = '';
    newCandImage.value = '';
    

}

function Votar() {

    var newVotoName = document.getElementById('nome');
    var newVotoIdade =  document.getElementById('idade');
    var txtCampo = document.getElementById('campo');
    const vazio = '';
    var newVotante = new Votantes(newVotoName.value, newVotoIdade.value, txtCampo.value);
    vetorVotantes.push(newVotante);
 
    ComputaVoto(txtCampo.value);
    //CalculaVotos();
    newVotoIdade.value = '';
    newVotoName.value = '';
    btCancela();
   
}

function Results() {
   
    constroiTabelaResultados();
    controiGanhadorResultados(CalculaGanhador());
    mostraTelaResultados();
}

/*function CalculaVotos() {


    for (let i = 0; i < vetorVotantes.length; i++) {
        
        for (let j = 0; j < vetorCandidatos.length; j++) {
            
            if(vetorVotantes[i].voto == vetorCandidatos[j].numero) {


                for (let y = 0; y < vetorResultados.length; y++) {
                    if(vetorResultados[y].numero == vetorCandidatos[j].numero) {
                        console.log('Candidato já havia sido votado antes');
                        vetorResultados[y].quantidade = vetorResultados[y].quantidade+1;
                        
                    } else {
                        var newVoto = new Resultados(vetorCandidatos[j].numero,vetorCandidatos[j].nome, vetorCandidatos[j].imagem, 0 );
                        vetorResultados.push(newVoto);
                        
                        console.log('NÃO HAVIA SIDO VOTADO ANTES');
                    }
                    
                }/// fim do for do vetor resultados
                


                
            }/// fim do if de verificação em qual candidato votou
             
        }/// fim do for do vetor candidatos
        
    }// fim do for do vetor votantes

    console.log(vetorResultados);
}*/

function ComputaVoto(voto) {
   var tem = null;
   var posicao = 0;
    for(let i = 0; i < vetorResultados.length; i++) {
        if(voto == vetorResultados[i].numero) {
            tem = true;
            posicao = i;
            break;
        } else {
            tem = false;
            
            
        }
    }

    if(tem == true) {
        
                vetorResultados[posicao].quantidade =  vetorResultados[posicao].quantidade+1;
        
    }

    if(tem == false) {
        for(let j = 0; j < vetorCandidatos.length; j++) {
            if(voto == vetorCandidatos[j].numero) {
                var nomeNovoCandidato = vetorCandidatos[j].nome;
                var numeroNovoCandidato = vetorCandidatos[j].numero;
                var imagemNovoCandidato = vetorCandidatos[j].imagem;
               
            }
        }

        var newVoto = new Resultados(numeroNovoCandidato,nomeNovoCandidato, imagemNovoCandidato, 1 );
                vetorResultados.push(newVoto);
    }
    //console.log(vetorResultados);

}

function constroiTabelaResultados() {


    var divResults = document.getElementById('boxResult');
   
    var strComecoTabela = ` <table class="table table-light  table-striped table-hover" id="tabelaResultados"> <thead> <tr> <th> Número </th>  <th>  Candidatos </th>  <th> Votos </th> </tr>  </thead> <tbody class="table-group-divider">`;
   // var strMeioTabela = `</thead> <tbody>`;
    var fimTabela = '</tbody> </table>';
    var strTrs = '';
    var strTheads = '';
    var stringInteira = "";
    var vetorString = new Array();

 
    for(let i = 0; i < vetorResultados.length; i++) {


        var strR = `<tr> <td> ${vetorResultados[i].numero}</td>    <td>   ${vetorResultados[i].nome}</td>    <td> ${vetorResultados[i].quantidade}</td> </tr> `;
    
        strTrs+= strR;
    }

    vetorString.push(strComecoTabela);
    vetorString.push(strTrs);
    vetorString.push(fimTabela);

    stringInteira = vetorString.toString();


console.log(stringInteira);
divResults.innerHTML = stringInteira;


}

function  controiGanhadorResultados(nomeGanhador) {
    var divGanhador = document.getElementById('areaFotoGanhador');
    var fotoGanhador = document.getElementById('fotoGanhador');
    var DIVnomeGanhador = document.getElementById('nomeGanhador');
    var H3 = document.getElementById('H3');
    var imgGanhador = '';
    
    for(let i = 0; i < vetorResultados.length; i++) {

        if(nomeGanhador == vetorResultados[i].nome) {
            imgGanhador = vetorResultados[i].imagem;
        }
    }

    fotoGanhador.style.backgroundImage = `url("${imgGanhador}")`;

    if(nomeGanhador == 'empate')  {
        fotoGanhador.style.backgroundImage = `url('/images/cinza.jpg')`;
        H3.innerHTML = 'TERMINOU EM EMPATE'
        nomeGanhador = 'ninguém foi eleito'
    }
    
    DIVnomeGanhador.innerHTML = nomeGanhador.toString();



}

function CalculaGanhador() {

    var maior = vetorResultados[0].quantidade;
    var nome = vetorResultados[0].nome;
    var mesmaQuantidade = 0;
    var maisVelhoNome = '';
    var maisVelhoIdade = 0;
    var maisVelhoVotou = '';
    var posicoes = new Array();
    var posicaoMaisVelho = 0;
    var vetorVotantesDosEmpatados = new Array();
    var aux = 0;

    for (let i = 0; i < vetorResultados.length; i++) {
        
     if(vetorResultados[i].quantidade > maior) {
        maior = vetorResultados[i].quantidade;
        nome = vetorResultados[i].nome;
        console.log(nome);
     } 

    }


    for (let j = 0; j < vetorResultados.length; j++) {
        if(vetorResultados[j].quantidade == maior) {
            mesmaQuantidade = mesmaQuantidade+1;
            posicoes.push(vetorResultados[j].numero);
        }
       }
    
       console.log(vetorResultados);
       console.log(posicoes);
       console.log('tam: ' + posicoes.length);
       console.log(mesmaQuantidade);
       
       /*if(mesmaQuantidade > 1) {
        nome = 'empate';
       }*/

       if(posicoes.length > 0) {
        console.log('meu bom');
        console.log(vetorVotantes);
        console.log(posicoes);
        for(let i = 0; i < vetorVotantes.length; i++) {
            for(let j = 0; j < posicoes.length; j++) {
                console.log(vetorVotantes[i].voto );
                console.log(posicoes[j]);
                if(vetorVotantes[i].voto == posicoes[j]) {
                    vetorVotantesDosEmpatados.push(vetorVotantes[i]);
                    console.log('meu bom');
                    console.log(vetorVotantes[i]);
                }
            }
        }

        console.log('vetora: ' + vetorVotantesDosEmpatados);
       /* for(let i = 0; i < vetorVotantesDosEmpatados.length; i++) {

            for(let j = 1; j , vetorVotantesDosEmpatados.length; j++) {

                if(vetorVotantesDosEmpatados[i].idade > vetorVotantesDosEmpatados[j].idade) {
                    aux = vetorVotantesDosEmpatados[i];
                } else {
                    aux = vetorVotantesDosEmpatados[j];
                }
            }
        }

       console.log(vetorVotantesDosEmpatados);
       console.log(aux);
        console.log('Mais velho : ' + vetorVotantesDosEmpatados[aux].nome);
        console.log('Idade dele: ' + vetorVotantesDosEmpatados[aux].idade);
        console.log('Número dele ' + vetorVotantesDosEmpatados[aux].voto);*/

       }


    /*console.log('Candidato que o mais velho votou: ' + nome);
    console.log('Mais velho : ' + maisVelhoNome);
    console.log('Idade dele: ' + maisVelhoIdade);
    console.log('Número dele ' + maisVelhoVotou);*/

     return nome;
}

function mostraTelaResultados() {

    var telaInicial = document.getElementById('telaInicial');
    var telaResultados = document.getElementById('telaResultados');
    var areaFotoGanhador  = document.getElementById('areaFotoGanhador');
    var divUrna  = document.getElementById('urna');
    var body = document.getElementById('corpo');
    var btVoltaTelaInicial = document.querySelector('.btVoltaTelaInicial');
    telaInicial.style.display = 'none';
    telaResultados.style.display = 'inline';
    divUrna.style.display = 'none';
    body.style.backgroundColor = 'black';
    var H3  = document.getElementById('H3');
    H3.style.display = 'inline';
    areaFotoGanhador.style.display = 'inline';
    btVoltaTelaInicial.style.display = 'inline';
}

function mostraTelaInicial() {

    var telaInicial = document.getElementById('telaInicial');
    var telaResultados = document.getElementById('telaResultados');
    var divUrna  = document.getElementById('urna');
    var H3  = document.getElementById('H3');
    var body = document.getElementById('corpo');
    var btVoltaTelaInicial = document.querySelector('.btVoltaTelaInicial');
    body.style.backgroundColor = 'white';
    divUrna.style.backgroundColor = 'white';
    
    divUrna.style.display = 'inline';
    telaInicial.style.display = 'inline';
    telaResultados.style.display = 'none';
    H3.style.display = 'none';
    btVoltaTelaInicial.style.display = 'none';
    
}

function DarkMode() {
    $("#csss").attr("href", "/css/styleDark.css");
}

/*
 if(vetorVotantes[i].idade> maisVelhoIdade) {
                        console.log('VAR: ' + maisVelhoIdade);
                        console.log('VETOR: ' + vetorVotantes[i].idade);
                        maisVelhoIdade = vetorVotantes[i].idade;
                        maisVelhoNome = vetorVotantes[i].nome;
                        maisVelhoVotou = vetorVotantes[i].voto;
                    } 
                    */