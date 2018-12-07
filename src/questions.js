const { ROBOTS, FEELING } = require('./constants')

const keyToVal = (key) => {
    return Object.keys(key).map(val => key[val])
}

module.exports = [
    {
        type: 'input',
        name: 'name',
        message: 'Hello, what is your name'
    },
    {
        type: 'list',
        name: 'feeling',
        message: 'How are you feeling today',
        choices: keyToVal(FEELING)
    },
    {
        type: 'checkbox',
        name: 'robots',
        message: 'What kinds of robots do you like?',
        choices: keyToVal(ROBOTS)
    },
    {
        type: 'confirm',
        name: 'human',
        message: 'Are you a human being?'
    }
]