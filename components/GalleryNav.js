import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function GalleryNav({ galerie, handler, initGalleryNav }) {
  let i = -1;
  return (
    <div className="gallery-nav">
      <h2 className="heading--section--type-2">
        <span>Nasza Galeria</span>
      </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {galerie.map((g) => {
          i++;
          if (i === initGalleryNav) {
            return (
              <SwiperSlide key={g.id}>
                <a
                  className="current-gallery-link"
                  onClick={() => handler(g.id)}
                >
                  <span>{g.attributes.tytul}</span>
                </a>
              </SwiperSlide>
            );
          }
          return (
            <SwiperSlide key={g.id}>
              <a onClick={() => handler(g.id)}>
                <span>{g.attributes.tytul}</span>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
