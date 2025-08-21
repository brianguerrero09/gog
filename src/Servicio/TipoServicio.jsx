import "./Servicio.css";
import { motion } from "framer-motion";

const fadeDownContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { when: "beforeChildren", delayChildren: 1.5, staggerChildren: 0.6 }
  },
};

const fadeDownItem = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardStyle = {
  padding: 16,
  borderRadius: 12,
  background: "#f5f7fa",
  boxShadow: "0 6px 18px rgba(0,0,0,.08)",
  height: "100%",
};

export default function TipoServicio() {
  return (
    <div className="container" style={{ padding: 24 }}>
      <motion.div
        className="row g-3"
        variants={fadeDownContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div className="col-12 col-md-6" variants={fadeDownItem}>
          <div style={cardStyle}>
            <h3 className="mb-2">Mantenimiento Preventivo</h3>
            <p className="mb-0">No esperes a que un fallo interrumpa tu trabajo. Con nuestro plan de mantenimientos programados garantizamos la continuidad operativa, prolongamos la vida útil de tus equipos y reducimos los costos de reparaciones mayores.</p>
          </div>
        </motion.div>

        <motion.div className="col-12 col-md-6" variants={fadeDownItem}>
          <div style={cardStyle}>
            <h3 className="mb-2">Mantenimiento Correctivo</h3>
            <p className="mb-0">Nos encargamos de que tus instrumentos funcionen siempre al 100 %, evitando imprevistos que puedan afectar la calidad de tus procesos. Nuestro servicio especializado asegura la correcta reparación y puesta a punto de cada equipo.</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}


// import "./Servicio.css"
// // Ejemplo: Typewriter -> luego 2 boxes con fade-down secuencial
// import { motion, AnimatePresence} from "framer-motion";


// const fadeDownContainer = {
//   hidden: {},
//   show: {
//     transition: {
//       delay: 5,
//       // tiempo entre un hijo y el siguiente
//       staggerChildren: 0.6,
//     },
//   },
// };

// const fadeDownItem = {
//   hidden: { opacity: 0, y: -20 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { delay: 2, duration: 0.6, ease: "easeOut" },
//   },
//   exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
// };

// const TipoServicio = () =>{
//   return (
//     <div className="container" style={{ padding: 24 }}>
//       <AnimatePresence>
//           <motion.div className="row"
//             variants={fadeDownContainer}
//             initial="hidden"
//             animate="show"
//             exit="hidden"
//           >
//             <motion.div className="column"
//               variants={fadeDownItem}
//               style={{
//                 padding: 16,
//                 borderRadius: 12,
//                 background: "#f5f7fa",
//                 boxShadow: "0 6px 18px rgba(0,0,0,.08)",
//               }}
//             >
//               <h3 style={{ margin: 0 }}>Box 1</h3>
//               <p style={{ margin: 0 }}>
//                 Texto del primer box. Entra primero con fade desde arriba.
//               </p>
//             </motion.div>

//             <motion.div className="column"
//               variants={fadeDownItem}
//               style={{
//                 padding: 16,
//                 borderRadius: 12,
//                 background: "#f5f7fa",
//                 boxShadow: "0 6px 18px rgba(0,0,0,.08)",
//               }}
//             >
//               <h3 style={{ margin: 0 }}>Box 2</h3>
//               <p style={{ margin: 0 }}>
//                 Texto del segundo box. Aparece después del primero.
//               </p>
//             </motion.div>
//           </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }

// export default TipoServicio