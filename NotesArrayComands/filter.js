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