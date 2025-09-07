import { motion } from "framer-motion";

const bubbles = [
  { size: 120, x: "8%", y: "18%", color: "bg-white/60" },
  { size: 90, x: "75%", y: "25%", color: "bg-[#b3c6ff]/50" },
  { size: 140, x: "45%", y: "65%", color: "bg-indigo-200/60" },
  { size: 60, x: "80%", y: "60%", color: "bg-white/40" },
  { size: 70, x: "20%", y: "80%", color: "bg-[#b3c6ff]/40" },
  { size: 100, x: "60%", y: "40%", color: "bg-white/50" },
  { size: 80, x: "30%", y: "50%", color: "bg-indigo-100/60" },
  { size: 50, x: "65%", y: "80%", color: "bg-white/30" },
  { size: 110, x: "85%", y: "15%", color: "bg-white/40" },
  { size: 60, x: "35%", y: "25%", color: "bg-[#b3c6ff]/50" },
];

export default function Bubbles() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className={`rounded-full ${b.color} absolute`}
          style={{
            width: b.size,
            height: b.size,
            left: b.x,
            top: b.y,
            filter: "blur(1.5px)",
          }}
          initial={{ scale: 0.8, opacity: 0.7 }}
          animate={{
            scale: [0.8, 1.1, 0.9, 1],
            opacity: [0.7, 1, 0.8, 0.7],
            y: [0, -10, 10, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          whileHover={{ scale: 1.2, opacity: 1, filter: "blur(0px)" }}
        />
      ))}
    </div>
  );
}
