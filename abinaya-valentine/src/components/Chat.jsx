
import { useEffect } from "react";
import { speakTamil, playMsgSound } from "../utils/voice";

export default function Chat({messages,index}){

  useEffect(()=>{
    if(messages[index]){
      speakTamil(messages[index].text);
      playMsgSound();
    }
  },[index]);

  return(
    <div className="flex flex-col gap-2 mb-4">
      {messages.slice(0,index+1).map((m,i)=>(
        <div key={i}
        className={`px-4 py-2 rounded-2xl text-sm w-fit max-w-[75%]
        ${m.side==="left"
          ? "bg-white text-black self-start"
          : "bg-green-300 text-black self-end"}`}>
          {m.text}
        </div>
      ))}
    </div>
  )
}
