
 
txt = 'LARANJA';

var CharCode = txt.CharCodeAt(1);//Return:65 --- Código da string: neste caso o código do 'A' maiusculo é 65 
var ind = txt.indexOf('R'); // Return:2 -- Retorna a posição aonde foi encontrada a string informada
var ind2 = txt.indexOf('JA') // Return: 5 --- Retorna a posição aonde foi encontrada a string informada neste caso como tem 2 letra ele retorna a primeira posição que é aonde aparece o J
var ind3 = txt.indexOf('A', 2) //      
var pos_last = txt.lastIndexOf('A'); /// Return 6 -- ultimo indice aonde achou o string informado
var pos_last2  = txt.lastIndexOf('A', pos_last); //Return: 3 -- Retorna primeira aparição da string informada apartir dpo parametro da posição do ultimo para o primeiro por ser lastIndexOf
//------------------------------------------------------------------

// SUBSTRINGS

var substring = txt.substring(4);// Return: 'NJA' -- Retorna uma string que foi determina apartir do parametro passado que é o indice da string
var substring2 = txt.substring(2,5);// Return:'RAN' -- Retorna uma string entre as 2 posições, não retorna a ultima posição neste caso a posição 5 que é 'J'
txt2 = 'BANANA';
txt2 = txt.Trim(); /// Tira os espaços vazios da string caso ajá um;
exp = '2+5*3';
valor = eval(exp); /// Return:17 -- Transforma a string em expressão e retorna o resultado dela.


var frase = 'the book is on the table'
var fraseV = frase.split('') /// transforma cada lete da string em uma posição em um vetor
var frase2 = fraseV.join('*') /// vai junta todas as strings do vetor e colocar um '*' entre elas.
frase = frase.replace('table', 'chair');/// substitui palavra table por chair















