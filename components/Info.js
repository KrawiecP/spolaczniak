import React from "react";
import Script from "next/script";
export default function Info({ kontakt, wykaz }) {
  return (
    <>
      <section id="info">
        <h2 className="heading--section">
          <span>Informacje</span>
        </h2>
        <div className="info__content">
          <div className="info__mapa">
            <div id="map"></div>
          </div>
          <div
            className="info__kontakt"
            dangerouslySetInnerHTML={{ __html: kontakt }}
          ></div>
        </div>
        <h3 className="hading-add">Zobacz wykaz podreczników</h3>
        <div className="info__add">
          {wykaz.map((w) => {
            return (
              <a
                href={w.attributes.url}
                className="btn-9"
                data-back={w.attributes.alternativeText}
                data-front={w.attributes.alternativeText}
                key={w.id}
                target="_blank"
              >
                {w.attributes.alternativeText}
              </a>
            );
          })}
        </div>
        <h3 className="hading-add">Pozostałe przydatne linki</h3>
        <div className="info__add--2">
          <a
            className="other-links facebook"
            href="https://www.facebook.com/zsspip"
            target="_blank"
          ></a>
          <a
            className="other-links vulcan"
            href="https://uonetplus.vulcan.net.pl/powiatslupski"
            target="_blank"
          ></a>
        </div>
      </section>
      <Script
        strategy="beforeInteractive"
        id="mapbox1"
        src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossorigin=""
      />
      <Script strategy="afterInteractive" id="mapbox2" src="/js/mapbox.js" />
    </>
  );
}
