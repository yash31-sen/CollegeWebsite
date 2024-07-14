import React from "react";
import { motion } from "framer-motion";
import '../../tailwind.css';

export const RevealLinks = () => {
  return (
    <section
      className="overflow-hidden grid place-content-start gap-2 bg-green-300 px-12 py-24 text-black bg-cover bg-center h-8vh" // Use h-screen for full viewport height
      style={{ 
        backgroundImage: "url('src/assets/clg-f.jpg')",
        height: "120vh",
      }}
    >
      <FlipLink className="overflow-hidden" href="#">Gyan Ganga</FlipLink>
      <FlipLink className="overflow-hidden" href="#">Institute</FlipLink>
      <FlipLink className="overflow-hidden" href="#">of</FlipLink>
      <FlipLink className="overflow-hidden" href="#">Technology</FlipLink>
      <FlipLink className="overflow-hidden" href="#">and</FlipLink>
      <FlipLink className="overflow-hidden" href="#">Sciences</FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-3xl font-black uppercase sm:text-5xl md:text-6xl lg:text-7xl"
      style={{
        lineHeight: 0.75,
        height: "8vh", // Set the height to 8vh
      }}
    >
      <div className="overflow-hidden">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
                color:"white"
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="overflow-hidden inline-block"
            key={i + "-1"}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="overflow-hidden absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="overflow-hidden inline-block"
            key={i + "-2"}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
