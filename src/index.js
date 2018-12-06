const inquirer = require('inquirer');
const questions = require('./questions')

const { nameResponse, feelingResponse } = require('./responses')
inquirer
	.prompt(questions)
	.then(answers => {
		console.log(nameResponse(answers))
		console.log(feelingResponse(answers))
	})

