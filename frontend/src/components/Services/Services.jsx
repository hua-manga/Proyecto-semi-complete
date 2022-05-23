import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import oneshot from "../../img/oneshot.png";
import general from "../../img/general.png";
import blgl from "../../img/blgl.png";
import mature from "../../img/mature.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";


const Services = () => {
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* lado izquierdo */}
      <div className="awesome">
        {/* modo negro */}
        <span style={{ color: darkMode ? "white" : "" }}> Las categorias</span>
        <span> mas solicitadas de Huamanga</span>
        </div>
      {/* derecha */}
      <div className="cards">
        {/* primera tarjeta */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={oneshot}
            heading={"Oneshot"}
            detail={" Para algunos uno es mas que suficiente, si es asi, este es tu eleccion"}
          />
        </motion.div>
        {/* segunda tarjeta */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={general}
            heading={"General"}
            detail={" Para los que les gusta lo variado, pues este es el indicado"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={blgl}
            heading={"BL/GL"}
            detail={
              "¿Mente abierta? entonces definitivamente este es tu lugar"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        {/* 4to*/}
        <motion.div
          initial={{ left: "-21rem", bottom: "22rem" }}
          whileInView={{ left: "-25rem" }}
          transition={transition}
        >
          <Card
            emoji={mature}
            heading={"Mature"}
            detail={"¿Quieres lectura fuerte? ¿no? bueno clickea aqui"}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
