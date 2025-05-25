import React, { useContext } from "react";
import { Row, Col, Container } from "react-bootstrap";
import lightBgImage from "../assets/imgs/background-blog-home-1.png"; // Light theme image
import darkBgImage from "../assets/imgs/bg-black-popcorn.jpg"; // Dark theme image
import { ThemeContext } from "../context/ThemeContext"; // Assuming you have a ThemeContext
import styles from "../css/upcomingEvents.module.css";
import filmRoll from "../assets/imgs/film-roll.png";
import lightImg from "../assets/imgs/movie-image-11-768x514.jpg";
import darkImg from "../assets/imgs/Event06.jpg";

export function UpcomingEvents() {
  const { theme } = useContext(ThemeContext); // Get the current theme

  // Set the background image based on the theme
  const backgroundImage = theme === "dark" ? darkBgImage : lightBgImage;
  const titleColor = theme === "dark" ? "white" : "black";
  const imgSrc = theme === "dark" ? darkImg : lightImg;
  return <Container className={`${styles.container}`}>
      <Row style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundColor: "var(--bg-color)", color: "var(--text-color)", width: "100%", height: "100%" } // Use theme background color // Use theme text color
        } className="p-0 m-0">
        <Col md={6}>
          <div className="content p-5">
            <div>
              <img src={filmRoll} alt="img" width="30" style={{ height: "auto", marginBottom: "1.5rem" }} />
            </div>
            <h5 className={styles.heroSign2}>Upcoming Event</h5>
            <h2 className={styles.heroTitle2} style={{ color: titleColor }}>
              Register Yourself Now for the Events
            </h2>
            <p className={styles.heroSubtitle2}>
              This is the content section where you can put text or other
              information.
            </p>
            <p>
              React-Bootstrap provides a flexible and customizable way to lay
              out your components in a grid system.
            </p>
          </div>
        </Col>

        <Col md={6} className="p-0 m-0 h-100">
          <div className="image h-100 w-100 p-0 m-0">
            <img src={imgSrc} alt="Placeholder" className="img-fluid" style={{ height: "100%", width: "100%" }} />
          </div>
        </Col>
      </Row>
    </Container>;
}

export default UpcomingEvents;
