const arr1 = [1, 2, 3, 4, 5]
const arr2 = [6, 7, 8, 9, 10]

const sum = (arr) => arr.reduce((sum, x) => sum + x)
console.log("Sum = " + sum(arr1))

const some = (arr, condition) => arr.reduce((y, x) => y || condition(x), false)
console.log("Some = " + some(arr1, x => x > 3))

const max = (arr) => arr.reduce((y, x) => Math.max(x, y))
console.log("Max = " + max(arr1))

const concat = (arr1, arr2) => arr2.reduce((y, x) => {
    y.push(x)
    return y
}, arr1)
console.log("Concat = " + concat(arr1, arr2))