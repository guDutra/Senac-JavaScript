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