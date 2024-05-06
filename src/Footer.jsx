import React from "react";
import "./footer.css";
import Close from "./assets/Close";
import Form from "./Form";
import Order from "./Order";
import Services from "./Services";
import Location from "./Location";
import Sustainability from "./Sustainability";
import About from "./About";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <div className="footer_container">
      <div>
        <div className="grid_section">
          <div className="grid_column">
            <Form />
          </div>
          <section>
            <Order />
          </section>
          <section>
            <Services />
          </section>
          <section>
            <Location />
          </section>
          <section className="double_width">
            <Sustainability />
          </section>
          <section>
            <About />
          </section>
          <section>
            <SocialMedia />
          </section>
        </div>
      </div>
      <div className="banner">
        <span>© Aesop</span>
      </div>
    </div>
  );
};

export default Footer;
