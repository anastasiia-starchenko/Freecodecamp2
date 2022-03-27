/*We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. 
The lowest number will not always come first.*/

function sumAll(arr) {
  let sum = 0, a, b;
  if (arr[0] < arr[1]) {
    a = arr[0];
    b = arr[1];
  } else {
    b = arr[0];
    a = arr[1];
  }
  for(let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}
