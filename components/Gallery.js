import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import GalleryNav from "./GalleryNav";
import Script from "next/script";
export default function Gallery({
  galerie,
  handler,
  currentGallery,
  initGalleryNav,
}) {
  return (
    <>
      <section id="gallery">
        <GalleryNav
          initGalleryNav={initGalleryNav}
          galerie={galerie}
          currentGallery={currentGallery}
          handler={handler}
        ></GalleryNav>
        <div className="gallery">
          {" "}
          <Swiper
            effect={"coverflow"}
            initialSlide="1"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {currentGallery.attributes.obrazy.data.map((g) => {
              return (
                <SwiperSlide
                  key={g.id}
                  style={{
                    backgroundImage: `url(${g.attributes.url})`,
                  }}
                ></SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
}
