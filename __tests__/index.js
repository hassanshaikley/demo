const sourceDir = '../src';
const {nameResponse} = require(`${sourceDir}/responses`)

test('Responds to name with `Hello ${name}`', () => {
	const name = 'Fantasia'
	expect(nameResponse({name})).toBe(`Hello ${name}`);
});

