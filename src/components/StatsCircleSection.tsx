
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: "/globe.svg",
    label: "Personnes accompagnées",
    value: 12500,
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: "/window.svg",
    label: "Enfants assistés",
    value: 3200,
    color: "from-pink-400 to-pink-600",
  },
  {
    icon: "/vercel.svg",
    label: "Actions solidaires",
    value: 180,
    color: "from-green-400 to-green-600",
  },
  {
    icon: "/file.svg",
    label: "Tests VIH réalisés",
    value: 5400,
    color: "from-yellow-400 to-yellow-600",
  },
];


function AnimatedCircleCounter({ value, color }: { value: number; color: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
  const start = 0;
    const duration = 1800;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * (value - start) + start);
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    }

    requestAnimationFrame(animate);

    // Cleanup in case the component unmounts
    return () => setDisplayValue(value);
  }, [value]);

  return (
    <motion.div
      className={`relative w-28 h-28 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-gradient-to-br ${color} shadow-xl`}
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <span className="text-white text-2xl md:text-3xl font-bold select-none">
        {displayValue.toLocaleString()}
      </span>
    </motion.div>
  );
}

export default function StatsCircleSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-100 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light font-sans tracking-wide text-[#0205f4] mb-12 text-center">
          Nos chiffres clés
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 -mt-2">
                <img
                  src={stat.icon}
                  alt={stat.label}
                  className="h-10 w-10 drop-shadow-xl bg-white rounded-full p-2 border border-white shadow-md"
                />
              </div>
              <AnimatedCircleCounter value={stat.value} color={stat.color} />
              <span className="mt-4 text-base md:text-lg text-gray-700 font-light font-sans tracking-wide">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
