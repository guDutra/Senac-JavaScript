/*   '.concat()'
The concat() method concatenates (joins) two or more arrays.
The concat() method returns a new array, containing the joined arrays.
The concat() method does not change the existing arrays.*/
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];
const children = arr1.concat(arr2, arr3);
console.log(children);