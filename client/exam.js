function calc(arr, x, y, z) {
  if (x) {
    // Calculate subarrays for x
    const xSubarrays = []
    for (let i = 0; i < arr.length - 1; i++) {
      xSubarrays.push([arr[i], arr[i + 1]])
    }
    console.log('Subarrays for x:', xSubarrays)
  }

  if (y) {
    // Calculate sum of subarray for y
    const ySubarray = arr.slice(2)
    const ySum = ySubarray.reduce((acc, current) => acc + current, 0)
    console.log('Subarray for y:', ySubarray)
    console.log('Sum for y:', ySum)
  }

  if (z) {
    // Calculate subarrays for z
    const zSubarrays = []
    for (let i = 0; i < arr.length - 2; i++) {
      zSubarrays.push([arr[i], arr[i + 1], arr[i + 2]])
    }
    console.log('Subarrays for z:', zSubarrays)
  }
}

const arr = [1, 2, 3, 4, 5]
calc(arr, 1, 1, 1)

/////////

function numbers(encripted_file, k, binary) {
  const n = encripted_file.map((binary) => {
    // Implement your encryption logic here.
    if (binary >= n) {
      return 1 // Number is encrypted.
    } else {
      return 0 // Number is unencrypted.
    }
  })

  console.log(n)
}

// Example usage:
const encripted_file = [12, 34, 56, 78]
const n = 42
const k = 7
const threshold = 50 // Adjust this threshold as needed.

const encryptedResults = numbers(encripted_num, n, k, threshold)
console.log(encryptedResults) // Output: [0, 0, 1, 1]
////

// my exam
function numbers(encripted_file, k, binary) {
  const n = {}
  for (let i = 0; i <= n.length - 1; i++) {
    console.log(n)
  }
  encripted_file.map((binary) => {
    // Implement your encryption logic here.
    if (binary >= k) {
      console.log(1) // Number is encrypted.
    } else {
      console.log(0) // Number is unencrypted.
    }
  })

  console.log(k)
}

// condition ? expressionIfTrue : expressionIfFalse

// const doubledNumbers = numbers.map(number => number * 2);

// const found = numbers.find(number => number > 25);

// const fruits = ['apple', 'banana', 'cherry', 'date'];

// fruits.forEach(fruit => {
//   if (fruit.includes('a')) {
//     console.log(fruit);
//   }
// });

const numbers = [1, 2, 3, 4, 5]

// Example 1: Logging each element
numbers.forEach(function (number) {
  console.log(number)
})

// Example 2: Doubling each element and creating a new array
const doubledNumbers = []
numbers.forEach(function (number) {
  doubledNumbers.push(number * 2)
})

console.log(doubledNumbers)
