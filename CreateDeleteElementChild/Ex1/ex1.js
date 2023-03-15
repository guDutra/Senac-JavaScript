
var text = document.getElementById('texto')

var lista = document.getElementsByTagName('ol')

let i = 0

function addText(){

    if(text.value != ""){

        var elemento = document.createElement('li')

        var text1 = document.createTextNode(text.value)

        elemento.appendChild(text1)
    
        lista[lista.length-1].appendChild(elemento)

        i++

        
    }else{
        alert('paraaaaa')
    }

}

function exclui(){
    var text1 = text.value

    var itemparaexcluir = document.getElementsByTagName('li')

    if(text.value != ""){

        var pos = 0

        for(let i = 0; i<itemparaexcluir.length;i++){

            if(itemparaexcluir[i].innerHTML == text1){
                pos = i
                break
            }

        }

       var lista1 = itemparaexcluir[pos].parentNode

        lista1.removeChild(itemparaexcluir[pos])

    }else{
        alert('paraaaa')
    }
}