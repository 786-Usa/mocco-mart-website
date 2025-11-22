// HeroSection.jsx
import React, { useState, useEffect, useRef } from "react";

const slides = [
  {
    id: 1,
    title: "Up to 10% off Voucher",
    subtitle: "iPhone 14 Series",
    cta: "Shop Now",
    img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1400&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Exclusive Launch Offer",
    subtitle: "iPhone 15 Pro",
    cta: "Shop Now",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1400&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Flat 20% Off Cases",
    subtitle: "Accessories",
    cta: "Shop Now",
    img: "https://images.unsplash.com/photo-1510557880182-3be0b3d3a3e7?w=1400&q=80&auto=format&fit=crop",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const touchStartX = useRef(null);

 

  const startAuto = () => {
    stopAuto();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
  };
  const stopAuto = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

 useEffect(() => {
    startAuto();
    return () => stopAuto();
    // eslint-disable-next-line
  }, [index]);

  function goPrev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }
  function goNext() {
    setIndex((i) => (i + 1) % slides.length);
  }

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }
  function handleTouchEnd(e) {
    if (!touchStartX.current) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 50) goPrev();
    if (dx < -50) goNext();
    touchStartX.current = null;
  }

  return (
    <section className="w-full">
      <div
        className="relative overflow-hidden rounded-lg"
        onMouseEnter={stopAuto}
        onMouseLeave={startAuto}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s) => (
            <div
              key={s.id}
              className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 items-center"
              aria-hidden={index !== slides.indexOf(s)}
            >
              <div className="p-6 md:p-12 text-center md:text-left">
                <div className="inline-flex items-center gap-3 justify-center md:justify-start mb-4">
                  <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center text-white">
                    {/* small badge / logo */}
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1" />
                    </svg>
                  </div>
                  <p className="text-white text-sm">{s.subtitle}</p>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {s.title}
                </h2>
                <p className="text-white/90 mt-3 max-w-xl">
                  Discover exclusive deals for a limited time. Quality products at great prices.
                </p>

                <div className="mt-6 flex justify-center md:justify-start gap-3">
                  <a
                    href="#"
                    className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md font-semibold shadow"
                  >
                    {s.cta}
                  </a>
                  <a
                    href="#"
                    className="bg-white/10 text-white px-4 py-2 rounded-md hover:bg-white/20 transition"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              <div className="h-64 md:h-96 relative">
                <img
                  src={s.img}
                  alt={s.subtitle}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Left / Right controls */}
        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 md:p-3"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 md:p-3"
          aria-label="Next slide"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-10 h-2 rounded-full transition-all ${i === index ? "bg-red-500 w-10" : "bg-white/40 w-6"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
