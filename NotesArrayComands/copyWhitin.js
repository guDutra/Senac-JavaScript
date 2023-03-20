/* 'copyWithin()' 
The copyWithin() method copies array elements to another position in the array.
The copyWithin() method overwrites the existing values.
The copyWithin() method does not add items to the array.*/
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.copyWithin(2, 0); // Primeiro parametro é oq vai ser substituido segundo parametro é o que vai torna aonde ser substituido 
