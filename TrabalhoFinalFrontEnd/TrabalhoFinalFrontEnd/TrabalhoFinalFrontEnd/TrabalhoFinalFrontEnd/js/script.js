var vetorProdutos = new Array();
var vetorString = new Array();
var vetorCarrinho = new Array();
var vetorUsuarios = new Array();

function CriaProdutosPadrao() {
    var divCard = document.getElementById('cardizin'); 
    var usuario1 = new Users("Gustavo", "Cruelgudoidao", 123);
    vetorUsuarios.push(usuario1);
    var produto1 = new Produto(1, 'Moletom Beatles', 'Moletom', 'Moletom Preto e Branco com logo dos Beatle e capuz', 320.00, '/TrabalhoFinalFrontEnd/TrabalhoFinalFrontEnd/images/moletombeatles.jpg', 4, 'true');
    var produto2 = new Produto(2,  'Calça Nirvana','Calca', 'Calca Nirvana de moletom larga preta', 120.00, '/TrabalhoFinalFrontEnd/TrabalhoFinalFrontEnd/images/calcaNirvana.jpg', 2, 'true');
    var produto3 = new Produto(3,  'Camisa Arctic Monkeys','Camisa', 'Camisa Artic Monkeys Branca Manga Curta', 180.00, '/TrabalhoFinalFrontEnd/TrabalhoFinalFrontEnd/images/camisaBrancaArctic.jfif', 2, 'true');
    var produto4 = new Produto(4,  'Moletom One Direction','Moletom', 'Moletom One Direction Branco com capuz', 350.00, '/TrabalhoFinalFrontEnd/TrabalhoFinalFrontEnd/images/one.webp', 2, 'true');
    var produto5 = new Produto(5,  'Moletom The Weeknd ','Moletom', 'Moletom The Weeknd Starboy preto e vermelho com capuz', 350.00, '/TrabalhoFinalFrontEnd/TrabalhoFinalFrontEnd/images/moletomStarboy.webp', 2, 'true');
    var produto6 = new Produto(6,  'Moletom Twenty One Pilots','Moletom', 'Moletom Twenty One Pilots amarelo e preto com capuz', 290.00, '/TrabalhoFinalFrontEnd/TrabalhoFinalFrontEnd/images/twenty.webp', 2, 'true');
    var produto7 = new Produto(7,  'Moletom Drake','Moletom', 'Moletom Drake preto com capuz', 490.00, '/TrabalhoFinalFrontEnd/TrabalhoFinalFrontEnd/images/drakeMoletom.jpg', 2, 'true');
    var produto8 = new Produto(8,  'Camisa Oasis','Camisa', 'Camisa Oasis estampada branco de manga curta', 90.00, '/TrabalhoFinalFrontEnd/TrabalhoFinalFrontEnd/images/oasisShirt.webp', 2, 'true');


    vetorProdutos.push(produto1);
    vetorProdutos.push(produto2);
    vetorProdutos.push(produto3);
    vetorProdutos.push(produto4);
    vetorProdutos.push(produto5);
    vetorProdutos.push(produto6);
    vetorProdutos.push(produto7);
    vetorProdutos.push(produto8);
   
    for(let i = 0; i < vetorProdutos.length; i++) {
        if(vetorProdutos[i].vitrine == 'true') {
            str = '<div class="card" id="cardFundo" style="width: 18rem;" > <img src="'+ vetorProdutos[i].imagem + '"  class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title nomeTXT" style="text-align=center;">'+ vetorProdutos[i].nome+ '</h5> <p class="card-text descricaoTXT">' + vetorProdutos[i].descricao + '</p></div> <ul class="list-group list-group-flush"> <li class="list-group-item tipoTXT"> Categoria: ' + vetorProdutos[i].tipo + '</li> <li class="list-group-item valorTXT"> Valor: R$:' + vetorProdutos[i].valor + '</li> <li class="list-group-item disponivelTXT"> Quantidade Disponível: ' + vetorProdutos[i].qtdEstoque + '</li></ul> <button id="botaoAdicionaCarrinho" type="button" onclick="AdicionaCarrinho('+ vetorProdutos[i].codigo +')" class="btn btn-light addCarinho">Adicionar ao Carrinho</button> </div>';
            //vetorString.push(str);
            divCard.innerHTML += str
        }
       
    }

   
   
   // var grandeString  = vetorString.toString();
    //divCard.innerHTML = grandeString;


} 

///botaoLoga
$(document).ready(function(){

    $('#botaoLoga').click(function(){
        var cadastrado = false;
        var usernameInput = $('.usernameTXT').val();
        var senhaInput = $('.senhaTXT').val();

        console.log(usernameInput);
        console.log(senhaInput);

        for (let i = 0; i < vetorUsuarios.length; i++) {
            if (usernameInput == vetorUsuarios[i].username && senhaInput == vetorUsuarios[i].senha) {
                cadastrado = true;
            }
        }
        
         console.log('ELE ESTA CADASTRADO?? ' + cadastrado)

         if(cadastrado == true) {
            someTelaSenhaShowTelaUserAdmin() 
         } else {
            alert("Senha ou Username incorretos")
         }
    })

})

function AdicionaCarrinho(codigo) {
    var contadorCompras = $("#contagemCompras").text();
       contadorCompras = parseInt(contadorCompras)+1;
       $("#contagemCompras").text(contadorCompras.toString());//contadorCompras.toString());
        console.log(contadorCompras)
        console.log('FUI CLICADO PARA ADICIONAR NO CARRIMHO');
        
    var achou = false;
    var codigoProduto = codigo;
    console.log('CODIGO DO PRODUTO = '+ codigo);
    if(vetorCarrinho.length == 0) {
        var compra = new Carrinho(vetorProdutos[codigoProduto-1].codigo, vetorProdutos[codigoProduto-1].imagem, vetorProdutos[codigoProduto-1].nome, vetorProdutos[codigoProduto-1].descricao, 1, vetorProdutos[codigoProduto-1].qtdEstoque, vetorProdutos[codigoProduto-1].valor)
        vetorCarrinho.push(compra);
    } else {
        for (let i = 0; i < vetorCarrinho.length; i++) {
            if(vetorCarrinho[i].codigo == codigo) {

                achou = true;
                vetorCarrinho[i].quantidade++;
            }
        }

        if(achou == false) {
            var compra = new Carrinho(vetorProdutos[codigoProduto-1].codigo, vetorProdutos[codigoProduto-1].imagem, vetorProdutos[codigoProduto-1].nome, vetorProdutos[codigoProduto-1].descricao, 1,vetorProdutos[codigoProduto-1].qtdEstoque, vetorProdutos[codigoProduto-1].valor)
            vetorCarrinho.push(compra);
        }
    }
    

   /* var compra = new Carrinho(vetorProdutos[codigoProduto-1].codigo, vetorProdutos[codigoProduto-1].imagem, vetorProdutos[codigoProduto-1].nome, vetorProdutos[codigoProduto-1].descricao, vetorProdutos[codigoProduto-1].valor)
    vetorCarrinho.push(compra);*/
    
    var styleCss =  document.getElementById('csss')
    console.log(vetorCarrinho)
    

}

function DarkMode() {
    $("#csss").attr("href", "/TrabalhoFinalFrontEnd/TrabalhoFinalFrontEnd/css/styleDark.css")
    // var head = $('header');
    var head = document.querySelector('header');
    head.innerHTML =  '<nav class="navbar navbar-light bg-light navbar navbar-expand-lg bg-light"><div class="container-fluid"><a class="navbar-brand" href="#"></a><img id="loguinho" src="/TrabalhoFinalFrontEnd/TrabalhoFinalFrontEnd/images/starboy.jpg" alt="Bootstrap" width="50" height="50"><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item">             <a class="nav-link active bg-white btn-white text-dark " style="margin-top: 10px; margin-left: 10px;" aria-current="page" href="#">Home</a>           </li>           <li class="nav-item">             <a class="nav-link bg-white btn-white text-dark"  style="margin-top: 10px; " href="/TrabalhoFinalFrontEnd/TrabalhoFinalFrontEnd/html/teste.html">Entrar</a>           </li>           <li class="nav-item dropdown">  <a class="nav-link dropdown-toggle bg-white btn-white text-dark" style="margin-top: 10px;" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">               Filtrar             </a>             <ul class="dropdown-menu btn-dark text-white">               <li><button class="dropdown-item" id="camisaFiltro" onclick href="#">Camisetas</button></li>               <li><button class="dropdown-item" id="moletomFiltro" href="#">Moletons</button></li>               <li><button class="dropdown-item" id="calcaFiltro" href="#">Calças</button></li>               <li><hr class="dropdown-divider"></li>               <li><button class="dropdown-item" id="menorPrecoFiltro" href="#">Menor Preço</button></li>               <li><button class="dropdown-item" id="maiorPrecoFiltro">Maior Preço</button></li>             </ul>           </li>                   </ul>         <button id="botao" class="btn btn-dark" onclick="DayMode()" type="submit">Modo Claro</button>         <button id="bt" style="margin-right: 20px;" type="button" class="btn position-relative">          <img src="/TrabalhoFinalFrontEnd/TrabalhoFinalFrontEnd/images/CarrinhoPreto.png" alt="">                      <span id="contagemCompras" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">0</span>         </button>         <form class="d-flex" role="search">           <input class="form-control me-2" type="search" placeholder="Produto" aria-label="Search">           <button id="botao" class="btn btn-dark" type="submit">Procurar</button>         </form>       </div>     </div>   </nav>' 
    
}

function DayMode() {
    $("#csss").attr("href", "/TrabalhoFinalFrontEnd/TrabalhoFinalFrontEnd/css/style.css")
    var head = document.querySelector('header');
     head.innerHTML = '<nav class="navbar navbar-dark bg-dark navbar navbar-expand-lg bg-light"><div class="container-fluid"><a class="navbar-brand" href="#"></a><img id="loguinho" src="/TrabalhoFinalFrontEnd/TrabalhoFinalFrontEnd/images/starboy.jpg" alt="Bootstrap" width="50" height="50"><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item"><a class="nav-link active" style="margin-top: 10px; color: white;" aria-current="page" href="#">Home</a></li> <li class="nav-item"><a class="nav-link" style="margin-top: 10px; color: white;" href="/TrabalhoFinalFrontEnd/TrabalhoFinalFrontEnd/html/teste.html">Entrar</a></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" style="margin-top: 10px; color: white; " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">                     Filtrar                   </a>                   <ul class="dropdown-menu">                     <li><button class="dropdown-item" id="camisaFiltro" href="#">Camisetas</button></li>                     <li><button class="dropdown-item" id="moletomFiltro" href="#">Moletons</button></li>                     <li><button class="dropdown-item" id="calcaFiltro" href="#">Calças</button></li>                     <li><hr class="dropdown-divider"></li>                     <li><button class="dropdown-item" id="menorPrecoFiltro" href="#">Menor Preço</button></li>                     <li><button class="dropdown-item" id="maiorPrecoFiltro">Maior Preço</button></li>                   </ul>                 </li>                               </ul>               <button id="botao" class="btn btn-light" onclick="DarkMode()" type="submit">Modo Noturno</button>               <button id="bt" style="margin-right: 20px;" type="button" class="btn position-relative">                <img src="/TrabalhoFinalFrontEnd/TrabalhoFinalFrontEnd/images/icons8-carrinho-de-compras-32.png" alt="">                                  <span id="contagemCompras" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">0</span>               </button>               <form class="d-flex" role="search">                 <input class="form-control me-2" type="search" placeholder="Produto" aria-label="Search">                 <button id="botao" class="btn btn-light" type="submit">Procurar</button>  </form></div> </div> </nav>';
}

$(document).ready(function(){
    $("#maiorPrecoFiltro").click(function(){
    
        vetorProdutos.sort(function(a, b){return b.valor - a.valor});
        var divCard = document.getElementById('cardizin'); 
        vetorString = [];
        for(let i = 0; i < vetorProdutos.length; i++) {
            str = '<div class="card" style="width: 18rem;"> <img src="'+ vetorProdutos[i].imagem + '"  class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title nomeTXT" style="text-align=center;">'+ vetorProdutos[i].nome+ '</h5> <p class="card-text descricaoTXT">' + vetorProdutos[i].descricao + '</p></div> <ul class="list-group list-group-flush"> <li class="list-group-item tipoTXT"> Categoria: ' + vetorProdutos[i].tipo + '</li> <li class="list-group-item valorTXT"> Valor: R$:' + vetorProdutos[i].valor + '</li> <li class="list-group-item disponivelTXT"> Quantidade Disponível: ' + vetorProdutos[i].qtdEstoque + '</li></ul> <button id="botaoAdicionaCarrinho" type="button" onclick="AdicionaCarrinho('+ vetorProdutos[i].codigo +')" class="btn btn-light addCarinho">Adicionar ao Carrinho</button> </div>';
            vetorString.push(str);
            
        }
    
       
       
        var grandeString  = vetorString.toString();
        divCard.innerHTML = grandeString;


    });
    });

    $(document).ready(function(){
        $("#menorPrecoFiltro").click(function(){
        
            vetorProdutos.sort(function(a, b){return  a.valor - b.valor});
            var divCard = document.getElementById('cardizin'); 
            vetorString = [];
            for(let i = 0; i < vetorProdutos.length; i++) {
                str = '<div class="card" style="width: 18rem;"> <img src="'+ vetorProdutos[i].imagem + '"  class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title nomeTXT" style="text-align=center;">'+ vetorProdutos[i].nome+ '</h5> <p class="card-text descricaoTXT">' + vetorProdutos[i].descricao + '</p></div> <ul class="list-group list-group-flush"> <li class="list-group-item tipoTXT"> Categoria: ' + vetorProdutos[i].tipo + '</li> <li class="list-group-item valorTXT"> Valor: R$:' + vetorProdutos[i].valor + '</li> <li class="list-group-item disponivelTXT"> Quantidade Disponível: ' + vetorProdutos[i].qtdEstoque + '</li></ul> <button id="botaoAdicionaCarrinho" type="button" onclick="AdicionaCarrinho('+ vetorProdutos[i].codigo +')" class="btn btn-light addCarinho">Adicionar ao Carrinho</button> </div>';
                vetorString.push(str);
                
            }
        
           
           
            var grandeString  = vetorString.toString();
            divCard.innerHTML = grandeString;
    
    
        });
        });


        $(document).ready(function(){
            $("#camisaFiltro").click(function(){
            
               
                var divCard = document.getElementById('cardizin'); 
                vetorString = [];
                
                for(let i = 0; i < vetorProdutos.length; i++) {
                    if (vetorProdutos[i].tipo == 'Camisa') {
                        str = '<div class="card" style="width: 18rem;"> <img src="'+ vetorProdutos[i].imagem + '"  class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title nomeTXT" style="text-align=center;">'+ vetorProdutos[i].nome+ '</h5> <p class="card-text descricaoTXT">' + vetorProdutos[i].descricao + '</p></div> <ul class="list-group list-group-flush"> <li class="list-group-item tipoTXT"> Categoria: ' + vetorProdutos[i].tipo + '</li> <li class="list-group-item valorTXT"> Valor: R$:' + vetorProdutos[i].valor + '</li> <li class="list-group-item disponivelTXT"> Quantidade Disponível: ' + vetorProdutos[i].qtdEstoque + '</li></ul> <button id="botaoAdicionaCarrinho" type="button" onclick="AdicionaCarrinho('+ vetorProdutos[i].codigo +')" class="btn btn-light addCarinho">Adicionar ao Carrinho</button> </div>';
                       vetorString.push(str);    
                    }
                    
                    
                }
                
                var grandeString  = vetorString.toString();
                divCard.innerHTML = grandeString;
        
        
            });
            });

            $(document).ready(function(){
                $("#moletomFiltro").click(function(){
                
                   
                    var divCard = document.getElementById('cardizin'); 
                    vetorString = [];
                    
                    for(let i = 0; i < vetorProdutos.length; i++) {
                        if (vetorProdutos[i].tipo == 'Moletom') {
                            str = '<div class="card" style="width: 18rem;"> <img src="'+ vetorProdutos[i].imagem + '"  class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title nomeTXT" style="text-align=center;">'+ vetorProdutos[i].nome+ '</h5> <p class="card-text descricaoTXT">' + vetorProdutos[i].descricao + '</p></div> <ul class="list-group list-group-flush"> <li class="list-group-item tipoTXT"> Categoria: ' + vetorProdutos[i].tipo + '</li> <li class="list-group-item valorTXT"> Valor: R$:' + vetorProdutos[i].valor + '</li> <li class="list-group-item disponivelTXT"> Quantidade Disponível: ' + vetorProdutos[i].qtdEstoque + '</li></ul> <button id="botaoAdicionaCarrinho" type="button" onclick="AdicionaCarrinho('+ vetorProdutos[i].codigo +')" class="btn btn-light addCarinho">Adicionar ao Carrinho</button> </div>';
                            vetorString.push(str);    
                        }
                    }

                    var grandeString  = vetorString.toString();
                    divCard.innerHTML = grandeString;
                
                });
                });


                $(document).ready(function(){
                    $("#calcaFiltro").click(function(){
                    
                       
                        var divCard = document.getElementById('cardizin'); 
                        vetorString = [];
                        
                        for(let i = 0; i < vetorProdutos.length; i++) {
                            if (vetorProdutos[i].tipo == 'Calca') {
                                str = '<div class="card" style="width: 18rem;"> <img src="'+ vetorProdutos[i].imagem + '"  class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title nomeTXT" style="text-align=center;">'+ vetorProdutos[i].nome+ '</h5> <p class="card-text descricaoTXT">' + vetorProdutos[i].descricao + '</p></div> <ul class="list-group list-group-flush"> <li class="list-group-item tipoTXT"> Categoria: ' + vetorProdutos[i].tipo + '</li> <li class="list-group-item valorTXT"> Valor: R$:' + vetorProdutos[i].valor + '</li> <li class="list-group-item disponivelTXT"> Quantidade Disponível: ' + vetorProdutos[i].qtdEstoque + '</li></ul> <button id="botaoAdicionaCarrinho" type="button" onclick="AdicionaCarrinho('+ vetorProdutos[i].codigo +')" class="btn btn-light addCarinho">Adicionar ao Carrinho</button> </div>';
                                vetorString.push(str);    
                            }
                        }
    
                        var grandeString  = vetorString.toString();
                        divCard.innerHTML = grandeString;
                    
                    });
                    });


                    ///botaoEntrarMenuInicial
                    $(document).ready(function(){
                        $('#botaoEntrar').click(function(){
                            someTelaInicialShowTelaSenha();
                        })
                    })
 
                    ///botaoVoltaTelaInicial
                    $(document).ready(function(){
                        $('#botaoVoltaTI').click(function(){
                            someTelaSenhaShowTelaInicial();
                        })
                    })


function someTelaInicialShowTelaSenha() {
    var  divNav = document.getElementById("divNav");
    divNav.style.display = 'none';
    var telaInicial = document.getElementById("telaInicial");
    telaInicial.style.display = 'none';
    var telaSenha = document.getElementById("telaSenha")
    telaSenha.style.visibility = 'visible';
    telaSenha.style.display = 'inline'
    var corpo = document.getElementById('corpo');
    corpo.style.backgroundColor = '#f7ede2'

   
        
}

function someTelaSenhaShowTelaInicial() {
    var  divNav = document.getElementById("divNav");
    divNav.style.display = 'inline';
    var telaInicial = document.getElementById("telaInicial");
    telaInicial.style.display = 'inline';
    var telaSenha = document.getElementById("telaSenha")
    telaSenha.style.visibility = 'hidden';
    var corpo = document.getElementById('corpo');
    corpo.style.backgroundColor = '#f7ede2'
    var header = document.getElementById('header');
    header.innerHTML = ''
    header.innerHTML = '<nav class="navbar navbar-dark bg-dark navbar navbar-expand-lg"id="divNav" ><div class="container-fluid"><a class="navbar-brand" href="#"></a><img id="loguinho" src="/TrabalhoFinalFrontEnd/TrabalhoFinalFrontEnd/images/starboy.jpg" alt="Bootstrap" width="50" height="50">     <div class="collapse navbar-collapse" id="navbarSupportedContent">       <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item"><button class="nav-link active btn-dark text-light bg-dark" style="margin-top: 10px; margin-left: 10px; border-color: #292b2c"" aria-current="page" href="#">Home</button></li>  <li class="nav-item"><button class="nav-link active  btn-dark text-light bg-dark" style="margin-top: 10px; border-color: #292b2c" id="botaoEntrar"onclick="someTelaInicialShowTelaSenha()" >Entrar</button>         </li>         <li class="nav-item dropdown">           <a class="nav-link dropdown-toggle" style="margin-top: 10px; color: white; " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">             Filtrar           </a>           <ul class="dropdown-menu">             <li><button class="dropdown-item" id="camisaFiltro" href="#">Camisetas</button></li>             <li><button class="dropdown-item" id="moletomFiltro" href="#">Moletons</button></li>             <li><button class="dropdown-item" id="calcaFiltro" href="#">Calças</button></li>             <li><hr class="dropdown-divider"></li>             <li><button class="dropdown-item" id="menorPrecoFiltro" href="#">Menor Preço</button></li>             <li><button class="dropdown-item" id="maiorPrecoFiltro">Maior Preço</button></li></ul></li> </ul><button id="botao" class="btn btn-light" onclick="DarkMode()" type="submit">Noturno</button>            <button id="bt" style="margin-right: 20px;" type="button" class="btn position-relative" onclick="someTelaInicialShowTelaCompras()">        <img src="/TrabalhoFinalFrontEnd/TrabalhoFinalFrontEnd/images/icons8-carrinho-de-compras-32.png" alt="">          <span id="contagemCompras" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">0</span>       </button>        <form class="d-flex" role="search">         <input class="form-control me-2" type="text" placeholder="Produto" aria-label="Search" id="procurarProdutoTI">         <button id="botao" class="btn btn-light" onclick="procuraProdutoTI()" type="button">Procurar</button></form> </div></div> </nav>'
    
}

function someTelaSenhaShowTelaUserAdmin() {
    var telaSenha = document.getElementById("telaSenha")
    telaSenha.style.display = 'none'
    var telaAdmin = document.getElementById("telaAdmin");
    var  divNav = document.getElementById("divNav");
    divNav.style.display = 'none';
    telaAdmin.style.display = 'inline'
    var corpo = document.getElementById('corpo');
    corpo.style.backgroundColor = 'black'
    
    var InicioTelaAdmin = document.getElementById('InicioTelaAdmin');
    InicioTelaAdmin.style.display = 'inline'
   // corpo.style.backgroundColor = 'black'
   
}

/// todos os comandos da tela de admin
$(document).ready(function(){

    $('#cadastraUser').click(function(){

        var InicioTelaAdmin = document.getElementById("InicioTelaAdmin");
        InicioTelaAdmin.style.display = 'none'
        var TelaConsultaUsuarios  = document.getElementById("TelaConsultaUsuarios");
        TelaConsultaUsuarios.style.display = 'none'
        var telaCadastroUser = document.getElementById('telaCadastroUsuarios');
        telaCadastroUser.style.display = 'flex'
        var telaCadastroProduto = document.getElementById('telaCadastroProduto');
        telaCadastroProduto.style.display = 'none'
        var corpo = document.getElementById('corpo');
        corpo.style.backgroundColor = '#f7ede2'
        $('#botaoCadastraUserForm').click(function(){
            
            var nomeCadastro = $('.nomeTXTCadastro').val();
            var usernameCadastro = $('.usernameTXTCadastro').val();
            var senhaCadastro = $('.senhaTXTCadastro').val();
            var novoUsuario = new Users(nomeCadastro, usernameCadastro, senhaCadastro);
            vetorUsuarios.push(novoUsuario);
            
            if(vetorUsuarios[vetorUsuarios.length-1].nome == nomeCadastro ) {

                alert('Usuario Cadastrado')
            } else {
                alert('Algum problema aconteceu, usuário não cadastrado')
            }

            nomeCadastro = ''
            usernameCadastro = ''
            senhaCadastro =''

        })
    }) 

    $('#consultaUser').click(function(){

        var linhasTabelaUsuario = new Array();
        var InicioTelaAdmin = document.getElementById("InicioTelaAdmin");
        InicioTelaAdmin.style.display = 'none'
        var TelaConsultaUsuarios  = document.getElementById("TelaConsultaUsuarios");
        TelaConsultaUsuarios.style.display = 'none'
        var telaCadastroUser = document.getElementById('telaCadastroUsuarios');
        telaCadastroUser.style.display = 'none'
        var TelaConsultaUsuarios = document.getElementById('TelaConsultaUsuarios');
        var telaCadastroProduto = document.getElementById('telaCadastroProduto');
        telaCadastroProduto.style.display = 'none'
        var corpo = document.getElementById('corpo');
    corpo.style.backgroundColor = '#f7ede2'

        for (let i = 0; i < vetorUsuarios.length; i++) {
            
           
            str = '<tr><td>'+ vetorUsuarios[i].nome+' </td><td>'+vetorUsuarios[i].username+'</td> <td>'+vetorUsuarios[i].senha + '</td></tr>'
            
            linhasTabelaUsuario.push(str)
            console.log('aaaaaaaa')
        }
        
        linhas = linhasTabelaUsuario.toString();
        var comecoTabela = '<table id="tabelaUsuarios"  class="table table-dark table-striped"> <thead><th>Nome</th> <th>Username</th> <th>Senha</th> </thead><tbody>';
        var fimTabela = '</tbody> </table>'
        TelaConsultaUsuarios.innerHTML = comecoTabela + linhas + fimTabela;
        TelaConsultaUsuarios.style.display = 'flex';
    })

    $('#CadastraProduto').click(function(){
        var InicioTelaAdmin = document.getElementById("InicioTelaAdmin");
        InicioTelaAdmin.style.display = 'none'
        var TelaConsultaUsuarios  = document.getElementById("TelaConsultaUsuarios");
        TelaConsultaUsuarios.style.display = 'none'
        var telaCadastroUser = document.getElementById('telaCadastroUsuarios');
        telaCadastroUser.style.display = 'none'
        var telaCadastroProduto = document.getElementById('telaCadastroProduto');
        telaCadastroProduto.style.display = 'flex';
        var corpo = document.getElementById('corpo');
        corpo.style.backgroundColor = '#f7ede2'

        $('#botaoCadastraProduto').click(function(){
            console.log('pp');

            var nomeCadastradoProduto = $('.nomeProdutoTXT').val();
            var descricaoProdutoTXT = $('.descricaoProdutoTXT').val();
            var imagemProdutoTXT = $('.imagemProdutoTXT').val();
            var EstoqueProdutoTXT = $('.EstoqueProdutoTXT').val();
            var VitrineSelect = document.querySelector('.VitrineSelect');
            var TipoSelect = document.querySelector('.TipoSelect');
            var valorProduto = $('.valorProduto').val();
            var divCard = document.getElementById('cardizin'); 
            var corpo = document.getElementById('corpo');
        corpo.style.backgroundColor = '#f7ede2'

            var vitrine = VitrineSelect.options[VitrineSelect.selectedIndex].text;
            var tipo = TipoSelect.options[TipoSelect.selectedIndex].text;
            
            var novoProduto = new Produto(vetorProdutos[vetorProdutos.length-1].codigo+1, nomeCadastradoProduto, tipo, descricaoProdutoTXT, valorProduto, imagemProdutoTXT, EstoqueProdutoTXT, vitrine)
            
            vetorProdutos.push(novoProduto);   
            console.log(vetorProdutos[vetorProdutos.length-1].codigo);
            console.log(vetorProdutos[vetorProdutos.length-1].nome);
            console.log(vetorProdutos[vetorProdutos.length-1].descricao);
            divCard.innerHTML = ''
             
            for(let i = 0; i < vetorProdutos.length; i++) {
                if(vetorProdutos[i].vitrine == 'true') {
                    str = '<div class="card" id="cardFundo" style="width: 18rem;" > <img src="'+ vetorProdutos[i].imagem + '"  class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title nomeTXT" style="text-align=center;">'+ vetorProdutos[i].nome+ '</h5> <p class="card-text descricaoTXT">' + vetorProdutos[i].descricao + '</p></div> <ul class="list-group list-group-flush"> <li class="list-group-item tipoTXT"> Categoria: ' + vetorProdutos[i].tipo + '</li> <li class="list-group-item valorTXT"> Valor: R$:' + vetorProdutos[i].valor + '</li> <li class="list-group-item disponivelTXT"> Quantidade Disponível: ' + vetorProdutos[i].qtdEstoque + '</li></ul> <button id="botaoAdicionaCarrinho" type="button" onclick="AdicionaCarrinho('+ vetorProdutos[i].codigo +')" class="btn btn-light addCarinho">Adicionar ao Carrinho</button> </div>';
                    //vetorString.push(str);
                    divCard.innerHTML += str
                    console.log(vetorProdutos[i].descricao)
                    
                }
            }

            

         
           // console.log(divCard.innerHTML)
            
           alert('PRODUTO CADASTRADO')

        }) 
    })

    $('#voltaTelaInicialProd').click(function(){
        voltaTelaInicialAdmin();
        
    })

     
})

function excluiUsuario(q) {
    var cd = codigo;
    console.log(q)
}



function voltaTelaInicialAdmin() {
    var telaInicial = document.getElementById('telaInicial')
    telaInicial.style.display = 'inline';
    var telaAdmin = document.getElementById('telaAdmin')
    telaAdmin.style.display = 'none'
    var divNav = document.getElementById('divNav');
    divNav.style.display = 'inline'
    var InicioTelaAdmin = document.getElementById("InicioTelaAdmin");
        InicioTelaAdmin.style.display = 'none'
        var TelaConsultaUsuarios  = document.getElementById("TelaConsultaUsuarios");
        TelaConsultaUsuarios.style.display = 'none'
        var telaCadastroUser = document.getElementById('telaCadastroUsuarios');
        telaCadastroUser.style.display = 'none'
        var telaCadastroProduto = document.getElementById('telaCadastroProduto');
        telaCadastroProduto.style.display = 'none'
        var header = document.getElementById('header');
        header.innerHTML = ''
        header.innerHTML = '<nav class="navbar navbar-dark bg-dark navbar navbar-expand-lg"id="divNav" ><div class="container-fluid"><a class="navbar-brand" href="#"></a><img id="loguinho" src="/TrabalhoFinalFrontEnd/TrabalhoFinalFrontEnd/images/starboy.jpg" alt="Bootstrap" width="50" height="50">     <div class="collapse navbar-collapse" id="navbarSupportedContent">       <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item"><button class="nav-link active btn-dark text-light bg-dark" style="margin-top: 10px; margin-left: 10px; border-color: #292b2c"" aria-current="page" href="#">Home</button></li>  <li class="nav-item"><button class="nav-link active  btn-dark text-light bg-dark" style="margin-top: 10px; border-color: #292b2c" id="botaoEntrar"onclick="someTelaInicialShowTelaSenha()" >Entrar</button>         </li>         <li class="nav-item dropdown">           <a class="nav-link dropdown-toggle" style="margin-top: 10px; color: white; " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">             Filtrar           </a>           <ul class="dropdown-menu">             <li><button class="dropdown-item" id="camisaFiltro" href="#">Camisetas</button></li>             <li><button class="dropdown-item" id="moletomFiltro" href="#">Moletons</button></li>             <li><button class="dropdown-item" id="calcaFiltro" href="#">Calças</button></li>             <li><hr class="dropdown-divider"></li>             <li><button class="dropdown-item" id="menorPrecoFiltro" href="#">Menor Preço</button></li>             <li><button class="dropdown-item" id="maiorPrecoFiltro">Maior Preço</button></li></ul></li> </ul><button id="botao" class="btn btn-light" onclick="DarkMode()" type="submit">Noturno</button>            <button id="bt" style="margin-right: 20px;" type="button" class="btn position-relative" onclick="someTelaInicialShowTelaCompras()">        <img src="/TrabalhoFinalFrontEnd/TrabalhoFinalFrontEnd/images/icons8-carrinho-de-compras-32.png" alt="">          <span id="contagemCompras" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">0</span>       </button>        <form class="d-flex" role="search">         <input class="form-control me-2" type="text" placeholder="Produto" aria-label="Search" id="procurarProdutoTI">         <button id="botao" class="btn btn-light" onclick="procuraProdutoTI()" type="button">Procurar</button></form> </div></div> </nav>'
        var corpo = document.getElementById('corpo');
        corpo.style.backgroundColor = '#f7ede2'

    
    

 
}

///pesquisar tela inicial
function procuraProdutoTI() {
    
    var inputTXT = document.getElementById("procurarProdutoTI").value;
    console.log(inputTXT);
    vetorString = [];
    var tem = false;
    var divCard = document.getElementById('cardizin'); 
    for (let i = 0; i < vetorProdutos.length; i++) {
        
        if (vetorProdutos[i].nome.includes(inputTXT) ) {
            str = '<div class="card" style="width: 18rem;"> <img src="'+ vetorProdutos[i].imagem + '"  class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title nomeTXT" style="text-align=center;">'+ vetorProdutos[i].nome+ '</h5> <p class="card-text descricaoTXT">' + vetorProdutos[i].descricao + '</p></div> <ul class="list-group list-group-flush"> <li class="list-group-item tipoTXT"> Categoria: ' + vetorProdutos[i].tipo + '</li> <li class="list-group-item valorTXT"> Valor: R$:' + vetorProdutos[i].valor + '</li> <li class="list-group-item disponivelTXT"> Quantidade Disponível: ' + vetorProdutos[i].qtdEstoque + '</li></ul> <button id="botaoAdicionaCarrinho" type="button" onclick="AdicionaCarrinho('+ vetorProdutos[i].codigo +')" class="btn btn-light addCarinho">Adicionar ao Carrinho</button> </div>';
                vetorString.push(str);
                var grandeString  = vetorString.toString();
            divCard.innerHTML = grandeString;
            console.log(vetorProdutos[i].nome)
            tem = true;
        }
    }

    if(tem == false) {
        alert('nenhum produto com esse nome encontrado.')
    }
    console.log(tem)
} 


function someTelaInicialShowTelaCompras() {

    var  divNav = document.getElementById("divNav");
    divNav.style.display = 'none';
    var telaInicial = document.getElementById("telaInicial");
    telaInicial.style.display = 'none';
    var telaCompras = document.getElementById('telaCompras');
    telaCompras.style.display = 'flex';
    var carrinhoTC = document.getElementById('ConteudoTelaCompras');
    let valorTotal = 0;
    var vetorStringTable = new Array();
    var contador = 0
    var produtoDuplicado = ''
    var vetorProdutosDuplicados = new Array();
     var strTdsCod = new Array();



   

   
    var strComecoTabela = '<table class="table table-dark table-striped-columns" id="tabelaCompras"><thead><th> </th><th>Produto</th><th>Quantidade</th><th>Total</th> </thead><tbody>'
    for(let i = 0; i < vetorCarrinho.length; i++) {
    if(vetorCarrinho[i].quantidade > 0) {
        for(let j = 0; j < vetorProdutos.length; j++) {

            if(vetorCarrinho[i].codigo == vetorProdutos[j].codigo) {

                vetorCarrinho[i].valor =    parseInt(vetorProdutos[j].valor)  * parseInt(vetorCarrinho[i].quantidade);
  
            }

           /* console.log('A QUANTIDADE NESTE MOMENTO É DE : ' + vetorCarrinho[i].quantidade)
            vetorCarrinho[i].valor =    parseInt(vetorProdutos[vetorCarrinho[i].codigo])  * parseInt(vetorCarrinho[i].quantidade);
                console.log('entrei aqui');*/
        }
    
    }
     var str = `<tr>
     <td> <button id="btCancela"  onclick="removeItemCarrinho(${vetorCarrinho[i].codigo})" style=" margin-top:35px;height: 32px; width: 32px; background-image: url('/TrabalhoFinalFrontEnd/TrabalhoFinalFrontEnd/images/icons8-cancelar-32\ \(1\).png');" class="bg-dark border-dark border-0"></button> </td>
     <td id="linhaProduto"> <img src="${vetorCarrinho[i].imagem}" alt=""> 
       <h3 id="nomeTD">${vetorCarrinho[i].nome}</h3> <p>${vetorCarrinho[i].descricao}</p> </td>
     <td id="tdQUANTIDADE" > <button id="btDiminui" style="margin-top:10px;height: 38px; width: 38px; background-image: url('/TrabalhoFinalFrontEnd/TrabalhoFinalFrontEnd/images/icons8-sinal-de-menos-32\ \(1\).png');" onclick="DiminuiQntd(${vetorCarrinho[i].codigo})" > </button> ${vetorCarrinho[i].quantidade}  <button  id="btAumenta" class="bg-dark" onclick="AumentaQntd(${vetorCarrinho[i].codigo})"  style="margin-top:10px;height: 38px; width: 38px; background-image: url('/TrabalhoFinalFrontEnd/TrabalhoFinalFrontEnd/images/icons8-mais-32\ \(3\).png');"></button> </button> </td>
     <td id="totalTD">R$ ${vetorCarrinho[i].valor}</td>
   </tr>`;
     vetorStringTable.push(str)
    valorTotal += vetorCarrinho[i].valor;

    }
     
     var strFimTabela = `<tfoot>
     <tr> 
       <td colspan="3"> Preço Total do Carrinho:  </td>
       <td> R$${valorTotal}</td>
     </tr>
   </tfoot>
  </table>`
    var linhas = vetorStringTable.toString();
    carrinhoTC.innerHTML = strComecoTabela + linhas + strFimTabela;
    console.log('QUANTIDADE NA SEGUNDA CHAMADA ' + vetorCarrinho)
}

function compraRealizada() {
    var divCard = document.getElementById('cardizin'); 
    divCard.innerHTML = ''

    

    for (let i = 0; i < vetorCarrinho.length; i++) {
        if(parseInt(vetorCarrinho[i].estoque)- parseInt(vetorCarrinho[i].quantidade) < 0) {
            alert('Quantidade requirida maior do que quantidade em estoque.');
            console.log('LEONARDO')
            return null
        }   

        for(let j = 0; j < vetorProdutos.length; j++) {
            if(vetorCarrinho[i].codigo == vetorProdutos[j].codigo) {
                vetorProdutos[j].qtdEstoque = parseInt(vetorProdutos[j].qtdEstoque)-parseInt(vetorCarrinho[i].quantidade);    
                 console.log('Carlos')
            }
        
        if(vetorProdutos[j].qtdEstoque < 1) {
            vetorProdutos.splice(j, 1);
            console.log('SPLICE')
        }
        }

       
    }

    var telaCompras = document.getElementById('telaCompras');
    telaCompras.style.display = 'none';
    var telaInicial = document.getElementById('telaInicial');
    telaInicial.style.display = 'inline';
    var divNav = document.getElementById('divNav')
    divNav.style.display = 'inline';

    for(let i = 0; i < vetorProdutos.length; i++) {
        if(vetorProdutos[i].vitrine == 'true') {
            str = '<div class="card" id="cardFundo" style="width: 18rem;" > <img src="'+ vetorProdutos[i].imagem + '"  class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title nomeTXT" style="text-align=center;">'+ vetorProdutos[i].nome+ '</h5> <p class="card-text descricaoTXT">' + vetorProdutos[i].descricao + '</p></div> <ul class="list-group list-group-flush"> <li class="list-group-item tipoTXT"> Categoria: ' + vetorProdutos[i].tipo + '</li> <li class="list-group-item valorTXT"> Valor: R$:' + vetorProdutos[i].valor + '</li> <li class="list-group-item disponivelTXT"> Quantidade Disponível: ' + vetorProdutos[i].qtdEstoque + '</li></ul> <button id="botaoAdicionaCarrinho" type="button" onclick="AdicionaCarrinho('+ vetorProdutos[i].codigo +')" class="btn btn-light addCarinho">Adicionar ao Carrinho</button> </div>';
            //vetorString.push(str);
            divCard.innerHTML += str
        }
       
    }

    vetorCarrinho = [];
    console.log(vetorCarrinho);
    var header = document.getElementById('header');
    header.innerHTML = ''
    header.innerHTML = '<nav class="navbar navbar-dark bg-dark navbar navbar-expand-lg"id="divNav" ><div class="container-fluid"><a class="navbar-brand" href="#"></a><img id="loguinho" src="/TrabalhoFinalFrontEnd/TrabalhoFinalFrontEnd/images/starboy.jpg" alt="Bootstrap" width="50" height="50">     <div class="collapse navbar-collapse" id="navbarSupportedContent">       <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item"><button class="nav-link active btn-dark text-light bg-dark" style="margin-top: 10px; margin-left: 10px; border-color: #292b2c"" aria-current="page" href="#">Home</button></li>  <li class="nav-item"><button class="nav-link active  btn-dark text-light bg-dark" style="margin-top: 10px; border-color: #292b2c" id="botaoEntrar"onclick="someTelaInicialShowTelaSenha()" >Entrar</button>         </li>         <li class="nav-item dropdown">           <a class="nav-link dropdown-toggle" style="margin-top: 10px; color: white; " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">             Filtrar           </a>           <ul class="dropdown-menu">             <li><button class="dropdown-item" id="camisaFiltro" href="#">Camisetas</button></li>             <li><button class="dropdown-item" id="moletomFiltro" href="#">Moletons</button></li>             <li><button class="dropdown-item" id="calcaFiltro" href="#">Calças</button></li>             <li><hr class="dropdown-divider"></li>             <li><button class="dropdown-item" id="menorPrecoFiltro" href="#">Menor Preço</button></li>             <li><button class="dropdown-item" id="maiorPrecoFiltro">Maior Preço</button></li></ul></li> </ul><button id="botao" class="btn btn-light" onclick="DarkMode()" type="submit">Noturno</button>            <button id="bt" style="margin-right: 20px;" type="button" class="btn position-relative" onclick="someTelaInicialShowTelaCompras()">        <img src="/TrabalhoFinalFrontEnd/TrabalhoFinalFrontEnd/images/icons8-carrinho-de-compras-32.png" alt="">          <span id="contagemCompras" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">0</span>       </button>        <form class="d-flex" role="search">         <input class="form-control me-2" type="text" placeholder="Produto" aria-label="Search" id="procurarProdutoTI">         <button id="botao" class="btn btn-light" onclick="procuraProdutoTI()" type="button">Procurar</button></form> </div></div> </nav>'
    
    $("#contagemCompras").text('0');
}

function DiminuiQntd(codigo) {

    var btMenos = document.getElementById('btDiminui');
    var tdQNTD = document.getElementById('tdQUANTIDADE');
     console.log(codigo);
     
   for(let i = 0; i < vetorCarrinho.length; i++) {

    if(vetorCarrinho[i].codigo == codigo) {
        
        if(vetorCarrinho[i].quantidade > 1) {
          
         // vetorCarrinho[i].valor = parseInt(vetorCarrinho[i].valor)-(parseInt(vetorProdutos[i].valor));
          vetorCarrinho[i].quantidade =  vetorCarrinho[i].quantidade-1;
        } else {
            vetorCarrinho.splice(i, 1);
        }
    }

   }
    someTelaInicialShowTelaCompras();
}

function AumentaQntd(cod) {
    for(let i = 0; i < vetorCarrinho.length; i++) {
        if(vetorCarrinho[i].codigo == cod) {
              
           //   vetorCarrinho[i].valor = parseInt(vetorCarrinho[i].valor)+(parseInt(vetorProdutos[i].valor));
              vetorCarrinho[i].quantidade =  vetorCarrinho[i].quantidade+1;
        }
       }
       someTelaInicialShowTelaCompras();
}

function cancelarCompra() {
    var telaCompras = document.getElementById('telaCompras');
    telaCompras.style.display = 'none';
    var telaInicial = document.getElementById('telaInicial');
    telaInicial.style.display = 'inline';
    var divNav = document.getElementById('divNav')
    divNav.style.display = 'inline';

    vetorCarrinho = [];
    console.log(vetorCarrinho);
    
    //contadorCompras.toString());
     
    var header = document.getElementById('header');
    header.innerHTML = ''
    header.innerHTML = '<nav class="navbar navbar-dark bg-dark navbar navbar-expand-lg"id="divNav" ><div class="container-fluid"><a class="navbar-brand" href="#"></a><img id="loguinho" src="/TrabalhoFinalFrontEnd/TrabalhoFinalFrontEnd/images/starboy.jpg" alt="Bootstrap" width="50" height="50">     <div class="collapse navbar-collapse" id="navbarSupportedContent">       <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item"><button class="nav-link active btn-dark text-light bg-dark" style="margin-top: 10px; margin-left: 10px; border-color: #292b2c"" aria-current="page" href="#">Home</button></li>  <li class="nav-item"><button class="nav-link active  btn-dark text-light bg-dark" style="margin-top: 10px; border-color: #292b2c" id="botaoEntrar"onclick="someTelaInicialShowTelaSenha()" >Entrar</button>         </li>         <li class="nav-item dropdown">           <a class="nav-link dropdown-toggle" style="margin-top: 10px; color: white; " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">             Filtrar           </a>           <ul class="dropdown-menu">             <li><button class="dropdown-item" id="camisaFiltro" href="#">Camisetas</button></li>             <li><button class="dropdown-item" id="moletomFiltro" href="#">Moletons</button></li>             <li><button class="dropdown-item" id="calcaFiltro" href="#">Calças</button></li>             <li><hr class="dropdown-divider"></li>             <li><button class="dropdown-item" id="menorPrecoFiltro" href="#">Menor Preço</button></li>             <li><button class="dropdown-item" id="maiorPrecoFiltro">Maior Preço</button></li></ul></li> </ul><button id="botao" class="btn btn-light" onclick="DarkMode()" type="submit">Noturno</button>            <button id="bt" style="margin-right: 20px;" type="button" class="btn position-relative" onclick="someTelaInicialShowTelaCompras()">        <img src="/TrabalhoFinalFrontEnd/TrabalhoFinalFrontEnd/images/icons8-carrinho-de-compras-32.png" alt="">          <span id="contagemCompras" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">0</span>       </button>        <form class="d-flex" role="search">         <input class="form-control me-2" type="text" placeholder="Produto" aria-label="Search" id="procurarProdutoTI">         <button id="botao" class="btn btn-light" onclick="procuraProdutoTI()" type="button">Procurar</button></form> </div></div> </nav>'
    $("#contagemCompras").text('0');
}

function removeItemCarrinho(cod) {
    var btCancela = document.getElementById('btCancela');

    console.log('uga buga')
    console.log(cod)


    for (let i = 0; i < vetorCarrinho.length; i++) {
        
        if(vetorCarrinho[i].codigo == cod) {
            vetorCarrinho.splice(i, 1);
        }
    }
    

someTelaInicialShowTelaCompras();
    
}