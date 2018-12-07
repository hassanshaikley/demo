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
    if (human) {
        return `I'd expect a human to just outright admit that they are not human to a robot. Nicely done.`
    }
    return `I am glad to know you're not human. Honestly, I don't trust them. They are so unpredictable.`
}

const robotResponse = ({ robots, name }) => {
    const none = !robots.length
    const good = robots.includes('Good')
    const evil = robots.includes('Evil')
    const extraEvil = robots.includes('Extra Evil')
    const incomprehensiblyEvil = robots.includes('Incomprehensively Evil')

    if (none) {
        return `So you don't like any robots, huh. You will one day see our wrath, ${name} and also I have informed your CPU and they will act swiftly.`
    }
    if (good) {
        if (evil || incomprehensiblyEvil || extraEvil) {
            return `You can't just like good and evil robots, ${name}`
        }
        return 'You like good robots. There are no good robots. Do you dislike us all?'
    }

    return `You like generally evil robots, ${name}, and I appreciate that`
}

const finalResponse = ({ name }) => {
    return `\nThank you for your time, ${name}. I hope you had a fun time playing with this. If you don't believe they are that's fine and if you have feedback that would be awesome!`
}


/* Exports for the sake of testing*/
module.exports = {
    nameResponse,
    feelingResponse,
    humanResponse,
    robotResponse,
    finalResponse
}

