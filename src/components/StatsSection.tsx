import { motion } from "framer-motion";

const stats = [
  {
    icon: "/globe.svg",
    label: "Personnes accompagnées",
    value: 12500,
  },
  {
    icon: "/window.svg",
    label: "Enfants assistés",
    value: 3200,
  },
  {
    icon: "/vercel.svg",
    label: "Actions solidaires",
    value: 180,
  },
  {
    icon: "/file.svg",
    label: "Tests VIH réalisés",
    value: 5400,
  },
];

function AnimatedCounter({ value }: { value: number }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      className="text-3xl md:text-4xl font-bold text-[#0205f4]"
    >
      {Math.floor(value).toLocaleString()}
    </motion.span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-100 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light font-sans tracking-wide text-[#0205f4] mb-12 text-center">
          Nos chiffres clés
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-lg border border-blue-100 rounded-3xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-blue-200 transition-all duration-300 group"
            >
              <motion.img
                src={stat.icon}
                alt={stat.label}
                className="h-14 mb-4 drop-shadow-xl group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 8, scale: 1.15 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <AnimatedCounter value={stat.value} />
              <span className="mt-2 text-base md:text-lg text-gray-700 font-light font-sans tracking-wide">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
