
// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21

// function reverseInteger(num) { // 123 -- output is going to be 321
//   let stringNum = num.toString();
//   let reversedStr = '';
//   for (let i = stringNum.length - 1; i >= 0; i--) { 12346541321316546876465416161313213216346456
//     if (stringNum[i] !== '0') {
//       // console.log(stringNum[i]);
//       reversedStr += stringNum[i];
//     }
//   }
//   if (num < 0) {
//     reversedStr = '-' + reversedStr
//   }
//   return parseInt(reversedStr);
// }


// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, 
// the function
// should return them in an array, in sorted order. If no two numbers sum up to the target sum, the function should return an empty array. Assume that there will be 
// at most one pair of numbers
// summing up to the target sum.

// sample input: [3, 5, -4, 8, 11, 1, -1, 6],  target: 9


// obj = {
//     3: true,
//     10: true,
// }

// if obj[target - array[i]] === true return [array[i], obj[target - array[i]]]




// function twoSum(array, target){
//     let memoizedValues = {}

//     // for (const num of array) {

//     // }

//     for (const num in array){
//       const potentialMatch = target - num;
//       if (potentialMatch in memoizedValues) {
//         return [potentialMatch, num].sort((x,y) => x - y)
//       } else {
//         memoizedValues[num] = true;
//       }
//     }
//     // console.log(memoizedValues);
//     return []
// }

// console.log(twoSum([3, 5, -4, 8, 11, 1, -1, 6], 10))

// 0n = the example solution I just gave
// nlogn = quick sort, or merge sort 


// require 'Set'

// function twoSum(array,target){

// let sortedArr = array.sort((x,y)=> x-y);
// let left = 0
// let right = sortedArr.length - 1
// let coords 
//     for (i=0; i < sortedArr.length; i++){
//       if (sortedArr[left] + sortedArr[right] > target){
//         right --
//       } else if (sortedArr[left] + sortedArr[right] < target){
//         left ++
//       }else if (sortedArr[left] + sortedArr[right] === target){
//         return [sortedArr[left], sortedArr[right]];
//       }
//     }
//     return [];
// }


// console.log(twoSum([3, 5, -4, 8, 11, 1, -1, 6], 10))






// Determine whether an integer is a palindrome.
// An integer is a palindrome when it reads 
// the same backward as forward.


//   Input: 121
// Output: true

// function isPal(integer) {
//   let input = integer.toString().split('');
//   let reversedInput = input.slice().reverse();

//   for (let i = 0; i < input.length; i++) {
//     if (input[i] !== reversedInput[i]) return false;
//   }
//   return true;
// }

// console.log(isPal(3))
// console.log(isPal(32))
// console.log(isPal(-121))
// console.log(isPal(121))

// input = input as array
// reversed = input array reversed
// if integer length is 1 return true
// for length of input 
// is any input[el] NOT === reversed[el]
// return false
// return true


// Input: -121
// Output: false

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left.Therefore it is not a palindrome.




// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//   Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.


// return false when... 
// there is only a left brace or a right brace 
// you are interupting an otherwise correct move 
// the next brace is different type and is a closing brace after having an open brace


// return true if there is exactly 1 left and right brace that isnt blocked by  
// a lone brace



// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//   Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.



// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true



// grab each character 
// determine if its a closing brace and there is an immediate closing brace,
// skip the next index as it is the closing brace 

class LinkedListNode{
  constructor(data){
    this.head = data; 
    this.next = null;
  }
}

let head = new LinkedListNode(5)
head.next = new LinkedListNode(10)
head.next.next = new LinkedListNode(15)

let current = head 
while (current !== null){
  console.log(current.head)
  current = current.next
}

