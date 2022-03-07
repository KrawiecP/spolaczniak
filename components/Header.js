import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Header({ rekrutacja, podstawowa, liceum, slajdy }) {
  return (
    <div className="header">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide slide--1">
            <div className="free-school">
              <h2>
                Szkoła <br></br>Bezpłatna
              </h2>
            </div>
            {/* <div className="free-school-back">
              <h2>
                Szkoła <br></br>Bezpłatna
              </h2>
            </div> */}
            <div className="slide__item rekrutacja-tytul">
              <h1 className="heading--slider--biger">Rekrutacja</h1>
              <h2 className="heading--slider--second">
                {slajdy[0].attributes.dopisek}
              </h2>
            </div>
            <div className="slide__item rekrutacja-foto">
              <img src="/chlopak.png"></img>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide--2">
            <div id="small-boy" className="slide__item-small-boy slide__item-1">
              <img src="/uczen.png"></img>
            </div>
            <div className="slide__item">
              <h1 className="heading--slider">
                II Społeczna Szkoła Podstawowa
              </h1>
              <h2 className="heading--slider--second">
                {slajdy[1].attributes.dopisek}
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide--3">
            <div className="slide__item-1">
              <img src="/uczennica.png"></img>
            </div>
            <div className="slide__item">
              <h1 className="heading--slider">
                Społeczne Liceum{" "}
                <span className="ogolniak">Ogólnokształcące</span>
              </h1>
              <h2 className="heading--slider--second">
                {slajdy[2].attributes.dopisek}
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide--1">
            <div className="slide__item-1 trio">
              <img src="/team.png"></img>
            </div>
            <div className="slide__item">
              <h1 className="heading--slider--biger">Społeczne Technikum</h1>
              <h2 className="heading--slider--second">
                {slajdy[6].attributes.dopisek}
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide--4">
            <div className="slide__item-1">
              <img src="/informatyk.png"></img>
            </div>
            <div className="slide__item">
              <h1 className="heading--slider--biger">Technik Informatyk</h1>
              <h2 className="heading--slider--second">
                {slajdy[3].attributes.dopisek}
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide--5">
            <div className="slide__item-1">
              <img src="/mechanik.png"></img>
            </div>
            <div className="slide__item">
              <h1 className="heading--slider--biger">Technik Mechanik</h1>
              <h2 className="heading--slider--second">
                {slajdy[4].attributes.dopisek}
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide--6">
            <div className="slide__item-1">
              <img src="/kucharz.png"></img>
            </div>
            <div className="slide__item">
              <h1 className="heading--slider--biger">
                Technik<br></br> Technologii<br></br> Żywności{" "}
              </h1>
              <h2 className="heading--slider--second">
                {slajdy[5].attributes.dopisek}
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
