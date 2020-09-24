const showArgs = () => {
    if (process.argv.length != 6) {
        console.log(`usage: node showArgs.js not working`)
        process.exit(1)
    }

    let string = process.argv.splice(2).reverse()
    string.forEach((el) => console.log(el))
}

showArgs()

//we use the loops to display the values of the arrays.

// either use a for loop or forEach
/*  
for (let i = 0; i < string.length; i += 1) {
    console.log(string[i])
 }
 */
