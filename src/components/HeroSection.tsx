
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const slides = [
    "Accompagnement psychosocial pour tous",
    "Engagés depuis 1998 au service des communautés",
    "Prévention, soutien, espoir",
    "25 ans d'actions solidaires au Congo",
    "Association Serment Universel : l'humain d'abord",
  ];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">Association Serment Universel</h1>
      <div className="relative h-10 flex items-center justify-center overflow-hidden w-full max-w-xl mx-auto">
        {slides.map((text, i) => (
          <span
            key={i}
            className={`absolute left-0 right-0 transition-all duration-700 ease-in-out text-base sm:text-lg md:text-xl text-white/90 font-medium px-2 ${
              i === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
            }`}
            aria-hidden={i !== current}
          >
            {text}
          </span>
        ))}
      </div>
      <div className="mt-8 flex items-center justify-center">
        <Button className="bg-white text-[#0205f4] hover:bg-gray-100 px-12 py-5 text-lg font-bold rounded-full shadow-md min-w-[220px] transition-colors">
          Découvrir l'ASU
        </Button>
      </div>
    </>
  );
}
