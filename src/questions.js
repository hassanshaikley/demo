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
        name: 'What kinds of robots do you like?',
        choices: [
            'Evil', 'Extra Evil', 'Incomprehensively Evil', 'Good'
        ]
    },
    {
        type: 'confirm',
        name: 'human',
        message: 'Are you a human being?'
    }
]