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