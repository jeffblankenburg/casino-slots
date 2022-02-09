async function UserAccountIntent(handlerInput) {
    const speakOutput = 'This is the User Account Intent Handler.';
    return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt(speakOutput)
        .getResponse();
}

module.exports = UserAccountIntent;