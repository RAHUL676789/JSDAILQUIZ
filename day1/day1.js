// day 1 -> question no 1 print the no from 1 to 10 or any no ...

// logic is => if we know about the loop it will iterate over the condition means if we will set some conditions on the loop i will iterate over the loop so simply we will write a loop which start with 1 and end with 10;and print them 


// logic with for loop 
for(let i = 0; i<=10; i++){
    console.log(i);
}

// logic with while loop

let start = 1;
while(start <= 10){
    console.log(`\n ${start}`);
    start++;
}

// third solution for this question use recursion for this 

function print(num){
    if(num > 10)return;
    console.log(num)
    print(num + 1);
}

print(1);

// question no2 for day 1 sum of array number we have given an array we have find the sum of all element in the array 

// question no 2 this question also solve with loop we have to iterate over the array element just add with previous sum to arr[i]

let arr = [1,2,3,4,4,5,6,7,8]
let sum = 0;
for(let i = 0; i<arr.length;i++){
   sum+=arr[i]
}
console.log(`\n ${sum}`);

// for the advance we can you reduce method

//  reduce is on the most popular method in arr it has its a high order array method in the callback its has four params one is accumulator means current change / updating value and current means current array element index current element index and array means this or calling array so and second parame is starting value of accumulator 
const sum2 = arr.reduce((acc,curr)=>acc+curr,10);
console.log(sum2)

// question no 2 count the vowel in the string 

let vowel = 0;

let str =  'hellopoo';

for(let i = 0; i < str.length ; i++){
    if(str[i] === 'a' || str[i] === 'e' || str[i] === "i" || str[i] === "o" || str[i] === "u"){
        vowel++;
    }else if(str[i] === 'A' || str[i] === 'E' || str[i] === "I" || str[i] === "O" | str[i] === "U"){
        vowel++;
    }
}

console.log("vowel",vowel)

// simillar we have iterate ove the staring and check wether the current element of string is voewl or not

// second logic

let voewlStrin = 'aeiouAEIOU'
let secondvoew = 0;
for (let i = 0 ; i< str.length;i++){
    if(voewlStrin.includes(str[i])){
        secondvoew++;
}
}

console.log(secondvoew,"secondvoew")
