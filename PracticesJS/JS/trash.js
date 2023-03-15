if(mesmaQuantidade > 1) {

        
    for(let i = 0; i < vetorVotantes.length; i++) {
        for(let y = 1; y < vetorVotantes.length; y++ ) {
    for(let j = 0; j < posicoes.length; j++) {

        if(vetorVotantes[i].voto == posicoes[j]) {
            
            
          if(vetorVotantes[i].idade > vetorVotantes[y].idade) {
            
            console.log('i MAIOR: ' + vetorVotantes[i].idade + 'do que y: ' + vetorVotantes[y].idade);
            maisVelhoNome = vetorVotantes[i].nome;
            maisVelhoIdade = vetorVotantes[i].idade;
            maisVelhoVotou = vetorVotantes[i].voto;

          } else {
            
            console.log('y MAIOR: ' + vetorVotantes[y].idade + ' do que o i: ' + vetorVotantes[i].idade);
            maisVelhoNome = vetorVotantes[y].nome;
            maisVelhoIdade = vetorVotantes[y].idade;
            maisVelhoVotou = vetorVotantes[y].voto;
          }

        }
    }
    }
    }
for(let j = 0; j < vetorResultados.length; j++) {

    if(vetorResultados[j].numero == maisVelhoVotou) {
        nome = vetorResultados[j].nome;
    }
}
}
