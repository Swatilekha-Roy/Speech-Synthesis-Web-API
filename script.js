let voices = []

window.speechSynthesis.addEventListener("voiceschanged", function() {
    voices = window.speechSynthesis.getVoices();
});

const sing = (text, rate = 1.2) => {
    //speech synthesis utterance
    // set voice, pitch, rate
    // then speak
    return new Promise(resolve => {
        const speech = new SpeechSynthesisUtterance(text)
        speech.voice = voices.find(voice => voice.lang = "en-US");
        speech.pitch = 7;
        speech.rate = rate;
        window.speechSynthesis.speak(speech);
        speech.addEventListener("end", () => {
            resolve();
        });
    });
};

const wait = ms => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

const playSong = async () => {
    await sing(`Ohhh, to see without my eyes`, 0.9);
    await sing(`The first time that youuuu kiiiissed me!`, 0.7);
    await wait(1000);
    await sing(`Boundless by the time I cried`, 0.9);
    await sing(`I built your walls aaaround me!`, 0.7);
    await wait(1000);
    await sing(`White noise, what an awful sound`, 0.9);
    await sing(`Fumbling by rogue river`, 0.7);
    await wait(1000);
    await sing(`Feel my feet above the ground`, 0.9);
    await sing(`Hand of God delllliver me`, 0.7);
    await wait(900);
    await sing(`Ohhhhh oh oh oh oh is meeeee`, 0.8);
    await sing(`The first time that youuuu touched me`, 0.7);
    //await wait(900);
    await sing(`Ohhhhh will wonders ever cease`, 0.8);
    await sing(`Bles said be theeee mystery`,0.8);
    await sing(`Of love`,0.7);
    await wait(500);
    await sing(`Honestly, do you have nothing better to do?`);
};

document.querySelector("#play").addEventListener("click", () => {
    playSong();
})
