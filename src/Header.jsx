import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="container">
        <ul className="ul-class">
          <li className="li-class">
            <p className="p-class">
              Purchase two eligible seasonal products to receive a Karst Eau de
              Parfum sample.
              <a className="link-class">Browse formulations</a>
            </p>
          </li>
        </ul>
      </div>
      <div className="shippingBanner">
        <div className="inside_shippingBanner">
          <div className="banner_content">
            <button className="banner_btn">
              <p>
                Click and Collect is now available in Hong Kong. Enjoy
                complimentary shipping on all orders.
              </p>
              <svg
                aria-labelledby="plus-:R9aj6:"
                data-testid="data-testid-Icon"
                focusable="false"
                height="22"
                role="img"
                style={{ height: "22px", width: "22px" }}
                tabIndex="-1"
                viewBox="0 0 50 50"
                width="22"
              >
                <title id="plus-:R9aj6:">plus</title>
                <g>
                  <polygon
                    points="26.2,15.2 23.8,15.2 23.8,23.9 15,23.9 15,26.4 23.8,26.4 23.8,35.1 26.2,35.1 26.2,26.4 35,26.4 35,23.9 26.2,23.9"
                    className="Icon_plus__raXpr"
                  ></polygon>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="header_inside">
          <nav>
            <ul>
              <li>
                <button>Skin Care</button>
              </li>
              <li>
                <button>Body & Hand</button>
              </li>
              <li>
                <button>Fragrance</button>
              </li>
              <li>
                <button>Home</button>
              </li>
              <li>
                <button>Kites & Travel</button>
              </li>
              <li>
                <button>Gifts</button>
              </li>
              <li>
                <button>Read</button>
              </li>
              <li>
                <button>Stores</button>
              </li>
              <li>
                <button>Facial Appointments</button>
              </li>
              <li>
                <button>
                  <svg
                    aria-labelledby="search-:r69:"
                    data-testid="data-testid-Icon"
                    focusable="false"
                    height="18"
                    role="img"
                    tabIndex="-1"
                    viewBox="0 0 16 16"
                    width="18"
                    style={{ height: "18px", width: "18px" }}
                  >
                    <title id="search-:r69:">search</title>
                    <g>
                      <path d="M11.9544 10.8246C12.8838 9.65831 13.3941 8.18223 13.3941 6.68793C13.3941 3.00683 10.3872 0 6.68793 0C2.98861 0 0 3.00683 0 6.68793C0 10.369 3.00683 13.3759 6.68793 13.3759C8.16401 13.3759 9.64009 12.8656 10.8246 11.9362L14.8519 15.9636L16 14.8155L11.9544 10.8246ZM6.68793 11.7904C3.89977 11.7904 1.62187 9.51253 1.62187 6.72437C1.62187 3.93622 3.89977 1.65831 6.68793 1.65831C9.47608 1.65831 11.754 3.93622 11.754 6.72437C11.754 9.51253 9.47608 11.7904 6.68793 11.7904Z"></path>
                    </g>
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>
                <button>Log in</button>
              </li>
              <li>
                <button>Cabinet</button>
              </li>
              <li>
                <button>Cart</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="header_smallScreenSize">
        <div className="header_inside">
          <nav>
            <ul>
              <li>
                <button onClick={toggleDropdown}>Shop</button>
              </li>
              <li>
                <button>Read</button>
              </li>
              <li>
                <button>Stores</button>
              </li>
              <li>
                <button>
                  <svg
                    aria-labelledby="search-:r69:"
                    data-testid="data-testid-Icon"
                    className="search_icon"
                    focusable="false"
                    height="18"
                    role="img"
                    tabIndex="-1"
                    viewBox="0 0 16 16"
                    width="18"
                    style={{ height: "9px", width: "9px" }}
                  >
                    <title id="search-:r69:">search</title>
                    <g>
                      <path d="M11.9544 10.8246C12.8838 9.65831 13.3941 8.18223 13.3941 6.68793C13.3941 3.00683 10.3872 0 6.68793 0C2.98861 0 0 3.00683 0 6.68793C0 10.369 3.00683 13.3759 6.68793 13.3759C8.16401 13.3759 9.64009 12.8656 10.8246 11.9362L14.8519 15.9636L16 14.8155L11.9544 10.8246ZM6.68793 11.7904C3.89977 11.7904 1.62187 9.51253 1.62187 6.72437C1.62187 3.93622 3.89977 1.65831 6.68793 1.65831C9.47608 1.65831 11.754 3.93622 11.754 6.72437C11.754 9.51253 9.47608 11.7904 6.68793 11.7904Z"></path>
                    </g>
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>
                <button>Log in</button>
              </li>
              <li>
                <button>Cabinet</button>
              </li>
              <li>
                <button>Cart</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
