import React from "react";
import { useState, useEffect } from "react";
import Script from "next/script";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function News({ news, handler, galerie }) {
  const [vw, setVW] = useState(0);
  useEffect(() => {
    let intViewportWidth = window.innerWidth;
    setVW(intViewportWidth);
  }, []);
  let i = 0;
  return (
    <>
      <section id="news">
        <h2 className="heading--section--type-2">
          <span>Aktualności</span>
        </h2>

        <div className="news-1">
          <Swiper
            pagination={{
              type: "progressbar",
            }}
            slidesPerView={3}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {news.map((n) => {
              i++;
              let button;
              if (n.attributes.galeria.data) {
                const found = galerie.find(
                  (el) => el.id === n.attributes.galeria.data.id
                );
                const index = galerie.indexOf(found);
                button = (
                  <a
                    href="#gallery"
                    className="btn-9 gallery-link"
                    data-back="Zobacz Galerie"
                    data-front="Zobacz Galerie"
                    data-link={index}
                    onClick={() => handler(n.attributes.galeria.data.id)}
                  ></a>
                );
              } else {
                button = <a></a>;
              }
              return (
                <SwiperSlide>
                  <div className={`card card--${i}`} key={n.id}>
                    <div className="face face1">
                      <div className="content">
                        <div
                          className="icon"
                          style={{
                            backgroundImage: `url(${n.attributes.obraz.data.attributes.url})`,
                          }}
                        >
                          <h3 className="card-1__heading">
                            <span className="card-1__heading-span card-1__heading-span--1">
                              {n.attributes.tytul}
                            </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="face face2">
                      <div className="content">
                        <div>
                          <span>{n.attributes.data}</span>
                        </div>
                        <div
                          className="news__text"
                          dangerouslySetInnerHTML={{
                            __html: n.attributes.text,
                          }}
                        ></div>
                        {button}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="news-2">
          <Swiper
            pagination={{
              type: "progressbar",
            }}
            slidesPerView={2}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {news.map((n) => {
              i++;
              let button;
              if (n.attributes.galeria.data) {
                const found = galerie.find(
                  (el) => el.id === n.attributes.galeria.data.id
                );
                const index = galerie.indexOf(found);
                button = (
                  <a
                    href="#gallery"
                    className="btn-9 gallery-link"
                    data-back="Zobacz Galerie"
                    data-front="Zobacz Galerie"
                    data-link={index}
                    onClick={() => handler(n.attributes.galeria.data.id)}
                  ></a>
                );
              } else {
                button = <a></a>;
              }
              return (
                <SwiperSlide>
                  <div className={`card card--${i}`} key={n.id}>
                    <div className="face face1">
                      <div className="content">
                        <div
                          className="icon"
                          style={{
                            backgroundImage: `url(${n.attributes.obraz.data.attributes.url})`,
                          }}
                        >
                          <h3 className="card-1__heading">
                            <span className="card-1__heading-span card-1__heading-span--1">
                              {n.attributes.tytul}
                            </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="face face2">
                      <div className="content">
                        <div>
                          <span>{n.attributes.data}</span>
                        </div>
                        <div
                          className="news__text"
                          dangerouslySetInnerHTML={{
                            __html: n.attributes.text,
                          }}
                        ></div>
                        {button}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="news-3">
          <Swiper
            pagination={{
              type: "progressbar",
            }}
            slidesPerView={1}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {news.map((n) => {
              i++;
              let button;
              if (n.attributes.galeria.data) {
                const found = galerie.find(
                  (el) => el.id === n.attributes.galeria.data.id
                );
                const index = galerie.indexOf(found);
                button = (
                  <a
                    href="#gallery"
                    className="btn-9 gallery-link"
                    data-back="Zobacz Galerie"
                    data-front="Zobacz Galerie"
                    data-link={index}
                    onClick={() => handler(n.attributes.galeria.data.id)}
                  ></a>
                );
              } else {
                button = <a></a>;
              }
              return (
                <SwiperSlide>
                  <div className={`card card--${i}`} key={n.id}>
                    <div className="face face1">
                      <div className="content">
                        <div
                          className="icon"
                          style={{
                            backgroundImage: `url(${n.attributes.obraz.data.attributes.url})`,
                          }}
                        >
                          <h3 className="card-1__heading">
                            <span className="card-1__heading-span card-1__heading-span--1">
                              {n.attributes.tytul}
                            </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="face face2">
                      <div className="content">
                        <div>
                          <span>{n.attributes.data}</span>
                        </div>
                        <div
                          className="news__text"
                          dangerouslySetInnerHTML={{
                            __html: n.attributes.text,
                          }}
                        ></div>
                        {button}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      <Script
        strategy="afterInteractive"
        id="initswiper"
        src="/js/initswiper.js"
      />
    </>
  );
}
