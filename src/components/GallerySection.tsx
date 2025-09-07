import { motion } from "framer-motion";

const images = [
  "/reunion.png",
  "/gallery/gallery1.png",
  "/gallery/gallery2.png",
  "/gallery/gallery3.png",
  //"/gallery/gallery4.png",
  // Ajoute ici d'autres images de /public si besoin
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light font-sans tracking-wide text-[#0205f4] mb-10 text-center">
          Galerie <span className="text-indigo-400">d&apos;images</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {images.map((src, i) => (
            <motion.div
              key={src}
              className="relative overflow-hidden rounded-3xl shadow-xl group bg-white/60 backdrop-blur-lg border border-blue-100"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={src}
                alt={"Galerie " + (i + 1)}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0205f4]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <a href="#" className="bg-[#0205f4] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-colors text-lg">
            Voir plus
          </a>
        </div>
      </div>
    </section>
  );
}
