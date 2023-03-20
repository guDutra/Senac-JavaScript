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