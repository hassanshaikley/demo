const nameResponse = (answers) => {
    const name = answers['name'];
    return `Hello ${name}`
}

/* Exports for the sake of testing*/
module.exports = {
	nameResponse
}