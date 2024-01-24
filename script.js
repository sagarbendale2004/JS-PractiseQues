// let p1 = new Promise((resolve, reject) => {
//   let a = Math.floor(Math.random() * 10);
//   console.log(a);
//   a < 5
//     ? setTimeout(() => {
//         console.log("Yes I am Done");
//         resolve("ok p1");
//       }, 2000)
//     : reject("errror aaya hai...");
// });
// let p2 = new Promise((resolve, reject) => {
//   let a = Math.floor(Math.random() * 10);
//   console.log(a);
//   a < 10
//     ? setTimeout(() => {
//         console.log("Yes I am Done 2");
//         resolve("ok p2");
//       }, 1000)
//     : reject("errror aaya hai... 2");
// });

// let p3 = Promise.race([p1, p2])
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Weather data...");
//       resolve(200);
//     }, 4000);
//   });
// }

// async function getWeatherData() {
//   await api();
// }
// getWeatherData();

// Code 1: Remove Duplicate characters from String

// let str = "sagar bendale";
// let str1 = str.split(" ").join("");     //If we have an whitespaces in given string
// let filteredStr = str1.split("").filter((val, idx) => {
//     return str1.indexOf(val) == idx;
// })
// console.log(filteredStr);

// another mtd -
// let str = "SagarBendale";
// let arr = str.split("");
// let filters = [...new Set(arr)]
// console.log(filters);

// Code 2: Remove Duplicate characters from array of element and find the count of an elements using set object

// var arr = [55, 44, 55,67,67,67,67,8,8,8,8,8,65,1,2,3,3,34,5];
// let filterd = [...new Set(arr)]
// console.log(filterd);

// Code 4: String reverse without reversing of individual words (Array of elements can be reverse with reverse() method but for string it is won't possible so required to split
// and then join().

// const rev = (str) => {
//     // let str = "hello Sagar how are you";
//     let arr = str.split("").reverse().join("").split(" ").reverse().join(" ");
//     console.log(arr);
// }
// rev("hello sagar");

// Code 5:String reverse with reversing of individual words
// let str = "hello world"
// let rev = str.split("").reverse().join(" ");
// console.log(rev);

// Code 6:String reverse without using inbult function
// const revFunc = () => {
//     let str = "my name is Sagar";
//     let arr = "";
//     for(let i = str.length-1; i>=0; i--) {
//         arr = arr + str[i];
//     }
//     return arr;
// }
// console.log(revFunc());

// Code 7: Find factorial of user input number

// const factorial = (val) => {
//     let fact=1;
//     for(let i = 1 ; i<=val; i++) {
//         fact = fact * i;
//     }
//    console.log("fact -", fact);
// }

// factorial(6);

// Code 8:check Anagram
// function checkStringsAnagram() {
//   var a = "Army";
//   var b = "Mary";
//   let str1 = a.toLowerCase().split("").sort().join("");
//   let str2 = b.toLowerCase().split("").sort().join("");
//   if (str1 === str2) {
//     console.log("True");
//   } else {
//     console.log("False");
//   }
// }
// checkStringsAnagram()

// Code 9: Swapping of 2 numbers with third variable
// let a = 20;
// let b = 32;
// let c = a; // c = 20
// a = b; // a = 32
// b = c; // b = 20

// console.log(a);
// console.log(b);

// Code 10: Swapping of 2 numbers without third variable
// let a = 13;
// let b = 24;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// Code 11: To check the string or number is palindrome or not( ex: 121,madam,anna) using reverse method

// const palindromeCheck = (str, num) => {
//     let revStr = str.split("").reverse().join("");

//     let revNum = num.toString();
//     reverseNum = revNum.split("").reverse().join("");
//     str === revStr ? console.log("Palindrome") : console.log("not a Palindrome");
//     num === Number(reverseNum) ? console.log("Palindrome") : console.log("not a Palindrome");
// }
// palindromeCheck("mom" , 212);

// To check the string or number is palindrome or not( ex: 121,madam,anna) using dividing length by 2 and then comparing function checkPalindrome

// let palindromeCheck = (str) => {
//     let len = str.length;
//     for(let i=0 ; i<len/2; i++){
//         str[i] !== str[len-1-i] ? console.log("not Palindrome") : console.log("palindrome");
//     }
// }
// palindromeCheck("saras")

// Code 13: To find longest word from a string using (for of) for(var i=0; i>=num; i++) means iterate by indexing for (var word of words) means iterate by an elements not by indexing

// const longestWord = (str) => {
//   let longest = "";
//   let word = str.split(" ");
//   word.forEach((elem) => {
//     if (elem.length > longest.length) {
//       longest = elem;
//     }
//   });
//   console.log(longest.length);
//   word.forEach((word) => {
//      if(word.length === longest.length) {
//         console.log(word);
//      }
//   })
// };
// longestWord("my name is sagar rajesh bendale");


