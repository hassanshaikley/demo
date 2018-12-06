const inquirer = require('inquirer');
const questions = require('./questions')
const responses = require('./responses')

inquirer
	.prompt(questions)
	.then(answers => {
		console.log(responses.nameResponse(answers))
	})

