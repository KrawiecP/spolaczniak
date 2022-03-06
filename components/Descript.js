import React from "react";

export default function Descript({ opis }) {
  return (
    <section id="descript">
      <h2 className="heading--section">
        <span>{opis.attributes.opis.tytul}</span>
      </h2>

      <div
        dangerouslySetInnerHTML={{ __html: opis.attributes.opis.text }}
      ></div>
    </section>
  );
}
