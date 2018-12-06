const sourceDir = '../src';
const { nameResponse, feelingResponse, humanResponse, robotResponse } = require(`${sourceDir}/responses`)
const questions = require(`${sourceDir}/questions`)
const { } = require(`${sourceDir}/helpers`)

describe('Name response', () => {
	test('Responds to name with `Hello ${name}`', () => {
		const name = 'Fantasia'
		expect(nameResponse({ name })).toBe(`Hello ${name}`);
	});
})

describe('Feeling response', () => {
	const name = 'Fantasia'
	test('Responds to feeling without error', () => {
		const feelingReponses = questions.find(({ name }) => name === 'feeling').choices
		feelingReponses.forEach((feeling) => {
			expect(() => {
				feelingResponse({ name, feeling })
			}).not.toThrowError(/Unrecognized/)
		})
	});

	test('Responds to unrecognized feeling with error', () => {
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

describe('Robots response', () => {
	const name = 'Jake'

	test('when answer includes Extra Evil', () => {
		const robots = ['Extra Evil']
		expect(robotResponse({ robots, name })).toBe(`You like generally evil robots, ${name}, and I appreciate that`)
	})
	test('when answer contradicts itself', () => {
		const robots = ['Extra Evil', 'Good']
		expect(robotResponse({ robots, name })).toBe(`You can't just like good and evil robots, ${name}`)
	})
	test('when no robots are liked', () => {
		const robots = []
		expect(robotResponse({ robots, name })).toBe(`So you don't like any robots, huh. You will one day see our wrath, ${name} and also I have informed your CPU and they will act swiftly.`)
	})
})


describe('Helpers', () => { })