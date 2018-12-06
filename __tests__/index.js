const sourceDir = '../src';
const { nameResponse, feelingResponse, humanResponse } = require(`${sourceDir}/responses`)
const questions = require(`${sourceDir}/questions`)
const { } = require(`${sourceDir}/helpers`)

describe('Name response', () => {
	test('Responds to name with `Hello ${name}`', () => {
		const name = 'Fantasia'
		expect(nameResponse({ name })).toBe(`Hello ${name}`);
	});
})

describe('Feeling response', () => {
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

describe('Human response', () => {
	test('when true', () => {
		const human = true
		expect(humanResponse({ human }))
	})
	test('when false', () => {
		const human = false
		expect(humanResponse({ human }))
	})
})

describe('Helpers', () => { })