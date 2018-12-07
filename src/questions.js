const { ROBOTS } = require('./constants')

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
        choices: ['Good', 'Bad', 'Unsure', 'Horrific', 'Ecstatic']
    },
    {
        type: 'checkbox',
        name: 'robots',
        message: 'What kinds of robots do you like?',
        choices: [
            ROBOTS.EVIL, ROBOTS.EXTRA_EVIL, ROBOTS.INCOMPREHENSIBLY_EVIL, ROBOTS.GOOD
        ]
    },
    {
        type: 'confirm',
        name: 'human',
        message: 'Are you a human being?'
    }
]