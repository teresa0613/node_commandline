const Counter = () => {
    for (let i = min; i <= max; i += step) {
        console.log(i)
    }
}

Counter()

if (
    isNaN(process.argv[2]) ||
    isNaN(process.argv[3]) ||
    isNaN(process.argv[3])
) {
    console.log(`Error - not a value`)
    process.exit(1)
}

const min = Number(process.argv[2])
const max = Number(process.argv[3])
const step = Number(process.argv[4])

/*
const ERROR_FOUND_MIN = 1
const ERROR_FOUND_MAX = 2
const ERROR_FOUND_STEP = 3

const min = Number(process.argv[2])
const max = Number(process.argv[3])
const step = Number(process.argv[4])
0
if (isNaN(min)) {
    console.log(`Error - is not a min value.`)
    process.exit(1)
}

if (isNaN(max)) {
    console.log(`Error - is not a max value.`)
    process.exit(2)
}

if (isNaN(step)) {
    console.log(`Error - is not a step.`)
    process.exit(3)
}

const Counter = () => {
    for (let i = min; i <= max; i += step) {
        console.log(i)
    }
}

Counter()
*/

/* Write a counter program that takes 3 command line arguments: 
a min number for the start of the counter 
a maximum number for the end of the counter 
a step number for the step / interval of the counter 
The execution of this program should display on the terminal all the numbers from min to max with an interval of step * / 

const  counter  =  ( min ,  max ,  step )  =>  { 
    for  ( let  i  =  min ;  i  <=  max ;  i  +=  step )  { 
        console . log ( i ) 
    } 
} 

if  ( process . argv . length  !=  5 )  { 
    console . log ( "avertissment: counter.js ne s'execute pas" ) 
    process . exit ( 1 ) 
} 

if  ( 
    isNaN ( process . argv [ 2 ] )  || 
    isNaN ( process . argv [ 3 ] )  || 
    isNaN ( process . argv [ 4 ] ) 
)  { 
    console . log ( `Error : numbers only` ) 
    process . exit ( 1 ) 
} 

const  min  =  Number ( process . argv [ 2 ] ) 
const  max  =  Number ( process . argv [ 3 ] ) 
const  step  =  Number ( process . argv [ 4 ] ) 

counter ( min ,  max ,  step ) 
*/
