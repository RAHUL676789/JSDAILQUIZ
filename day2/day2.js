// day2.js — JavaScript practice code for Day 2

// 1️⃣ Even / Odd Number
function checkOddEven(num) {
    if (num % 2 === 0) {
        return `${num} is even`;
    } else {
        return `${num} is odd`;
    }
}

// Short version
function isEven(num) {
    return num % 2 === 0;
}

console.log(checkOddEven(21));
console.log(isEven(50));

// 2️⃣ Find the Largest of Two Numbers
function findLargest(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// Shorter version (ternary)
function findLargestShort(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log(findLargestShort(203, 40));
console.log(findLargest(555, 8988));

// 3️⃣ Reverse a String
function reverseString(str) {
    let reversed = "";
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}

console.log(reverseString("hello"));

function reverseString2(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString2("hello"));

console.log("function".split("").reverse().join(""));

// 4️⃣ Sum of Digits
function sumOfDigit(num) {
    let sum = 0;
    while (num > 0) {
        let digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(sumOfDigit(1236));

function recSumOfDigit(num) {
    if (num === 0) return 0;
    return (num % 10) + recSumOfDigit(Math.floor(num / 10));
}

console.log(recSumOfDigit(1234));
