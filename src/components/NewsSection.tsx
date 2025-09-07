
import { useState } from "react";
import { motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const baseArticles = [
  {
    type: "youtube",
    title: "Vidéo : L'engagement solidaire au Congo",
    url: "https://www.youtube.com/watch?v=d4EwHGk0lDw",
    thumbnail: "https://img.youtube.com/vi/d4EwHGk0lDw/hqdefault.jpg",
  },
  {
    type: "youtube",
    title: "Vidéo : Témoignage d'un bénévole ASU",
    url: "https://youtu.be/_Eq200vMCiM",
    thumbnail: "https://img.youtube.com/vi/_Eq200vMCiM/hqdefault.jpg",
  },
  {
    type: "image",
    title: "Atelier de sensibilisation à Brazzaville",
    url: "#",
    thumbnail: "/reunion.png",
  },
  {
    type: "image",
    title: "Distribution de kits scolaires",
    url: "#",
    thumbnail: "/image_reuniion.png",
  },
];

// Dupliquer les articles pour remplir le slider
const articles = Array(3).fill(baseArticles).flat().map((a, i) => ({ ...a, id: i }));


export default function NewsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 32 },
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });


  return (
    <section id="news" className="py-20 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light font-sans tracking-wide text-[#0205f4] mb-10 text-center">
          Actualités &amp; Vidéos
        </h2>
        <div className="relative">
          <div ref={sliderRef} className="keen-slider px-2">
            {articles.map((a, i) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="keen-slider__slide group bg-white/60 backdrop-blur-lg border border-blue-100 rounded-3xl shadow-2xl p-0 flex flex-col items-center text-center hover:shadow-blue-200 transition-all duration-300 overflow-hidden mx-2"
              >
                <a
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex flex-col items-center"
                >
                  <div className="relative w-full h-48 flex items-center justify-center overflow-hidden">
                    <img src={a.thumbnail} alt={a.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    {a.type === "youtube" && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-16 h-16 text-white/90 group-hover:text-indigo-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.7" />
                          <polygon points="10,8 16,12 10,16" fill="#0205f4" />
                        </svg>
                      </span>
                    )}
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <h3 className="text-lg font-light font-sans text-[#0205f4] mb-2 group-hover:underline min-h-[48px]">{a.title}</h3>
                    <span className="text-xs text-gray-500 font-extralight">
                      {a.type === "youtube" ? "Vidéo YouTube" : "Article"}
                    </span>
                  </div>
                </a>
                <div className="pb-4 flex justify-center">
                  <a href={a.url} target="_blank" rel="noopener noreferrer" className="bg-[#0205f4] text-white px-5 py-2 rounded-full font-bold shadow-md hover:bg-indigo-700 transition-colors text-sm">
                    Voir l'article
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => instanceRef.current?.prev()}
              className="bg-[#0205f4] text-white rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-indigo-700 transition-colors"
              aria-label="Précédent"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="bg-[#0205f4] text-white rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-indigo-700 transition-colors"
              aria-label="Suivant"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <a href="#" className="bg-[#0205f4] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors text-lg">
            Voir toutes les actualités
          </a>
        </div>
      </div>
    </section>
  );
}
