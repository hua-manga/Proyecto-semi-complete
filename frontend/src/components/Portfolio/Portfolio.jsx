import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import mordida from "../../img/mordida.jpg";
import beisbol from "../../img/besibol.jpg";
import abrazame from "../../img/abrazamesiempre.jpg";
import amistad from "../../img/nuestrapasadaamistad.jpg";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* cabeza */}
      <span style={{color: darkMode?'white': ''}}> Fan Arts</span>
      <span> No hay nada mejor para un mangaka ver los fan arts de sus seguidores, y aqui estan algunos</span>

      {/* slider de la animacion */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={mordida} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={beisbol} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={amistad} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={abrazame} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
