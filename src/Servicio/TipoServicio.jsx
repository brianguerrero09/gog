import "./Servicio.css"
// Ejemplo: Typewriter -> luego 2 boxes con fade-down secuencial
import { motion, AnimatePresence, delay } from "framer-motion";


const fadeDownContainer = {
  hidden: {},
  show: {
    transition: {
      delay: 5,
      // tiempo entre un hijo y el siguiente
      staggerChildren: 0.6,
    },
  },
};

const fadeDownItem = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const TipoServicio = () =>{
  return (
    <div style={{ padding: 24 }}>
      <AnimatePresence>
          <motion.div
            variants={fadeDownContainer}
            initial="hidden"
            animate="show"
            exit="hidden"
            style={{ display: "grid", gap: 16 }}
          >
            <motion.div
              variants={fadeDownItem}
              style={{
                padding: 16,
                borderRadius: 12,
                background: "#f5f7fa",
                boxShadow: "0 6px 18px rgba(0,0,0,.08)",
              }}
            >
              <h3 style={{ margin: 0 }}>Box 1</h3>
              <p style={{ margin: 0 }}>
                Texto del primer box. Entra primero con fade desde arriba.
              </p>
            </motion.div>

            <motion.div
              variants={fadeDownItem}
              style={{
                padding: 16,
                borderRadius: 12,
                background: "#f5f7fa",
                boxShadow: "0 6px 18px rgba(0,0,0,.08)",
              }}
            >
              <h3 style={{ margin: 0 }}>Box 2</h3>
              <p style={{ margin: 0 }}>
                Texto del segundo box. Aparece después del primero.
              </p>
            </motion.div>
          </motion.div>
      </AnimatePresence>
    </div>
  );
}
//         <>
//             <div class="container">
//                 <div class="row text-start mt-5 ms-2">
//                     <div class="col">
//                         <h2 class="subtitle-color">Mantenimiento correctivo</h2>
//                         <p>Nos encargamos de que tus instrumentos funcionen siempre al 100 %, evitando imprevistos que puedan afectar la calidad de tus procesos. Nuestro servicio especializado asegura la correcta reparación y puesta a punto de cada equipo.</p>
//                     </div>                    
//                     <div class="col">
//                         <h2 class="subtitle-color">Mantenimiento preventivo</h2>
//                         <p>No esperes a que un fallo interrumpa tu trabajo. Con nuestro plan de mantenimientos programados garantizamos la continuidad operativa, prolongamos la vida útil de tus equipos y reducimos los costos de reparaciones mayores.</p>
//                     </div>                    
//                 </div>
//             </div>
//         </>
//     )
// }

export default TipoServicio