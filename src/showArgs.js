/* 1. Receive all the arguments
let string = process.argv
//console.log(string)

// 2. Remove unwanted elements
let shorterstring = string.splice(2)


//3. Sort descening
shorterstring.sort((a, b) => b - a)


//4. See result
console.log('shorty', shorterstring)
*/

if (process.argv.length != 6) {
    console.log(`usage: node showArgs.js not working`)
    process.exit(1)
}

let string = process.argv.splice(2)
let content = string.reverse()
console.log(content)
