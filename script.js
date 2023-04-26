"use strict";

// Question no : 1 .Write a function that given the input string name, returns the greeting statement Hello, <name> how are you doing today?
// solution
const greet = () => {
  var firstName = document.getElementById("greet").value;
  document.getElementById("text1").innerHTML =
    "hello " + firstName + " how are you doing today?";
};

// Question no : 2. Given a word, your job is to return the middle character(s) of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// solution

const middleString = () => {
  var letter = document.getElementById("input").value;
  const text = letter.length;
  if (text % 2 != 0) {
    var start = (text - 1) / 2;
    document.getElementById("text2").innerHTML =
      "Result : " + letter.slice(start, start + 1);
  } else {
    var start = text / 2 - 1;
    document.getElementById("text2").innerHTML =
      "Result : " + letter.slice(start, start + 2);
  }
};

// Question no: 3 Return the number (count) of vowels (a, e, i, o, u) in the given string. The input string will only consist of lower case letters and/or spaces. for example - console.log(getCount('my pyx')); // 0
// solution

const vowels = ["a", "e", "i", "o", "u"];
let count = 0;
const countVowel = () => {
  var letter = document.getElementById("inputstring").value;

  for (let character of letter.toLowerCase()) {
    if (vowels.includes(character)) {
      count++;
    }
  }
  document.getElementById("text3").innerHTML = "Number of Vowels : " + count;
};

// Question no: 4 Write a JavaScript program to display the current day and time in the following format.
// solution

const dateTime = () => {
  var today = new Date();
  document.getElementById("date").innerHTML = today;
};

// Question no: 5 Given a string of space-separated numbers, write a function that returns the highest and lowest numbers. There will always be at least one number in the input string.
// solution

const arr = [24, 67, 89, 65, 43, 55, 21, 98];
const highestLowest = (values) => {
  var max = [0];
  for (let i = 0; i < arr.length; i++) {
    if (values[i] > max) {
      max = values[i];
    }
  }
  document.getElementById("text4").innerHTML = "Number of Vowels : " + max;
};

// Question no: 6 Write a function that capitalizes each word in a given input string.

const str = "How can mirrors be real if our eyes aren't real";

const output = (str) => {
  return str
    .split(" ")
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join(" ");
};
console.log(output(str));
// second method of question 5th
// const arr = str.split(" ");

// for(var i =0; i< arr.length; i++){
//   arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// }
// const str2 = arr.join(" ");
// console.log(str2);

// Question no: 7 Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".

const fizzBuzz = () => {
  for (var i = 0; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else console.log(i);
  }
};
console.log(fizzBuzz(8));

// Question no : 8 Given a non-empty string of words, return the length of the shortest word(s).

const findShort = (str) => {
  const arr = str.split(" ");
  const orderSort = arr.sort((a, b) => {
    return a.length - b.length;
  });
  return orderSort[0].length;
};
console.log(findShort("Test where final word shortest see"));

// Question no: 9 Given an array of numbers, write a function that returns the sum of all of the positives ones. If the array is empty, the sum should be 0

const positiveSum = (arr) => {
  return arr.reduce((a, b) => a + b);
};
console.log(positiveSum([1, 2, 3, 4, 5]));

// Question 10: Write a function that takes any non-negative integer as an argument and returns it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

const descendingOrder = (n) => {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => a - b)
      .reverse()
      .join("")
  );
};

console.log(descendingOrder(1021));

// Question 11: Write a function that reverses the string that is passed to it. For this challenge, you may NOT use the JavaScript built-in reverse() method.

const reverseString = (str) => {
  if (str === "") {
    return "";
  } else return reverseString(str.slice(1)) + str.charAt(0);
};
console.log(reverseString("hello"));

// Question 12: Write a function that given an array of users, returns an array of their names. Can you achieve this in one line of code?
const users = [
  {
    id: 1,
    name: "Alice",
    startDate: "2021-01-03",
  },
  {
    id: 2,
    name: "Bob",
    startDate: "2020-02-01",
  },
  {
    id: 3,
    name: "Claire",
    startDate: "2019-03-01",
  },
];

const obj = users.map((x) => x.name);
console.log(obj);

// Question 13: Write a function that accepts two strings and returns true if some or all of the characters in the first string can be rearranged to match the second string.

const scramble = (str1, str2) => {
  if (str1.includes(str2)) {
    console.log(true);
  } else console.log(false);
};

console.log(scramble("scriptjava", "javascript"));

// Question 14 Write a function that given an integer array nums of length n, returns an array of length 2n where nums is concatenated to itself. Do not use concat method.

const getConcatenation = (string, nums) => {
  if (nums > 0) {
    return string.repeat(nums);
  } else {
    return " ";
  }
};

console.log(getConcatenation("abcd", 2));

// Question 15 Write a function that given an input URL, returns its domain name.
const domainName = (url) => {
  return url.replace(/.+\/\/|www.|\..+/g, "");
};
console.log(domainName("www.google.ca"));

// Question 16 Implement a function that takes an iterable argument (a string or an array) as input and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

const uniqueInOrder = (iterable) => {
  const string = Array.isArray(iterable) ? iterable : iterable.split("");
  const unique = string.filter((letter, i) => {
    return string[i] !== string[i + 1];
  });
  return unique;
};
console.log(uniqueInOrder("ABBCcAD"));

// Question 17 Write a function that will return the count of distinct case-insensitive alphanumeric characters that occur more than once in the input string.

const duplicateCount = (text) => {
  var str = text.toUpperCase().split("").sort().join("");
  var arr = str.match(/(.)\1+/g);
  if (arr == null) {
    return 0;
  } else {
    return arr.length;
  }
};
console.log(duplicateCount("abA11"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcdeE"));

// Question 18 Find a second largest number in array
function secondLargest(arr) {
  arr.sort();
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] != arr[i - 1]) {
      return arr[i];
    }
  }
}

arr = [4, 2, 1, 3, 5];
console.log(`The second largest element is: ${secondLargest(arr)}`);
