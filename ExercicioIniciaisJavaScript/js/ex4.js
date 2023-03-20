function calcular() {
    var horaInicial = document.getElementById('hrInicial').value;
    var horaFinal = document.getElementById('hrFinal').value;
    var MinutoInicial = document.getElementById('MinutoInicial').value;
    var MinutoFinal = document.getElementById('MinutoFinal').value;
    var txtresultado = document.getElementById('resp');
    
    var HI = parseInt(horaInicial);
    var MI = parseInt(MinutoInicial);
    var HF = parseInt(horaFinal);
    var MF = parseInt(MinutoFinal);

    if(HI > HF) {
        var duracaohora1 = HI-HF;
        console.log(duracaohora1);
        var duracaohora = 24-duracaohora1;
        duracaohora = duracaohora*60;
        console.log(duracaohora);
    } else {
        var Totalminutosinciais = (HI*60)+MI;
    var Totalminutosfinais = (HF*60)+MF;
    var duracaohora = Totalminutosfinais-Totalminutosinciais;
    }
   
    
   
    
    

    txtresultado.value = duracaohora.toString();
}