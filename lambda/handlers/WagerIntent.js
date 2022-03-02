async function WagerIntent(handlerInput) {
    const speakOutput = 'This is the Wager Intent Handler.';
    return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt(speakOutput)
        .getResponse();
}

module.exports = WagerIntent;