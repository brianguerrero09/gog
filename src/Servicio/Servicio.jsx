import "./Servicio.css"
import { useState } from "react";
import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter";
import TipoServicio from "./TipoServicio";

const Servicio = () => {
const [showPrimary, setShowPrimary] = useState(false);
const [showSecond, setShowSecond] = useState(false);

return (
    <>
        <div>
            <div className="container">
                <div className="row text-start border-bottom">
                    <div className="col mt-3 border-bottom p-2">
                        <motion.h1  className = "title-color"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            onAnimationComplete={() => setShowPrimary(true)}
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
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1}}
                            onAnimationComplete={() => setShowSecond(true)}
                        >
                            <Typewriter
                                words={["En un laboratorio, cada resultado importa. Por eso, mantener tus equipos en perfecto estado no es un lujo, es una necesidad. Por eso desde GOG INSTRUMENTAL te ofrecemos:"]}
                                loop={1}
                                cursor = {false}
                                cursorStyle="|"
                                typeSpeed={20}
                                delaySpeed={1500}
                                />
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            {showSecond && <TipoServicio />}
        </div>
    </>      
    )
}

export default Servicio