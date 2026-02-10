import { useState, useEffect } from "react";
import SlideCard, { slides } from "./components/SlideCard";
import FloatingHearts from "./components/FloatingHearts";

export default function App(){
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [countdown, setCountdown] = useState("");
  const [tap, setTap] = useState(0);

  useEffect(() => {
    const v = new Date("Feb 14, 2026 00:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const d = v - now;
      const days = Math.floor(d / (1000 * 60 * 60 * 24));
      const hrs = Math.floor((d / (1000 * 60 * 60)) % 24);
      setCountdown(`Valentine ku ${days} days ${hrs} hrs 💖`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      if (navigator.vibrate) navigator.vibrate([300, 100, 300]);
      setShowCelebration(true);
    }
  };

  const easter = () => {
    setTap(tap + 1);
    if (tap === 5) {
      alert("Secret: I love you Abinaya 😘");
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center
    bg-gradient-to-b from-pink-500 via-rose-500 to-purple-600
    p-4" style={{ minHeight: "100dvh" }}>

      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center text-white mb-4">
          <h1 onClick={easter} className="text-3xl font-bold cursor-pointer mb-2">
            Abinaya 💖
          </h1>
          {/* countdown removed as requested */}
        </div>

        {/* Main Content */}
        {!showCelebration ? (
          <SlideCard currentSlide={currentSlide} onNext={handleNext} />
        ) : (
          <div className="animate-fadeIn">
            <div className="w-full mx-auto bg-gradient-to-b from-pink-500 via-rose-500 to-purple-600 rounded-lg shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col md:flex-row md:max-w-5xl lg:max-w-7xl md:h-96 lg:h-[28rem] h-auto p-4 md:p-0">
              <div className="flex-shrink-0 w-full md:w-2/5 h-64 md:h-full overflow-hidden relative rounded-lg md:rounded-l-lg">
                <img
                  src="/us.jpeg"
                  alt="Us together"
                  className="w-full h-full object-contain block rounded-lg md:rounded-l-lg"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const parent = e.target.parentElement;
                    if (!parent.querySelector('.fallback')) {
                      const fallback = document.createElement('div');
                      fallback.className = 'fallback w-full h-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center text-6xl';
                      fallback.innerHTML = '💕';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>

              <div className="w-full md:w-3/5 flex flex-col justify-between md:p-6 p-4 mt-4 md:mt-0 text-white">
                <div className="flex-1 overflow-y-auto md:overflow-visible">
                  <div className="text-5xl md:text-6xl mb-2 md:mb-3 animate-bounce">💍</div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">Abinaya…</h2>
                  <p className="text-xl md:text-2xl mb-4">Will you be my Valentine? 💖</p>
                  <p className="text-sm md:text-base leading-relaxed opacity-90 max-h-32 md:max-h-none overflow-y-auto md:overflow-visible">
                    Nee ennoda happiness 🥹<br />
                    Nee ennoda world 🌍<br />
                    Nee ennoda forever ♾️
                  </p>
                </div>

                <div className="mt-4 md:mt-0">
                  <p className="text-center text-base md:text-lg italic font-semibold mt-2 mb-3">"its you. its always you." 💕</p>
                  <div className="flex justify-center">
                    <button
                      onClick={() => {
                        setCurrentSlide(0);
                        setShowCelebration(false);
                      }}
                      className="mt-2 px-6 md:px-8 py-3 bg-white text-purple-600 font-extrabold rounded-full hover:scale-105 transition-all active:scale-95"
                    >
                      Start Again 💕
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Slide Counter */}
        {!showCelebration && (
          <div className="text-center text-white mt-4 text-sm">
            Progress: {currentSlide + 1}/{slides.length}
          </div>
        )}

        {showCelebration && <FloatingHearts />}
      </div>
    </div>
  );
}
