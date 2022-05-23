import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Logito from "../../img/logito2.png";
import emoji from "../../img/emoji.png";
import coin from "../../img/coin.png";
import squad from "../../img/squad.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* lado izquierdo ojo con el css atenta */}
      <div className="i-left">
        <div className="i-name">
          {/* para pasar a modo oscuro */}
          <span style={{ color: darkMode ? "white" : "" }}>¡Estas en....! </span>
          <span> Huamanga</span>
          <span>
           Si buscas que leer, este de seguro es tu lugar, encuentra nuestros proyectos
          mas recientes en la seccion de abajo, y suerte en tu busqueda, la necesitaras!!
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
        </Link>
        {/* redes sociales */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* imagen derecha ojo atenta a esto */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Logito} alt="" />
        {/* animacion slide */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={emoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={squad} text1="Cafeteria" text2="virtual " />
        </motion.div>

        {/* se puede editar de todas las maneras posibles*/}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* se puede editar de todas las maneras posibles*/}
          <FloatinDiv img={coin} text1="Batallas" text2="en grupo" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
