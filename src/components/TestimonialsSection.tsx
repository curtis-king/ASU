import { motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const testimonials = [
  {
    name: "Marie B.",
    role: "Bénéficiaire",
    text: "Grâce à l'ASU, j'ai retrouvé confiance et espoir. Leur accompagnement a changé ma vie.",
    image: "/reunion.png",
  },
  {
    name: "Jean K.",
    role: "Bénévole",
    text: "Participer aux actions de l'association m'a permis de grandir humainement et d'aider concrètement ma communauté.",
    image: "/file.svg",
  },
  {
    name: "Fatou S.",
    role: "Maman accompagnée",
    text: "L'écoute et le soutien reçus m'ont permis de surmonter des moments difficiles. Merci à toute l'équipe !",
    image: "/globe.svg",
  },
  {
    name: "Dr. Alain M.",
    role: "Partenaire santé",
    text: "L'ASU est un acteur clé de la prévention VIH au Congo. Leur engagement est exemplaire.",
    image: "/window.svg",
  },
];

function TestimonialsSection() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 24 },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 32 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 40 },
      },
    },
  });

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light font-sans tracking-wide text-[#0205f4] mb-10 text-center">
          Ils témoignent
        </h2>
        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name + i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="keen-slider__slide bg-white/70 backdrop-blur-lg border border-blue-100 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center mx-2 hover:shadow-blue-200 transition-all duration-300"
            >
              <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg mb-4 bg-gray-100" />
              <blockquote className="text-gray-700 italic font-light mb-4">“{t.text}”</blockquote>
              <span className="text-[#0205f4] font-semibold">{t.name}</span>
              <span className="text-xs text-gray-500 font-extralight">{t.role}</span>
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
      </div>
    </section>
  );
}

export default TestimonialsSection;
