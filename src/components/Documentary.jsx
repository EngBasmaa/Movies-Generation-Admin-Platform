import React, { Component } from "react";
import styles from "../css/documentary.module.css"; // Assuming you have a CSS module
import { Container, Row, Col, Button } from "react-bootstrap";
import banner from "../assets/imgs/background-documentary-home1.jpg";
import award1 from "../assets/imgs/awards-banner-01.png";
import award2 from "../assets/imgs/awards-banner-02.png";
// import { FaPlay } from "react-icons/fa";
import filmRoll from "../assets/imgs/film-roll.png";

export class Documentary extends Component {
  render() {
    return (
      <div className={styles.heroContainer}>
        <img className={styles.heroImage} src={banner} alt="Hero Banner" />
        <Container className={styles.heroOverlay}>
          <Row>
            <Col md={10} lg={10}>
              <div>
                <img
                  src={filmRoll}
                  alt="Image"
                  width="30"
                  style={{ height: "auto", marginBottom: "1.5rem" }}
                />
              </div>

              <h5 className={styles.heroSign2}>Documentary</h5>
              <h1 className={styles.heroTitle2}>Life Under an Umbrella</h1>
              <p className={styles.heroSubtitle2}>
                Phasellus non cursus ligula, sed mattis urna. Aenean ac tortor
                gravida, volutpat quam eget, consequat elit.
              </p>
              <div className="documentayImages">
                <img
                  src={award1}
                  alt="Image 1"
                  width="120"
                  style={{ height: "auto", opacity: "0.5" }}
                />
                <img
                  src={award2}
                  alt="Image 2"
                  width="120"
                  style={{
                    height: "auto",
                    marginLeft: "3rem",
                    opacity: "0.5"
                  }}
                />
              </div>
              <div className="d-flex w-100 mt-5">
                <Button
                  variant="outline-light"
                  className={styles.moreInfoButton}
                >
                  More Info
                </Button>
                <Button variant="primary" className={styles.watchTrailerButton}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-play-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-.94 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                  </svg>
                  Watch the Trailer
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
