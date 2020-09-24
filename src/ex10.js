import readlineSync from 'readline-sync'
import chalk from 'chalk'

let firstname = readlineSync.question(`May I have your firstname: `)
let surname = readlineSync.question(`May I have your surname: `)
let age = process.argv[2]

if (age < 18) {
    console.log(
        chalk.red(
            `Sorry, ${firstname} ${surname}, you are a minor, you cannot vote`
        )
    )
} else if (age >= 18) {
    console.log(
        chalk.green(
            `${firstname} ${surname}, you are of legal age, you can vote `
        )
    )
}
