// USEFUL JAVASCRIPT FUNCTIONS
// SOURCE: https://javascript.plainenglish.io/12-important-javascript-functions-every-web-developer-should-know-e488c4bbf521

// 1- Shorten the console.log
const log = console.log.bind(document)
log("Hey")

// 2- Merge two arrays into one
const arr1 = [0,1,2]
const arr2 = [3,4,5]
const mergedArr = arr1.concat(arr2)
log(mergedArr)

// 3- Merge two objects into one
const nameObj = {
  name: "Med"
}
const ageObj = {
  age: 26
}
const mergedObjs = {...nameObj, ...ageObj}
log(mergedObjs)

// 4- Shorten an array
const arrayEx = [0,1,2,3,4,5,6,7,8,9]
arrayEx.length = 3
log(arrayEx)

// 5- Shuffle an array
const arrayEx2 = [0,1,2,3,4,5]
arrayEx2.sort(() => { return Math.random() - 0.5 })
log(arrayEx2)

// 6- Use isNum to verify a number
function isNum(n) { return !isNaN(parseFloat(n)) && isFinite(n) }
log(isNum(2))
log(isNum("hey"))

// 7- Use isStr to verify a string
const isStr = value => typeof value === "string"
log(isStr(12))
log(isStr("12"))

// 8- Use isNull
const isNull = value => value === null || value === undefined
log(isNull(12)) // false
log(isNull(null)) // true

// 9- Calculate the performance of a function
const start = performance.now()
// some program
const end = performance.now()
const total = start - end
log(total)

// 10- Remove duplicates from an array
const delDuplicates = array => [...new Set(array)]
array23 = [0,0,1,1,2,2,3,3]
log(delDuplicates(array23)) // output => [0,1,2]
log(array23)
