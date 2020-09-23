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
