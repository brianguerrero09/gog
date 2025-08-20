import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import { Typewriter } from "react-simple-typewriter";

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.5 } } };
const item = { hidden: { opacity: 0, y: -24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function Hero() {
  const [showBoxes, setShowBoxes] = useState(false);
  const last = "En un laboratorio, cada resultado importa. Por eso, mantener tus equipos en perfecto estado no es un lujo, es una necesidad. Por eso desde GOG INSTRUMENTAL te ofrecemos:";

  const [text, { isDeleting }] = useTypewriter({
    words: [last],
    loop: 1,
    typeSpeed: 0,
    deleteSpeed: 0,     // no borra
    delaySpeed: 900,
  });

  useEffect(() => {
    if (text === last && !isDeleting) setShowBoxes(true);
  }, [text, isDeleting]);

  return (
    <div style={{ padding: 24 }}>
      <motion.h1  class = "title-color"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Typewriter
            words={["Servicios"]}
            loop={1}
            cursor = {false}
            cursorStyle="|"
            typeSpeed={70}
            delaySpeed={1500}
            />
      </motion.h1>
      <p style={{ marginBottom: 12 }}>{text}</p>

      {showBoxes && (
        <motion.div variants={container} initial="hidden" animate="show" style={{ display: "grid", gap: 16 }}>
          <motion.div variants={item} style={cardStyle}><h3 style={{margin:0}}>Box 1</h3><p style={{margin:0}}>Fade-down ok.</p></motion.div>
          <motion.div variants={item} style={cardStyle}><h3 style={{margin:0}}>Box 2</h3><p style={{margin:0}}>Secuencial.</p></motion.div>
        </motion.div>
      )}
    </div>
  );
}

const cardStyle = { padding: 16, borderRadius: 12, background: "#f5f7fa", boxShadow: "0 6px 18px rgba(0,0,0,.08)" };