import { motion } from "framer-motion";

export default function AboutSection() {
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
          <p className="text-base md:text-lg text-gray-600 font-extralight font-sans">
            Nous croyons en la force du collectif, en l'espoir et en la dignité pour tous. Grâce à nos bénévoles et partenaires, nous menons des actions concrètes pour améliorer la vie des plus vulnérables.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
