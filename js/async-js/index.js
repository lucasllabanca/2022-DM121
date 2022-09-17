const timer = 1000 //ms

const task = () => console.log('This will run in the future')

setTimeout(task, timer)

console.log('This ran first, wait for it...')