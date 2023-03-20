/*  'every()'
The every() method executes a function for each array element.
The every() method returns true if the function returns true for all elements.
The every() method returns false if the function returns false for one element.
The every() method does not execute the function for empty elements.
The every() method does not change the original array
The sintax and the parameters and return value are same as the comand '.filter()' */
const idades = [32, 33, 16, 40];
document.getElementById("demo").innerHTML = idades.every(checkAge);
function checkAge(idade) {
    return idade > 18;
}