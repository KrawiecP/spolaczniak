import React from "react";
import Script from "next/script";
export default function Offer({ rekrutacja, podstawowa, liceum, technikum }) {
  return (
    <>
      <section id="offer">
        <h2 className="heading--section--type-2">Oferta naszych szkół</h2>

        <div className="operations">
          <div className="operations__tab-container">
            <button
              className="btn operations__tab operations__tab--1 operations__tab--active"
              data-tab="1"
            >
              <span>Rekrutacja</span>
            </button>
            <button
              className="btn operations__tab operations__tab--2"
              data-tab="2"
            >
              <span>Podstawowa</span>
            </button>
            <button
              className="btn operations__tab operations__tab--3"
              data-tab="3"
            >
              <span>Liceum</span>
            </button>
            <button
              className="btn operations__tab operations__tab--4"
              data-tab="4"
            >
              <span>Technikum</span>
            </button>
          </div>
          <div className="operations__content operations__content--1 operations__content--active">
            <div dangerouslySetInnerHTML={{ __html: rekrutacja.text }}></div>
            <div className="free-school">
              <h2>
                Szkoła <br></br>Bezpłatna
              </h2>
            </div>
          </div>

          <div
            className="operations__content operations__content--2"
            dangerouslySetInnerHTML={{ __html: podstawowa.text }}
          ></div>
          <div
            className="operations__content operations__content--3"
            dangerouslySetInnerHTML={{ __html: liceum.text }}
          ></div>
          <div
            className="operations__content operations__content--4 "
            dangerouslySetInnerHTML={{ __html: technikum.text }}
          ></div>
        </div>
        <div className="offer__footer"></div>
      </section>
      <Script strategy="afterInteractive" id="offers" src="/js/offers.js" />
    </>
  );
}
