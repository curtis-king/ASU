import { motion } from "framer-motion";

export default function ActionsSection() {
  return (
    <section id="actions" className="py-20 bg-gradient-to-b from-white/80 to-blue-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0205f4] mb-10 text-center">Nos actions</h2>
        <div className="grid gap-10 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-lg border border-blue-100 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center hover:shadow-blue-200 transition-all duration-300 group"
            style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
          >
            <motion.img 
              src="/globe.svg" 
              alt="Prévention" 
              className="h-16 mb-6 drop-shadow-xl"
              whileHover={{ rotate: 10, scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <h3 className="text-xl font-light font-sans text-[#0205f4] mb-3 tracking-wide">Prévention & Sensibilisation</h3>
            <p className="text-gray-700 text-base font-extralight leading-relaxed">Des campagnes pour informer, prévenir et protéger les populations sur les enjeux de santé et de société.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-lg border border-blue-100 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center hover:shadow-blue-200 transition-all duration-300 group"
            style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
          >
            <motion.img 
              src="/window.svg" 
              alt="Soutien" 
              className="h-16 mb-6 drop-shadow-xl"
              whileHover={{ rotate: -10, scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <h3 className="text-xl font-light font-sans text-[#0205f4] mb-3 tracking-wide">Soutien Psychosocial</h3>
            <p className="text-gray-700 text-base font-extralight leading-relaxed">Accompagnement individuel et collectif pour renforcer la résilience et l’espoir des plus vulnérables.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-lg border border-blue-100 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center hover:shadow-blue-200 transition-all duration-300 group"
            style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
          >
            <motion.img 
              src="/vercel.svg" 
              alt="Solidarité" 
              className="h-16 mb-6 drop-shadow-xl"
              whileHover={{ rotate: 12, scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <h3 className="text-xl font-light font-sans text-[#0205f4] mb-3 tracking-wide">Actions Solidaires</h3>
            <p className="text-gray-700 text-base font-extralight leading-relaxed">Distribution de biens, organisation d’événements et projets pour soutenir les communautés locales.</p>
          </motion.div>
        </div>
        <div className="flex justify-center mt-10">
          <a href="#contact" className="bg-[#0205f4] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors text-lg">
            Découvrir nos projets
          </a>
        </div>
      </div>
    </section>
  );
}
