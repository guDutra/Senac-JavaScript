/*   '.concat()'
The concat() method concatenates (joins) two or more arrays.
The concat() method returns a new array, containing the joined arrays.
The concat() method does not change the existing arrays.*/
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];
const children = arr1.concat(arr2, arr3);
console.log(children);
// -------------------------------------------------------------------------//

/* '.filter()' 
The filter() method creates a new array filled with elements that pass a test provided by a function.
The filter() method does not execute the function for empty elements.
The filter() method does not change the original array. 
Sintax --> array.filter(function(currentValue, index, arr), thisValue)
currentValue	REQUIRED -> The value of the current element.
index	OPTIONAL -> The index of the current element.
arr	OPTIONAL -> The array of the current element.
thisValue	OPTIONAL -> Default undefined A value passed to the function as its this value. 
RETURN VALUE
Array -> An array	Containing the elements that pass the test. If no elements pass the test it returns an empty array.*/
const ages = [32, 33, 16, 40];
document.getElementById("demo").innerHTML = ages.filter(checkAdult);
function checkAdult(age) {
  return age >= 18;
}
// -------------------------------------------------------------------------//

/* 'copyWithin()' 
The copyWithin() method copies array elements to another position in the array.
The copyWithin() method overwrites the existing values.
The copyWithin() method does not add items to the array.*/
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.copyWithin(2,0); // Primeiro parametro é oq vai ser substituido segundo parametro é o que vai torna aonde ser substituido 
// -------------------------------------------------------------------------//

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

// -------------------------------------------------------------------------//

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
// -------------------------------------------------------------------------//

/* 'findIndex()' 
The findIndex() method executes a function for each array element.
The findIndex() method returns the index (position) of the first element that passes a test.
The findIndex() method returns -1 if no match is found.
The findIndex() method does not execute the function for empty array elements.
The findIndex() method does not change the original array.
The sintax and the parameters are same as the comand '.filter()' 
RETURN VALUE 
A number	The index of the first element that passes the test. Otherwise -1. */
const nums = [3, 10, 18, 20];
document.getElementById("demo").innerHTML = nums.findIndex(checkAge);
function checkAge(nu) {
  return nu > 18;
}
// -------------------------------------------------------------------------//
/* 'Array.from()'
The Array.from() method returns an array from any object with a length property.
The Array.from() method returns an array from any iterable object.
Sintax -> Array.from(object, mapFunction, thisValue)
object	REQUIRED -> The object to convert to an array. 
mapFunction	OPTIONAL -> A map function to call on each item.
thisValue	OPTIONAL -> A value to use as thisfor the mapFunction
RETURN VALUE 
Array -> An array	with the values from the iterable object.*/
let text = "ABCDEFG"
const myArr = Array.from(text);
document.getElementById("demo").innerHTML = myArr;

/* 'includes()' 
The includes() method returns true if an array contains a specified value.
The includes() method returns false if the value is not found.
The includes() method is case sensitive. 
Syntax -->  array.includes(element, start) 
element	REQUIRED -> The value to search for.
start	OPTIONAL -> Start position. Default is 0.
RETURN VALUE 
boolean	-> true if the value is found, otherwise false.*/
const frutas = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = frutas.includes("Banana", 3);
// -------------------------------------------------------------------------//

/* '.indexOf()' é igual ao findIndex() */
// -------------------------------------------------------------------------//

/* '.isArray()'
The isArray() method returns true if an object is an array, otherwise false.
Syntax -> Array.isArray(obj)
obj	REQUIRED -> An object (or any data type) to be tested.
Return Value
Boolean	-> true if the object is an array, otherwise false.
*/
// -------------------------------------------------------------------------//

/* '.join()' 
The join() method returns an array as a string.
The join() method does not change the original array.
Any separator can be specified. The default is comma (,).
Syntax -> array.join(separator)
Return Value
String ->	The array values, separated by the specified separator.*/
const alimentos = ["Banana", "Orange", "Apple", "Mango"];
let texto = alimentos.join(" and ");
console.log()
// -------------------------------------------------------------------------//

/* '.lastIndexOf()' 
The lastIndexOf() method returns the last index (position) of a specified value.
Return Value
Number ->	The position of the specified item. -1 if the item is not found. */
const f = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
let index = f.lastIndexOf("Apple");
// -------------------------------------------------------------------------//

/* '.map()' 
map() creates a new array from calling a function for every array element.
map() calls a function once for each element in an array.
map() does not execute the function for empty elements.
map() does not change the original array.
Syntax -> array.map(function(currentValue, index, arr), thisValue)
function()	REQUIRED. -> A function to be run for each array element.
currentValue	REQUIRED. -> The value of the current element.
index	OPTIONAL -> The index of the current element.
arr	OPTIONAL. -> The array of the current element.
thisValue	OPTIONAL. ->Default value undefined. A value passed to the function to be used as its this value. 
Return Value
Array	-> with the results of a function for each array element. */
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)
function myFunction(num) {
  return num * 10;
}
//--- Another example:
const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

persons.map(getFullName);

function getFullName(item) {
  return [item.firstname,item.lastname].join(" ");
}
// -------------------------------------------------------------------------//

/* '.pop() 
The pop() method removes (pops) the last element of an array.
The pop() method changes the original array.
The pop() method returns the removed element.*/

/*'.reverse() 
The reverse() method reverses the order of the elements in an array.
The reverse() method overwrites the original array. */
const fru = ["Banana", "Orange", "Apple", "Mango"];
fru.reverse();
// -------------------------------------------------------------------------//