import React, { useContext } from "react";
import "./Works.css";
import lezhin from "../../img/lezhin.png";
import youtube from "../../img/youtube.png";
import tappytoon from "../../img/tappytoon.png";
import pinterest from "../../img/pinterest.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll';

const Works = () => {
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

 
  return (
    <div className="works" id="works">
      {/* lado izquierdo */}
      <div className="w-left">
        <div className="awesome">
          {/* modo oscuro */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Nuestras plataformas
          </span>
          <span> virtuales</span>
          <spane>
            En Huamanga creemos que todos deben tener la 
            <br />
            posibilidad de seguir las obras de nuestros
            queridos mangakas
            <br />
            Y es por que hemos incorporado varias plataformas
            <br />
            para la facil lectura.
          </spane>
          <Link to="https://es-la.facebook.com/" smooth={true} spy={true}>
            <button className="button s-button"> Siguenos </button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={lezhin} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={youtube} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={tappytoon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={pinterest} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
