import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Descript from "../components/Descript";
import News from "../components/News";
import Gallery from "../components/Gallery";
import Navigation from "../components/Navigation";
import Offer from "../components/Offer";
import Info from "../components/Info";
import Background from "../components/Background";
import Script from "next/script";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function Home({
  rekrutacja,
  podstawowa,
  liceum,
  technikum,
  news,
  galerie,
  kontakt,
  wykaz,
  slajdy,
  opis,
}) {
  const [currentGallery, setGallery] = useState(galerie[0]);
  const [initGalleryNav, setInitGalleryNav] = useState(0);
  const clickToSetGallery = (id) => {
    const found = galerie.find((el) => el.id === id);
    const index = galerie.indexOf(found);
    setInitGalleryNav(index);
    setGallery(found);
  };
  return (
    <>
      <div className="container">
        <Head>
          <title>Zespół Szkół Społecznych</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
            integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
            crossorigin=""
          />
        </Head>

        <Navigation></Navigation>
        <Header
          rekrutacja={rekrutacja}
          podstawowa={podstawowa}
          liceum={liceum}
          slajdy={slajdy}
        ></Header>
        <main>
          <Descript opis={opis}></Descript>
          <News
            news={news}
            handler={clickToSetGallery}
            galerie={galerie}
          ></News>
          <Gallery
            initGalleryNav={initGalleryNav}
            galerie={galerie}
            handler={clickToSetGallery}
            currentGallery={currentGallery}
          ></Gallery>
          <Offer
            rekrutacja={rekrutacja}
            podstawowa={podstawowa}
            liceum={liceum}
            technikum={technikum}
          ></Offer>
          <Info kontakt={kontakt} wykaz={wykaz}></Info>
        </main>
        <footer className="footer">
          <h2>Wykonanie Andrzej Jaworski</h2>
        </footer>
      </div>
      <Background></Background>
      <Script strategy="afterInteractive" id="handlers" src="/js/handlers.js" />
    </>
  );
}
export async function getStaticProps() {
  const res1 = await fetch(
    "https://szkolaspoleczna.herokuapp.com/api/rekrutacja?populate=*"
  );
  const strapi1 = await res1.json();
  const res2 = await fetch(
    "https://szkolaspoleczna.herokuapp.com/api/podstawowa?populate=*"
  );
  const strapi2 = await res2.json();
  const res3 = await fetch(
    "https://szkolaspoleczna.herokuapp.com/api/liceum?populate=*"
  );
  const strapi3 = await res3.json();
  const res4 = await fetch(
    "https://szkolaspoleczna.herokuapp.com/api/aktualnoscis?sort[0]=data:desc&populate=*&"
  );
  const strapi4 = await res4.json();
  const res5 = await fetch(
    "https://szkolaspoleczna.herokuapp.com/api/galeries?sort[0]=createdAt:desc&populate=*"
  );
  const strapi5 = await res5.json();
  const res6 = await fetch(
    "https://szkolaspoleczna.herokuapp.com/api/technikum?populate=*"
  );
  const strapi6 = await res6.json();
  const res7 = await fetch("https://szkolaspoleczna.herokuapp.com/api/kontakt");
  const strapi7 = await res7.json();
  const res8 = await fetch(
    "https://szkolaspoleczna.herokuapp.com/api/wykaz-podrecznikow?populate=*"
  );
  const strapi8 = await res8.json();
  const res9 = await fetch(
    "https://szkolaspoleczna.herokuapp.com/api/slajdies"
  );
  const strapi9 = await res9.json();
  const res10 = await fetch(
    "https://szkolaspoleczna.herokuapp.com/api/opis-szkoly?populate=*"
  );
  const strapi10 = await res10.json();
  return {
    props: {
      rekrutacja: strapi1.data.attributes.opis,
      podstawowa: strapi2.data.attributes.opis,
      liceum: strapi3.data.attributes.opis,
      technikum: strapi6.data.attributes.opis,
      kontakt: strapi7.data.attributes.text,
      wykaz: strapi8.data.attributes.wykaz.data,
      news: strapi4.data,
      galerie: strapi5.data,
      slajdy: strapi9.data,
      opis: strapi10.data,
    },
    revalidate: 60,
  };
}
