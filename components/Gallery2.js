import React from "react";
import Script from "next/script";
import GalleryNav from "./GalleryNav";
import { useEffect, useState } from "react";
export default function Gallery({ galeries }) {
  const [currentGallery, setGallery] = useState(galeries[0]);
  useEffect(() => {
    var oldScript = document.getElementById("masonry");
    if (oldScript) {
      oldScript.remove();
    }
    const script = document.createElement("script");
    script.src = "/js/masonry.js";
    script.defer = true;
    script.id = "masonry";
    document.body.appendChild(script);
  }, [currentGallery]);
  const clickToSetGallery = (id) => {
    const found = galeries.find((el) => el.id === id);
    setGallery(found);
  };
  return (
    <section className="gallery">
      <GalleryNav
        galeries={galeries}
        currentGallery={currentGallery}
        handler={clickToSetGallery}
      ></GalleryNav>
      <div className="grid">
        {currentGallery.attributes.obrazy.data.map((g) => {
          const x = Math.ceil(Math.random() * 3);
          const y = Math.ceil(Math.random() * 3);
          return (
            <div
              className={`grid-item grid-item--width${x} grid-item--height${y}`}
              key={g.id}
              style={{
                backgroundImage: `url(${g.attributes.url})`,
              }}
            ></div>
          );
        })}
      </div>
      <Script
        strategy="beforeInteractive"
        src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"
      />
      {/* <Script strategy="afterInteractive" id="masonry" src="/js/masonry.js" /> */}
    </section>
  );
}

{
  /* <div className="grid-item grid-item--width2 grid-item--height2"></div>
        <div className="grid-item grid-item--height3"></div>
        <div className="grid-item grid-item--height2"></div>
        <div className="grid-item grid-item--width3"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item grid-item--height2"></div>
        <div className="grid-item grid-item--width2 grid-item--height3"></div>
        <div className="grid-item"></div>
        <div className="grid-item grid-item--height2"></div>
        <div className="grid-item"></div>
        <div className="grid-item grid-item--width2 grid-item--height2"></div>
        <div className="grid-item grid-item--width2"></div>
        <div className="grid-item"></div>
        <div className="grid-item grid-item--height2"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item grid-item--height3"></div>
        <div className="grid-item grid-item--height2"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item grid-item--height2"></div> */
}
