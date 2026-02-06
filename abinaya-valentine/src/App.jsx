import { useState, useEffect } from "react";
import Chat from "./components/Chat";
import FinalProposal from "./components/FinalProposal";
import FloatingHearts from "./components/FloatingHearts";
export default function App(){

  const [index,setIndex]=useState(0);
  const [final,setFinal]=useState(false);
  const [countdown,setCountdown]=useState("");
  const [tap,setTap]=useState(0);

  const messages=[
    {side:"left",text:"Abinaya 💖"},
    {side:"left",text:"Oru vishayam sollanum..."},
    {side:"right",text:"Enna da? 😏"},
    {side:"left",text:"Nee siricha... enaku ellame perfect 🥹"},
    {side:"left",text:"Unna vida enaku vera yaarum venam"},
    {side:"left",text:"Nee ennoda Valentine ah irupiya? 💍"}
  ];

  /* countdown */
  useEffect(()=>{
    const v=new Date("Feb 14, 2026 00:00:00").getTime();
    setInterval(()=>{
      const now=new Date().getTime();
      const d=v-now;
      const days=Math.floor(d/(1000*60*60*24));
      const hrs=Math.floor((d/(1000*60*60))%24);
      setCountdown(`Valentine ku ${days} days ${hrs} hrs 💖`);
    },1000);
  },[]);

  /* easter egg */
  const easter=()=>{
    setTap(tap+1);
    if(tap===5){
      alert("Secret: I love you Abinaya 😘");
    }
  }

  /* finish */
  const finish=()=>{
    if(navigator.vibrate) navigator.vibrate([300,100,300]);
    setFinal(true);
  }

  return(
    <div className="min-h-screen flex items-center justify-center
    bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600
    bg-200 animate-gradient">

      <div className="backdrop-blur-xl bg-white/20 border border-white/30
      shadow-2xl rounded-3xl p-6 w-[350px] text-center text-white">

        <h1 onClick={easter}
        className="text-2xl font-bold cursor-pointer">
          Abinaya 💖
        </h1>

        <p className="text-sm mb-3">{countdown}</p>

        {!final ? (
          <>
            <Chat messages={messages} index={index} />

            <div className="flex justify-center gap-4 mt-4">
              <button
              onClick={()=>{
                if(index<messages.length-1) setIndex(index+1);
                else finish();
              }}
              className="bg-pink-600 px-5 py-2 rounded-full hover:scale-110 transition">
                Yes 💖
              </button>

              <button
              onMouseEnter={(e)=>{
                e.target.style.transform=
                `translate(${Math.random()*120}px,${Math.random()*120}px)`
              }}
              className="bg-white text-black px-5 py-2 rounded-full">
                No 😏
              </button>
            </div>
          </>
        ):(
          <>
            <FinalProposal/>
            <FloatingHearts/>
          </>
        )}
      </div>
    </div>
  )
}
