export const speakTamil = (text)=>{
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "ta-IN";
  u.rate = 0.9;
  u.pitch = 1.2;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

export const playMsgSound = ()=>{
  new Audio("/whatsapp.mp3").play();
}
