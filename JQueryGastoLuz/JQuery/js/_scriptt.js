


class Equipamentos  {

    constructor(aparelho, potencia, horaDia, gastoDiario) {
        this.aparelho = aparelho;
        this.potencia = potencia;
        this.horaDia = horaDia;
        this.gastoDiario = gastoDiario
    }

};

var vetor = new Array();
var vetStr = new Array();
var div = document.createElement('div');
div.id = "tabelinha"
$(document).ready( function() {

    $('#botao').click(function () {
        var aparelhotxt = $('.aparelhoTXT').val();
        var potenciaTXT = $('.potenciaTXT').val();
        var horasDiaTXT = $('.horasTXT').val();
        var valorHoraTXT = $('.valorTXT').val();
        
        

        
     
        let vlAparaelho = parseInt(aparelhotxt);
        let vlPotencia = parseInt(potenciaTXT);
        let vlHorasDia = parseInt(horasDiaTXT);
        let valorHora = parseFloat(valorHoraTXT);

        let gasto = (vlPotencia*vlHorasDia)/1000;
        let gastoDia = (gasto*valorHora)*30;

        console.log(gastoDia)
         
        var equipamento = new Equipamentos(aparelhotxt, potenciaTXT, horasDiaTXT, gastoDia );
        
        vetor.push(equipamento);
        
        vetStr = [];
        
          const style = new CSSStyleSheet(); 
          style.insertRule("#tabelinha {visibility: hidden ; }");
          document.adoptedStyleSheets = [style];
          
        div.innerHTML = ''
    });
    
});

function adiciona() {

    var aparelho = vetor[0].aparelho;
    var potencia = vetor[0].potencia;
    var horaDia = vetor[0].horaDia;
    var gastoDiario = vetor[0].gastoDiario;
    console.log(aparelho)
    console.log(potencia)
    console.log(horaDia)
    console.log(gastoDiario)
   
    var somaGastos = 0
   
    for(let i = 0; i < vetor.length; i++) {

        console.log(vetor[i].aparelho);
        console.log(vetor[i].potencia);
        console.log(vetor[i].horaDia);
        console.log(vetor[i].gastoDiario);
        str = "<tr> <td>" + vetor[i].aparelho + "</td>" + "<td>" + vetor[i].potencia +  "</td>  <td>" +vetor[i].horaDia +  "</td> <td>" + vetor[i].gastoDiario +  "</td>   </tr>" ;
         

        vetStr.push(str);
        
         somaGastos = somaGastos + vetor[i].gastoDiario
        
       }

       var mes = somaGastos*30;

       console.log('SOMA GASTOS  ' + somaGastos)
       var comecoTabela = "<table> <thead>  <th> Aparelho</th> <th> Potencia </th> <th> Hora Dia</th> <th> Gasto Diario</th>   </thead>  <tbody>   "
       var totalDr = " <tr class='totais' > <td colspan='3'> Total Diario: </td> <td>" + somaGastos.toString() +  "</td>  </tr> "
       var totalMensal = " <tr class='totais'> <td colspan='3'> Total Mensal: </td> <td>" + mes.toString() +  "</td>  </tr> "
       var fimTabela =  "</tbody> </table>"
       var trs = vetStr.toString();
       console.log(trs)
       var grandeString = comecoTabela + trs + totalDr + totalMensal + fimTabela;
       div.innerHTML = grandeString;
        
       document.body.appendChild(div);
 
    const stylee = new CSSStyleSheet(); 
  
   stylee.insertRule("#tabelinha {visibility: visible ; }");
   document.adoptedStyleSheets = [stylee];

}




