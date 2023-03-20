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