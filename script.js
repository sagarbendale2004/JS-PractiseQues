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
// let filters = [...new Set(arr)]     // Set is an object
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

// Ques - To find longest common string from array of strings function longestCommonString

// const longestCommonString = (arr) => {
//     let sortedArr = arr.sort();
//     console.log(sortedArr);
//     let i = 0;
//     while(sortedArr[0].length > 0 && sortedArr[0].charAt(i)===sortedArr[sortedArr.length-1].charAt(i)){
//         i++;
//     }
//     console.log(sortedArr[0].substring(0, i));
// }

// longestCommonString(["", "amari", "mburgar", "m", "er"]);

// Code 17: To find vowels and its count in a given string

// const vowels = "a,e,i,o,u";
// let count = 0;
// const checkCount = (str) => {
//   for (let elem of str) {
//     if (vowels.includes(elem)) {
//       count++;
//       console.log(elem);
//     }
//   }
//   console.log(count);
// };
// checkCount("sare icecream to jarur khayenge");

// Code 18: To find character occurance from the string
// let occTime = 0;
// let index = 0;
// const checkOcc = (str, char) => {
//   for (let letter of str) {
//     if (char.includes(letter)) {
//       occTime++;
//       index = str.indexOf(letter);
//     }
//   }
//   console.log(`Character found at index - ${index} and it occurs ${occTime} times`);
// };
// checkOcc("sagarBendale", "a");

// Code 19: To find a first pair whose sum is zero
// let findPair = (arr) => {
//    for(let first of arr) {
//     for(let i = 1; i<arr.length; i++) {
//        if(first + arr[i] === 0) {
//         console.log(first, arr[i]);
//        }
//     }
//    }
// }
// findPair([-3,-4,0,-6,-2,-1,-2,2,4,-6,8]);

// Code 20: To find a first pair whose sum is zero using indexing //Firstly do a sort here
// function getSumPairZero(array)
// {
//   let left = 0;
//   let right = array.length-1;
//   while(left<right)
//   {
//     sum = array[left]+array[right]
//     if(sum===0){
//        return [array[left],array[right]]
//     }else if(sum>0){
//       right--;
//     }else{
//       left++;
//     }
//   }
// }
// const result = getSumPairZero([-5,-4,-3,-2,-1,0,2,4,6,8])
// console.log(result)

// Code 24: Fibonacci Series (0,1,1,2,3,5,8,13....)
// let arr = [];
// let n1 = 0;
// let n2 = 1;
// arr.push(n1);
// arr.push(n2);
// let nextItem;
// let fib = (n) => {
//   for (i = 0; i <= n; i++) {
//     nextItem = n1 + n2;
//     n1 = n2;
//     n2 = nextItem;
//     arr.push(nextItem);
//   }
//   console.log(arr);
// };
// fib(10);

// Code 26: Finding a missing elements in an array and then add with existing elements.
// let findMissing = (arr) => {
//     let newArr = arr.sort((a, b) => a-b);
//     let missing = [];
//     let max = Math.max(...arr);
//     console.log(newArr);
//     for(i = 1; i <= max; i++) {
//         if(arr.indexOf(i) == -1){
//             missing.push(i);
//         }
//     }
//     console.log(arr.concat(missing).sort((a,b)=> a-b));
// }

// findMissing([2,4,16,18,10,12,14]);

// Code 33: Find first duplicate element from an array of Numbers

// function firstDuplicate() {
//     let arr = [1,2,2,5,5];
//     let data = {};
//     for (var item of arr) {
//         if (data[item]) {
//             return item
//         } else {
//             data[item] = item
//             console.log(data[item])
//         }
//     }
//     return -1
// }
// console.log(firstDuplicate()) 


// Code 41: Print string n times using inbuilt function

// const printStr = (str, n) => {
//     while(n < 1) {
//         console.log("small no");
//         break;
//     }
//     let rep = str.repeat(n);
//     console.log("" + rep + "");
// }
// printStr("sagar", 10);