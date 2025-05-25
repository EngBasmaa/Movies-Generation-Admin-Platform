import React, { Component } from "react";
import styles from "../css/logosSlider.module.css";

import logo1 from "../assets/imgs/partner1.png";
import logo2 from "../assets/imgs/partner2.png";
import logo3 from "../assets/imgs/partner3.png";
import logo4 from "../assets/imgs/partner4.png";
import logo5 from "../assets/imgs/partner5.png";
import logo6 from "../assets/imgs/partner6.png";

export class LogosSlider extends Component {
  render() {
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
    return (
      <div className={styles.imageSection2}>
        <div className={styles.imageGrid2}>
          {logos.map((logo, index) => (
            <span key={index} className={styles.imageItem2}>
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className={styles.sectionImage2}
                width="70"
                style={{ height: "auto" }}
              />
            </span>
          ))}
        </div>
      </div>
    );
  }
}
