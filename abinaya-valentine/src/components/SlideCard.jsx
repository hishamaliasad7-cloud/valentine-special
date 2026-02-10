const slides = [
  {
    id: 1,
    title: "Rose Day",
   
    image:"img/roseday.jpg",
    message: "With This Rose,\nI Send You My Love\nWith All My Heart\nHappy Rose Day!",
    bgGradient: "from-yellow-300 via-orange-400 to-orange-500",
    textColor: "text-gray-800"
  },
  {
    id: 2,
    title: "Propose Day",
   
    image:"img/proposeday.png",
    message: "Happy Propose Day!\nI want to spend\nmy today, tomorrow, actually\nentire life with you,\nI wanna grow old with you.\n",
    bgGradient: "from-gray-900 to-black",
    textColor: "text-white"
  },
  {
    id: 3,
    title: "Chocolate Day",
   
    image: "img/chocolateday.jpg",
    message: "Happy Chocolate Day!\nDear boyfriend, just like chocolate\nyour friendship fills my life with\n 🍫",
    bgGradient: "from-amber-100 to-yellow-100",
    textColor: "text-gray-800"
  },
  {
    id: 4,
    title: "Teddy Day",
   
    image: "img/teddyday.jpg",
    message: "To the one who makes my heart\nfeel light and happy,\nHappy Teddy Day!\nYou're the teddy bear\nthat brightens up\nmy darkest days. 🧸",
    bgGradient: "from-red-600 to-red-500",
    textColor: "text-white"
  },
  {
    id: 5,
    title: "Promise Day",
    
    image: "img/promiseday.png",
    message: "Happy Promise Day!\nNo matter how many times we fight,\nI'm never going to stop\nloving you. I will never give up on us.\nI will love you forever.\nI promise! 💕",
    bgGradient: "from-pink-200 to-pink-300",
    textColor: "text-gray-800"
  },
  {
    id: 6,
    title: "Hug Day",
  
    image: "img/hugday.png",
    message: "Every hug from you\nfeels like a warm\nblanket on a cold day-\npure comfort and\nlove. Happy Hug Day,\nmy love! 🤗",
    bgGradient: "from-yellow-50 to-amber-100",
    textColor: "text-gray-800"
  },
  {
    id: 7,
    title: "Kiss Day",
   
    image: "img/kiss day.png",
    message: "Love is heat.\nYou are sweet.\nWhen two lips meet.\nLove is complete.\nHappy Kiss Day!\n💋",
    bgGradient: "from-gray-100 to-white",
    textColor: "text-gray-800"
  },
  {
    id: 8,
    title: "Valentine's Day",
   
    image: "img/val.png",
    message: "\n💍\nAbinaya…\nWill you be my Valentine?\nNee ennoda happiness 🥹\n",
    bgGradient: "from-pink-200 to-rose-300",
    textColor: "text-gray-800"
  }
];

export default function SlideCard({ currentSlide, onNext }) {
  const slide = slides[currentSlide];

  return (
    <div
      className={`w-full mx-auto bg-gradient-to-b ${slide.bgGradient} rounded-lg shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col md:flex-row md:max-w-5xl lg:max-w-7xl md:h-96 lg:h-[28rem] h-auto animate-fadeIn p-4 md:p-0`}
    >
      {/* Image Section (left) */}
      <div className="flex-shrink-0 w-full md:w-2/5 h-64 md:h-full overflow-hidden relative bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg md:rounded-l-lg">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-contain block rounded-lg md:rounded-l-lg"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none';
            const parent = e.target.parentElement;
            if (!parent.querySelector('.fallback')) {
              const fallback = document.createElement('div');
              fallback.className = 'fallback w-full h-full flex items-center justify-center text-6xl bg-gray-100';
              fallback.innerHTML = '💕';
              parent.appendChild(fallback);
            }
          }}
        />
      </div>

      {/* Content Section (right) */}
      <div className={`w-full md:w-3/5 flex flex-col justify-between md:p-6 p-4 mt-4 md:mt-0 ${slide.textColor || 'text-white'}`}>
        <div className="flex-1 overflow-y-auto md:overflow-visible">
          <div className="animate-slideUp">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">{slide.title}</h2>
            <p className="text-sm opacity-90 mb-3">{slide.date}</p>
            <p className="text-base md:text-lg leading-relaxed whitespace-pre-line font-semibold max-h-40 md:max-h-none overflow-y-auto md:overflow-visible">
              {slide.message}
            </p>
          </div>
        </div>

        {/* Button Section */}
        <div className="mt-4 md:mt-0">
          <button
            onClick={onNext}
            className="mt-4 w-full py-3 md:py-4 text-base md:text-lg bg-white/95 text-black font-extrabold rounded-full hover:bg-white hover:scale-105 transition-all shadow-lg active:scale-95"
          >
            {currentSlide === slides.length - 1 ? "Let's Celebrate! 💖" : "Next Day ➜"}
          </button>

          {/* Slide Indicator */}
          <div className="mt-3">
            <div className="flex gap-2 justify-center">
              {slides.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all ${
                    idx <= currentSlide ? "bg-white w-6" : "bg-white/40 w-2"
                  }`}
                />
              ))}
            </div>
            <p className={`text-center text-xs md:text-sm mt-2 ${slide.textColor ? 'opacity-75' : 'text-white/80'}`}>
              Day {currentSlide + 1} of {slides.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { slides };
