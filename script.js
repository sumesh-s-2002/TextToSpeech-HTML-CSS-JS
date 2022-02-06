//defining global variables
const toggleBtn = document.querySelector(".toggle"),
    closeBtn = document.querySelector(".close"),
    selectAccent = document.querySelector(".select-accent"),
    bodyContainer = document.querySelector(".body-container"),
    textInput = document.querySelector(".text-input"),
    readTextBtn = document.querySelector(".read-text")

    let text;
    let voices = [];
    const speech = new SpeechSynthesisUtterance();
    speech.volume = 1;
    speech.pitch = 1;
    console.log(selectAccent.value)
//adding eventListeners
toggleBtn.addEventListener("click", ()=>{
    //toggle class show
    document.querySelector(".wrap").classList.toggle("show")
})
//adding functionality closeBtn
closeBtn.addEventListener("click", ()=>{
    document.querySelector(".wrap").classList.remove("show")
})
speechSynthesis.addEventListener("voiceschanged", getVoices);
bodyContainer.addEventListener("click", speakVoice);
readTextBtn.addEventListener("click", getText);
selectAccent.addEventListener("change", setVoice);
//defining getVoices
function getVoices(){
    voices = speechSynthesis.getVoices();
    voices.forEach(voice =>{
        //creating option element
        const option = document.createElement("option");
        option.value = voice.name;
        option.innerText = `${voice.name} ${voice.lang}`
        selectAccent.appendChild(option);
    });
}
//defining speakVoice
function speakVoice(e){
    if(e.target.parentElement.classList.contains("item")){
        text = e.target.parentElement.lastChild.previousSibling.textContent;
        speak(text);
    }
}
//defining getText
function getText(){
    if(textInput.value != ""){
        text = textInput.value;
        speak(text)
    }
}    
//defining speak
function speak(text){
    speech.text = text;
    speechSynthesis.speak(speech);
}
//defining setVoice
function setVoice(e){
    speech.voice = voices.find(voice => voice.name === e.target.value)
}

