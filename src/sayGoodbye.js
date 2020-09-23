const NAME = 1
const NUMBERS = 2

let string = process.argv[2]

if (process.argv.length != 3) {
    console.log(`usage: only enter one name`)
    process.exit(NAME)
}

if (Number(process.argv[2])) {
    console.log(`Error: you have entered a number`)
    process.exit(NUMBERS)
}
console.log(`Goodbye, ${string}`)
