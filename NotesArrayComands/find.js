/*  'find()'
The find() method returns the value of the first element that passes a test.
The find() method executes a function for each array element.
The find() method returns undefined if no elements are found.
The find() method does not execute the function for empty elements.
The find() method does not change the original array. 
The sintax and the parameters and return value are same as the comand '.filter()' */
const ns = [3, 10, 18, 20];
document.getElementById("demo").innerHTML = ns.find(checkAge);
function checkAge(n) {
    return n > 18;
}