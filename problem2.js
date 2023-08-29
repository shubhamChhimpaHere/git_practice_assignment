// Problem 2 : Check whether a string is palindrome or not.

let str = 'naman';
let rev = '';

for(let i = str.length-1; i>=0; i--) {
  rev += str[i];
}

if(rev == str) {
  console.log(str, ' is  palindrome ')
}
else {
  console.log(str, 'is not palindrome')
  
}