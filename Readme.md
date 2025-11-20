# Daily JavaScript Practice – README

This repository contains my **daily JavaScript practice questions**, starting from beginner level and gradually increasing in difficulty. The goal is to build strong problem-solving skills, learn core JavaScript concepts, and improve logic step by step.

---

## 📅 Day 1 – Beginner Level

### **1️⃣ Print numbers from 1 to 10**

**Problem:**
Write a program to print numbers from **1 to 10**.

**Logic Explanation:**
A loop repeats a block of code. If we want to print numbers in a sequence, we just:

* Start from 1
* Continue until 10
* Print each value on every iteration

**Example Solution (for loop):**

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

**Example Solution (while loop):**

```js
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
```

---

### **2️⃣ Sum of All Elements in an Array**

**Problem:**
Given an array of numbers, find the **sum** of all elements.

**Logic Explanation:**
An array contains multiple values. To find the sum:

* Start with `sum = 0`
* Loop over the array
* Add each element to `sum`

**Example Solution (for loop):**

```js
let arr = [1,2,3,4,4,5,6,7,8];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);
```

**Example Solution (reduce):**

```js
const total = arr.reduce((acc, curr) => acc + curr, 0);
console.log(total);
```

`reduce()` processes each element and accumulates the result.

---

### **3️⃣ Count Vowels in a String**

**Problem:**
Given a string, count how many **vowels** (a, e, i, o, u) are present.

**Logic Explanation:**
Vowels are specific characters. To count them:

* Loop through each character of the string
* Check if the cha


# Day 2 - JavaScript Practice

This file contains:

* Updated **README.md** section for Day 2
* Clean, corrected, optimized **JavaScript solutions** for all Day 2 questions

---

## 📌 README.md (Updated)

### **Day 2 – Easy JavaScript Practice Questions**

Today you solved the following beginner-friendly JavaScript problems:

#### **1️⃣ Check whether a number is Even or Odd**

* Used the modulo operator `%` to determine divisibility.
* Implemented both **if-else** and **short (ternary) versions**.

#### **2️⃣ Find the Largest of Two Numbers**

* Compared values using `>` operator.
* Wrote both a normal function and a ternary operator version.

#### **3️⃣ Reverse a String**

* Solved using:

  * Forward loop
  * Backward loop
  * Built-in methods: `split()`, `reverse()`, `join()`

#### **4️⃣ Sum of Digits of a Number**

* Implemented using:

  * Iterative approach with modulo + division
  * Recursive approach without using any global variables

You learned:

* Avoid using global variables inside functions
* Importance of clean logic
* String manipulation
* Basic loops
* Recursion fundamentals

---

# 📌 Day 2 – JavaScript Solutions (All Code in One File)

```js
// -----------------------------------------------------
// 1️⃣ Check Even or Odd
// -----------------------------------------------------

function checkOddEven(num) {
    if (num % 2 === 0) {
        return `${num} is even`;
    } else {
        return `${num} is odd`;
    }
}

// Short Version
function isEven(num) {
    return num % 2 === 0;
}

console.log(checkOddEven(21));
console.log(isEven(50));


// -----------------------------------------------------
// 2️⃣ Find the Largest of Two Numbers
// -----------------------------------------------------

function findLargest(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// Short version using ternary operator
function findLargestShort(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log(findLargestShort(203, 40));
console.log(findLargest(555, 8988));


// -----------------------------------------------------
// 3️⃣ Reverse a String (3 Ways)
// -----------------------------------------------------

// Method 1 — Forward loop
function reverseString(str) {
    let reversed = "";
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}

console.log(reverseString("hello"));

// Method 2 — Backward loop
function reverseString2(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString2("hello"));

// Method 3 — Built-in methods
console.log("function".split("").reverse().join(""));


// -----------------------------------------------------
// 4️⃣ Sum of Digits (Iterative + Recursive)
// -----------------------------------------------------

// Iterative
function sumOfDigit(num) {
    let sum = 0;

    while (num > 0) {
        let digit = num % 10; // extract last digit
        sum += digit;
        num = Math.floor(num / 10); // remove last digit
    }

    return sum;
}

console.log(sumOfDigit(1236));

// Recursive
function recSumOfDigit(num) {
    if (num === 0) return 0;
    return (num % 10) + recSumOfDigit(Math.floor(num / 10));
}

console.log(recSumOfDigit(1234));
```
