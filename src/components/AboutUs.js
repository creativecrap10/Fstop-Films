import React from "react";
import "../stylesheet/About.css"
const AboutUs = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "918667352313"; // Remove + and spaces
    const message = "Hi! I'm interested in your photography services. Can we discuss?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="about" className="container section">
      <div className="abtimg flexbox1">
        <img src="./image/about_img.png" alt="About Fstop Films" />
        </div>
      <div className="abtcontent heading flexbox1">
        <h1>FSTOP FILMS</h1>
        <p>
        Where every frame tells your story. We specialize in capturing raw emotions, timeless moments,
        and unforgettable memories through breathtaking photography and cinematic videography.
        Let us turn your moments into masterpieces.
          </p>
          <img src="./image/fivestar.jpg" alt="Five star rating" />
          <h3>CLIENTS FAVOURITE</h3>
          <h3>TIMELESS VISUAL NARRATIVES</h3>
          <button 
            className="whatsapp-btn"
            onClick={handleWhatsAppClick}
            aria-label="Contact us on WhatsApp"
          >
            💬 Chat on WhatsApp
          </button>
      </div>
    </section>
  );
};

export default AboutUs;
