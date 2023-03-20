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
    { firstname: "Malcom", lastname: "Reynolds" },
    { firstname: "Kaylee", lastname: "Frye" },
    { firstname: "Jayne", lastname: "Cobb" }
];

persons.map(getFullName);

function getFullName(item) {
    return [item.firstname, item.lastname].join(" ");
}