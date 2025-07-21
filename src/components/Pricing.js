import React from "react";
import "../stylesheet/Pricing.css"
const Pricing = () => {
  return (
    <section id="pricing" className="section container">
      <div className="heading">
        <h4>Pricing</h4>
        <h1>Choose your plan to Continue</h1>
      </div>

<div className="pricebox">
  {/* Basic Package */}
  <div className="pricedetails">
    <img src="../image/icons/basic.svg" alt="Basic Package" />
    <h2>Basic Package</h2>
    <p>Perfect for small events and intimate moments.</p>
    <div><strike><h1 className="striked">₹50,000</h1></strike><h1>₹39,000</h1></div> 
    <h4>Reception & Wedding</h4>
    <ul>
      <li>One Traditional Photographer</li>
      <li>One Traditional Videographer</li>
    </ul>
    <h4>Deliverables</h4>
    <ul>
      <li>2 Premium Album 40 pages each Full HD Documentary Video Edited Ulimited Soft Copies with Pendrive.</li>
    </ul>
    <h4>Complimentaries</h4>
    <ul>
      <li>2 nos of Photo Frames E-Invites</li>
    </ul>
    
  </div>

  {/* Standard Package */}
  <div className="pricedetails">
    <img src="../image/icons/standard.svg" alt="Basic Package" />
    <h2>Standard Package</h2>
    <p>Perfect for small events and intimate moments.</p>
    <div><strike><h1 className="striked">₹68,000</h1></strike><h1 className="mainprice">₹54,999</h1></div> 
    <h4>Reception & Wedding</h4>
    <ul>
      <li>One Traditional Photographer</li>
      <li>One Traditional Videographer</li>
      <li>One Candid Photographer</li>
    </ul>
    <h4>Deliverables</h4>
    <ul>
      <li>2 Premium Album 50 pages each Full HD Documentary Video Edited Ulimited Soft Copies with Pendrive.</li>
    </ul>
    <h4>Complimentaries</h4>
    <ul>
    <li>Pre or Post Wedding Photoshoot</li>
      <li>3 nos of Photo Frames</li>
      <li>2 nos of Yearly Calender</li>
      <li>E-Invites</li>
    </ul>
    
  </div>

  {/* Premium Package */}
  <div className="pricedetails">
    <img src="../image/icons/premium.svg" alt="Basic Package" />
    <h2>Premium Package</h2>
    <p>Perfect for small events and intimate moments.</p>
    <div><strike><h1 className="striked">₹1,12,000</h1></strike><h1 className="mainprice">₹89,999</h1></div> 
    <h4>Reception & Wedding</h4>
    <ul>
      <li>One Traditional Photographer</li>
      <li>One Traditional Videographer</li>
      <li>One Candid Photographer</li>
      <li>One Candid Videographer</li>
    </ul>
    <h4>Deliverables</h4>
    <ul>
      <li>2 Premium Album 70 pages each Full HD Documentary Video Edited, 2-3 mins Wedding Film & Ulimited Soft Copies with Pendrive.</li>
    </ul>
    <h4>Complimentaries</h4>
    <ul>
    <li>Pre or Post Wedding Photoshoot(Mini Album)</li>
    <li>4-5mins cinematic video edited</li>
    <li>Teaser Video Edited</li>
      <li>4 nos of Photo Frames</li>
      <li>2 nos of Yearly Calender</li>
      <li>Instagram Reels</li>
      <li>E-Invites</li>
    </ul>
    
  </div>

  {/* Luxury Package */}
  <div className="pricedetails">
    <img src="../image/icons/luxury.svg" alt="Basic Package" />
    <h2>Luxury Package</h2>
    <p>Perfect for small events and intimate moments.</p>
    <div><strike><h1 className="striked">₹1,37,000</h1></strike><h1 className="mainprice">₹1,10,000</h1></div> 
    <h4>Reception & Wedding</h4>
    <ul>
      <li>One Traditional Photographer</li>
      <li>One Traditional Videographer</li>
      <li>One Candid Photographer</li>
      <li>One Candid Videographer</li>
      <li>One Drone Pilot</li>
    </ul>
    <h4>Deliverables</h4>
    <ul>
      <li>2 Premium Album 90 pages each Full HD Documentary Video, 4-5 mins Wedding Film Edited & Ulimited Soft Copies with Pendrive.</li>
    </ul>
    <h4>Complimentaries</h4>
    <ul>
    <li>Outdoor Photoshoot(Mini Album)</li>
    <li>Outdoor Videoshoot</li>
    <li>3mins cinematic video edited</li>
    <li>Teaser Video Edited</li>
      <li>4 nos of Photo Frames</li>
      <li>2 nos of Yearly Calender</li>
      <li>Instagram Reels</li>
      <li>E-Invites</li>
    </ul>
    
  </div>

</div>

    </section>
  );
};

export default Pricing;
