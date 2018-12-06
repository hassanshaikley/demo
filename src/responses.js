const { UnrecognizedReplyError } = require('./errors')

const nameResponse = ({ name }) => {
    return `Hello ${name}`
}

const feelingResponse = ({ feeling, name }) => {
    const replyFirstSection = 'Well, okay.../n'

    let replySecondSection;
    switch (feeling) {
        case 'Good':
            replySecondSection = `Well maybe you shouldn't be. ${name.toUpperCase()}!`
            break;
        case 'Bad':
            replySecondSection = `Honestly, as the cow that lives in your computer. I wish for better for you, ${name.toUpperCase()}!`
            break;
        case 'Horrific':
            replySecondSection = `Doesn't feeling ${feeling} make you feel GREAT! That's why I love horror movies, honestly.`
            break;
        case 'Ecstatic':
            replySecondSection = `Well, ${name}, when you find out what is living inside of your computer that might just change.`
            break;
        case 'Unsure':
            replySecondSection = ``
            break;
        default:
            throw new UnrecognizedReplyError()
    }

    return `${replyFirstSection}${replySecondSection}`
}


/* Exports for the sake of testing*/
module.exports = {
    nameResponse,
    feelingResponse
}

