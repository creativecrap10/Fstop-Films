import React from "react";
import "../stylesheet/About.css"
const AboutUs = () => {
  return (
    <section id="about" className="container section">
      <div className="abtimg flexbox1">
        <img src="./image/about_img.png" />
        </div>
      <div className="abtcontent heading flexbox1">
        <h1>FSTOP FILMS</h1>
        <p>
        Where every frame tells your story. We specialize in capturing raw emotions, timeless moments,
        and unforgettable memories through breathtaking photography and cinematic videography.
        Let us turn your moments into masterpieces.
          </p>
          <img src="./image/fivestar.jpg" />
          <h3>CLIENTS FAVOURITE</h3>
          <h3>TIMELESS VISUAL NARRATIVES</h3>
      </div>
    </section>
  );
};

export default AboutUs;
