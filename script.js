const btn = document.querySelector('#btn');
const content = document.querySelector('#content');
const voice = document.querySelector('#voice');
const speak = (text) => {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "h1-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishme() {
    let day = new Date()
    let hours = day.getHours();
    if (hours >= 0 && hours <= 12) {
        speak('Good morning sir')
    } else if (hours >= 12 && hours <= 16) {
        speak('Good afternoon sir')
    } else {
        speak('Good evening sir')
    }
}
window.addEventListener('load', () => { wishme() })

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click", () => {
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"
})

function takeCommand(msg) {
    btn.style.display = "flex"
    voice.style.display = "none"
    if (msg.includes("hello") || msg.includes("hey")) {
        speak("hello dhiraj,what can i help you?")
    } else if (msg.includes("who are you")) {
        speak("i am shifra virtual assistant , created by dhiraj")
    } else if (msg.includes("open youtube")) {
        speak('opening youtube...')
        window.open("https://www.youtube.com/", "_blank")
    } else if (msg.includes("open google")) {
        speak('opening google...')
        window.open("https://www.google.com/", "_blank")
    } else if (msg.includes("open calculator")) {
        speak('opening calculator....')
        window.open("calculator://")
    } else if (msg.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(time)
    } else {
        speak(`this is what i found on internet regarding ${msg.replace("shifra","")||msg.replace("shipra","")}`)
        window.open(`https://www.bing.com/search?pglt=41&q=${msg.replace("shifra","")||msg.replace("shipra","")}`, "_blank")
    }
}