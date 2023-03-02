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
