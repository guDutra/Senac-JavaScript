function calcular() {
    var n1 = parseInt(document.getElementById('N1').value);
    
    var txtresultado = document.getElementById('resp');
    var resultado1 = 0;
    var soma = 1;
    for(let i = 0; i < n1; i++ ) {
    
        

             resultado1 = i*soma;
          
        


    }
    console.log(resultado1);
    txtresultado.value = resultado1.toString();   
}