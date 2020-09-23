const min = Number(process.argv[2])
const max = Number(process.argv[3])
const step = Number(process.argv[4])

const Counter = () => {
    for (let i = min; i <= max; i += step) {
        console.log('test', i)
    }
}

Counter()
