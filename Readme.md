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
