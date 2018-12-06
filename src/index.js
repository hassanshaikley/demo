const inquirer = require('inquirer');


const questions = require('./questions')
const { animateString } = require('./helpers')
const { nameResponse, feelingResponse, humanResponse } = require('./responses')

inquirer
	.prompt(questions)
	.then(answers => {
		const responses = [
			nameResponse(answers),
			feelingResponse(answers),
			humanResponse(answers)
		]

		const responsesString = responses.join('\n')

		animateString(responsesString)
	})