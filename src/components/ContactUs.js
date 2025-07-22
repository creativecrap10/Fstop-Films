import React from "react";
import "../stylesheet/Contact.css"

const ContactUs = () => {
  return (
    <section id="contact" className="section container">
      <div className="heading">
        <h4>Contact Us</h4>
        <h1>Feel Free to Reach Us</h1>
      </div>
        <div className="contact-container">

       {/* Right Side - Contact Form */}
      <div className="company-info heading">
        <div className="contact-details">
          <p><strong>Phone:</strong> +91 86673 52313</p>
          <p><strong>Email:</strong> fstop2203@gmail.com</p>
          <p><strong>Address:</strong> Karur & Coimbatore, Tamil Nadu</p>
        </div>
        <div className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125346.06760236711!2d78.08014463105205!3d10.958491979884693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2fd6d2b4e5b5%3A0x6a0b8b8b8b8b8b8b!2sKarur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1738471608069!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Store Location"
            aria-label="Google Maps showing Fstop Films location in Karur"
          ></iframe>
        </div>
      </div>

      
      {/* Left Side - Company Info */}
      <div className="contact-form heading">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your message here" required></textarea>
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>






    </div>

    </section>
  );
};

export default ContactUs;
