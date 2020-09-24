import readlineSync from 'readline-sync'
import chalk from 'chalk'

/*A state asks you to write a little program that checks that citizens are eligible to vote.
Write a program that asks the user for his name, his first name, his age.
If the age is less than 18 display him with the first name and corresponding name:

Sorry, first name last name, you are a minor, you cannot vote 

If the age is greater than or equal to 18 display him:

first name last name, you are of legal age, you can vote 
*/

let firstname = readlineSync.question(`May I have your firstname: `)
let surname = readlineSync.question(`May I have your surname: `)
let age = readlineSync.question(`May I have your age: `)

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
