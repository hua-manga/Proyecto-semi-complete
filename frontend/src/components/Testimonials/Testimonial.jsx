import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import staff1 from "../../img/meme2.png";
import staff2 from "../../img/meme3.jpeg";
import staff3 from "../../img/meme4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: staff1,
      review:
        "Se necesita mucho valor para pelear por nuestros sueños pero si crees que no lo tienes solo necesitas mandarme un mensaje y con gusto estare a tu lado.",
    },
    {
      img: staff2,
      review:
        " ¿Que? Latinoamerica tiene talento y de sobra, que no lo veas no quiere decir que no exista, abre bien tus ojos por favor.",
    },
    {
      img: staff3,
      review:
        "El miedo es el motivo por el cual muchos se rinden pero sino lo intentas no lo sabras ¿no?.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Nuestro Staff </span>
        <br/>
        <br/>
        <span> Ellos saben la pasion de editar, aqui estan sus historias </span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
