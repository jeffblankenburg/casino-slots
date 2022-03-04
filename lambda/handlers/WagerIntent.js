const sample = require("../APL/sample.json");

async function WagerIntent(handlerInput) {
    const speakOutput = `<audio src="https://s3.amazonaws.com/chatsino.chat/audio/reel_spin.mp3"/> This is the Wager Intent Handler.`;
    return handlerInput.responseBuilder
        //.speak(speakOutput)
        .addDirective(sample)
        .reprompt(speakOutput)
        .getResponse();
}

module.exports = WagerIntent;