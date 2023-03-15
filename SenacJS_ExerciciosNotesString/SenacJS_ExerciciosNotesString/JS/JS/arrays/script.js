var vetor = new Array();


function insereInicio() {
    var produto = document.getElementById('Produto').value;
    var valor = document.getElementById('valor').value;
    var txt = document.getElementById('campotxt')
  
    console.log(produto) 
    var item = produto + ' ' +  '-' +' '+ valor;
    console.log(item)    
   
    vetor.unshift(item);

    txt.value = vetor.toString();
    
}

function insereFim() {
    var produto = document.getElementById('Produto').value;
    var valor = document.getElementById('valor').value;
    var txt = document.getElementById('campotxt');
    console.log(vetor);
    var item = produto + ' ' +  '-' +' '+ valor;

    vetor.push(item);

    txt.value =vetor.toString();
}

function insereMeio() {
    var produto = document.getElementById('Produto').value;
    var valor = document.getElementById('valor').value;
    var txt = document.getElementById('campotxt');
    console.log(vetor);
    var item = produto + ' ' +  '-' +' '+ valor;

    vetor.splice()
}

function 