const sourceDir = '../src';
const { nameResponse, feelingResponse } = require(`${sourceDir}/responses`)
const questions = require(`${sourceDir}/questions`)

describe('Name responses', () => {
	test('Responds to name with `Hello ${name}`', () => {
		const name = 'Fantasia'
		expect(nameResponse({ name })).toBe(`Hello ${name}`);
	});
})

describe('Feeling responses', () => {
	test('Responds to feeling without error', () => {
		const name = 'Fantasia'
		const feelingReponses = questions.find(({ name }) => name === 'feeling').choices
		feelingReponses.forEach((feeling) => {
			expect(() => {
				feelingResponse({ name, feeling })
			}).not.toThrowError(/Unrecognized/)
		})
	});

	test('Responds to unrecognized feeling with error', () => {
		const name = 'Fantasia'
		const feeling = 'Strange'
		expect(() => {
			feelingResponse({ name, feeling })
		}).not.toThrowError(/Unrecognized/)
	});
})

