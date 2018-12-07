const chalk = require('chalk');

/* Before running the CLI this initialization needs to take place */
const initialize = () => {
    return new Promise((resolve, reject) => {
        console.reset = function () {
            return process.stdout.write('\x1Bc');
        }
        String.prototype.animate = function () {
            const string = this;

            let currentFrame = 0;
            let animationInterval = setInterval(() => {
                console.reset()
                const startString = string.substring(0, currentFrame)
                const middleString = string.charAt(currentFrame)
                const endString = string.substring(currentFrame + 1, string.length)
                console.log(`${chalk.rgb(20, 200, 20)(startString)}${chalk.rgb(20, 250, 20)(middleString)}${chalk.gray(endString)}`)
                if (currentFrame === string.length) {
                    clearInterval(animationInterval)
                }
                currentFrame++
            }, 100)
        }
    })
}

module.exports = {
    initialize
}