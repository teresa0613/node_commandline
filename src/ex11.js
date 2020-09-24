import readlineSync from 'readline-sync'
import chalk from 'chalk'

/*Write a qcm of 5. The player will have to answer the questions by entering the number corresponding to the correct answer. At the end of the qcm you will give it its mark which will correspond to the number of correct answers on the 5 questions. I offer you the 5 questions and the possible choices, but you can create your own if you want:

    Question 1: C ++ is a:
    1: language => expected response
    2: compiler

*/

//let welcome = readlineSync.keyInYN(chalk.yellow('Are you ready to play?'))

let question_one = readlineSync.question(
    chalk.red('In The Matrix, does Neo take the blue pill or the red pill?')
)
let question_one_answer = ['red pill', 'blue pill']
let index = readlineSync.keyInSelect(question_one_answer, 'Choose an answer?')
