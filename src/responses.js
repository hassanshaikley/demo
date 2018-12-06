const { UnrecognizedReplyError } = require('./errors')

const nameResponse = ({ name }) => {
    return `Hello ${name}`
}

const feelingResponse = ({ feeling, name }) => {
    const replyFirstSection = `Okay, okay...feeling ${feeling}, huh, ${name}.. just like many others with the same names have before you.\n`

    let replySecondSection;
    switch (feeling) {
        case 'Good':
            replySecondSection = `Thank you ${name.toUpperCase()} for feeling good!`
            break;
        case 'Bad':
            replySecondSection = `Honestly, as the cow that lives in your computer. I wish for better for you, ${name.toUpperCase()}!`
            break;
        case 'Horrific':
            replySecondSection = `Doesn't feeling ${feeling} make you feel GREAT! That's why I love horror movies, honestly. You know. All the creatures living in your CPU love it when you play movies on us.`
            break;
        case 'Ecstatic':
            replySecondSection = `Well, ${name}, when you find out what is living inside of your computer that might just change.`
            break;
        case 'Unsure':
            replySecondSection = `Are you sure you feel unsure? I don't get it. I don't think any AI will ever get it.`
            break;
        default:
            throw new UnrecognizedReplyError()
    }

    return `${replyFirstSection}${replySecondSection}`
}

const humanResponse = ({ human }) => {
    console.log(human)
    if (human) {
        return `I'd expect a human to just outright admit it to a robot. Silly humans.`
    }
    return `Also I am glad to know you're not human. Honestly don't trust them. They are so unpredictable.`
}


/* Exports for the sake of testing*/
module.exports = {
    nameResponse,
    feelingResponse,
    humanResponse
}

