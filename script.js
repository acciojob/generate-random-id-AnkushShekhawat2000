// function makeid(l) {
//   // write your code here
// }

// // Do not change the code below.
// const l = prompt("Enter a number.");
// alert(makeid(l));




function makeid(l) {
  // Define characters that can be used in the random string
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  // Initialize an empty string to store the result
  let result = '';

  // Generate a random character of length l
  for (let i = 0; i < l; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

// Example
const l = prompt("Enter a number.");
alert(makeid(l));
