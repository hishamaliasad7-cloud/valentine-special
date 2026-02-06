import { useEffect } from "react";

export default function FloatingHearts(){

  useEffect(()=>{
    const interval=setInterval(()=>{
      const h=document.createElement("div");
      h.innerText="💖";
      h.className="fixed bottom-0 text-2xl animate-float";
      h.style.left=Math.random()*100+"vw";
      document.body.appendChild(h);
      setTimeout(()=>h.remove(),6000);
    },250);

    return()=>clearInterval(interval);
  },[])

  return null;
}
