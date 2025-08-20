import React from "react";
import "./Bgimg.css"; // estilos para el fondo

const Bgimg = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="/videos/fondo.mp4" type="video/mp4" />
        Tu navegador no soporta videos en HTML5.
      </video>
      <div className="overlay">
        {/* Si querés, acá van los elementos que se muestran sobre el video */}
        <h1>Bienvenido</h1>
      </div>
    </div>
  );
};

export default Bgimg;