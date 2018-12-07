const inquirer = require('inquirer');

const questions = require('./questions')
const responses = require('./responses')

const { initialize } = require('./helpers')

initialize()

inquirer
	.prompt(questions)
	.then(answers => {
		const responsesString = Object.keys(responses).map(response => responses[response](answers)).join('\n')

		responsesString.animate()
	})