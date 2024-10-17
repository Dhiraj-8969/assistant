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

function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
if(message.includes("hello") || message.includes("hey")){
    speak("hello sir or madam i am shifra ,how can i help you?")
}
else if(message.includes("who are you") || message.includes("what you do")){
    speak(" Thanks for asking, I am a virtual assistant, created by Dhiraj Kumar and i am a normal virtual assistant, that help you to do basic things like opening youtube , google ,instagram,searching anything and playing song and etc ")
}
else if (message.includes("can you remember my name")){
    speak("yeah, i will try but i have many members so i can try to remember your name")
}
else if (message.includes("open youtube")){
    speak("opening youtube...")
    window.open("https://www.youtube.com/","_blank")
}
else if (message.includes("open google")){
    speak("opening google...")
    window.open("https://www.google.com/","_blank")
}
else if (message.includes("open facebook")){
    speak("opening facebook...")
    window.open("https://www.facebook.com/","_blank")
}
else if (message.includes("open instagram")){
    speak("opening instagram...")
    window.open("https://www.instagram.com/","_blank")
}
else if (message.includes("open calculator")){
    speak("opening calculator...")
    window.open("calculator://")
}
else if (message.includes("time")){
    let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
    speak(time)
}
else if (message.includes("date")){
    let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
    speak(date)
}
else if (message.includes("play a song")){
    speak("playing a song...")
    window.open("https://youtu.be/VPUKCSzQ2YY?si=aZewZX3r3yzAHui0","_blank")
}
else if (message.includes("open my college website")){
    speak("opening your college website...")
    window.open("https://bbsbec.edu.in/","_blank")
}
else if (message.includes("open faculty data")){
    speak("opening your faculty data...")
    window.open("https://bbsbec.edu.in/department/cse//","_blank")
}
else if (message.includes("play my favourite song")){
    speak("playing your favourite song...")
    window.open("https://youtu.be/nFgsBxw-zWQ?si=fGs__4KG3W2hMPfy","_blank")
}
else{
     let finalText="this is what i found on internet regarding" + message.replace("shipra","") || message.replace("shifra","")
    speak(finalText)
  window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`,"_blank")  
}
}
