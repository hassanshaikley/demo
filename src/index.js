const inquirer = require('inquirer');
const questions = require('./questions')
const { nameResponse } = require('./responses')

inquirer
	.prompt(questions)
	.then(answers => {
		console.log(nameResponse(answers))
	})

