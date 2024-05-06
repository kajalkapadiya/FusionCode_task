import React from "react";
import RightArrow from "./assets/RightArrow";
import "./form.css";

const Form = () => {
  return (
    <section className="form_container" style={{ color: "#fffef2" }}>
      <div>
        <h3>Subscribe to Aesop communications</h3>
        <div className="line"></div>
      </div>
      <form className="form_container">
        <label
          style={{
            position: "relative",
            display: "inline-block",
            width: "100%",
            marginTop: "2rem",
          }}
        >
          <input
            placeholder="Email address"
            type="text"
            style={{
              border: "1px solid #fffef2",
              backgroundColor: "transparent",
              padding: "0.5rem",
              width: "calc(100% - 40px)",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "transparent",
              border: "none",
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.5rem",
            }}
          >
            <RightArrow fill_color="#fffef2" />
          </button>
        </label>
      </form>
      <div
        className="form_sub"
        style={{ lineHeight: "1.8", alignItems: "center" }}
      >
        <input type="checkbox" style={{ borderColor: "#fffef2" }} />
        <label for=":R79bn6:">
          <p>
            Subscribe to receive communications from Aesop. By subscribing, you
            confirm you have read and understood our
            <a href="">
              <u>privacy policy</u>
            </a>
          </p>
        </label>
      </div>
    </section>
  );
};

export default Form;
