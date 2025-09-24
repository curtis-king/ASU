import { motion } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  // Pour l'effet vague sur le bouton
  const buttonRef = useRef<HTMLAnchorElement>(null);

  // Ajoute une vague animée sur le bouton au clic
  const handleWave = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const button = buttonRef.current;
    if (!button) return;

    // Supprime toute vague précédente
    const oldWave = button.querySelector(".wave");
    if (oldWave) oldWave.remove();

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const wave = document.createElement("span");
    wave.className = "wave";
    wave.style.width = wave.style.height = `${size}px`;
    wave.style.left = `${x}px`;
    wave.style.top = `${y}px`;

    button.appendChild(wave);

    // Supprime la vague après l'animation
    wave.addEventListener("animationend", () => {
      wave.remove();
    });
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white/80 via-blue-50 to-white/90 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-16"
      >
        {/* Illustration à gauche sur desktop, en haut sur mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-shrink-0 w-full md:w-1/2 flex justify-center"
        >
          <div className="relative group">
            <img
              src="/reunion.png"
              alt="Illustration ASU"
              className="rounded-3xl shadow-2xl w-72 h-72 object-cover bg-gray-100 border-4 border-white transition-transform duration-300 group-hover:scale-105 group-hover:shadow-blue-200"
            />
            <div className="absolute inset-0 rounded-3xl pointer-events-none group-hover:bg-blue-100/20 transition-colors duration-300" />
          </div>
        </motion.div>
        {/* Texte à droite */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-light font-sans tracking-wide text-[#0205f4] mb-6">À propos de l'ASU</h2>
          <p className="text-lg md:text-xl text-gray-700 font-extralight font-sans mb-4">
            L'Association Serment Universel (ASU) œuvre depuis 1998 pour l'accompagnement psychosocial, la prévention et le soutien auprès des communautés du Congo. Notre mission : placer l'humain au cœur de l'action solidaire.
          </p>
          <p className="text-base md:text-lg text-gray-600 font-extralight font-sans mb-8">
            Nous croyons en la force du collectif, en l'espoir et en la dignité pour tous. Grâce à nos bénévoles et partenaires, nous menons des actions concrètes pour améliorer la vie des plus vulnérables.
          </p>
          <a
            ref={buttonRef}
            href="/apropos"
            className="relative overflow-hidden inline-block px-8 py-3 rounded-full bg-[#0205f4] text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-200"
            onClick={handleWave}
          >
            En savoir plus
          </a>
        </motion.div>
      </motion.div>
      {/* Styles pour l'effet vague */}
      <style jsx>{`
        .wave {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.4);
          transform: scale(0);
          animation: wave-effect 0.6s linear;
          pointer-events: none;
          z-index: 10;
        }
        @keyframes wave-effect {
          to {
            transform: scale(2.5);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
