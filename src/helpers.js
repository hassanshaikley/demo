const chalk = require('chalk');

console.reset = function () {
    return process.stdout.write('\033c');
}

const animateString = (string) => {
    let i = 0;
    let interval = setInterval(() => {
        console.reset()
        const startString = string.substring(0, i)
        const middleString = string.charAt(i)
        const endString = string.substring(i + 1, string.length)
        console.log(`${chalk.rgb(20, 200, 20)(startString)}${chalk.rgb(20, 250, 20)(middleString)}${chalk.gray(endString)}`)
        if (i === string.length) {
            clearInterval(interval)
        }
        i++
    }, 100)
}

module.exports = {
    animateString
}