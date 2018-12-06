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
    }
]