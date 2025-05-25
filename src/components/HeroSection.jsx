import React, { Component } from "react";
import { Carousel, Button } from "react-bootstrap";
import img1 from "../assets/imgs/banner-02.jpg";
import img2 from "../assets/imgs/banner3.jpg";
import img3 from "../assets/imgs/banner-04.jpg";
import styles from "../css/heroSection.module.css";

export class HeroSection extends Component {
  render() {
    return (
      <Carousel data-bs-theme="dark" style={{ height: "120vh" }}>
        <Carousel.Item className={styles.carouselHeight}>
          <img
            className={`d-block w-100 ${styles.carouselHeight}`}
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption
            className={`text-start hero-section ${styles.heroCaption}`}
          >
            <p className={styles.heroSign}>Adventure Movie</p>
            <h5 className={styles.heroTitle}>Love Nightmare</h5>
            <p className={styles.heroSubtitle}>
              Adventure Movie Written and Directed by Aleesha Rose <br />/
              Ireland 2023
            </p>
            <div>
              <Button
                style={{ backgroundColor: "white", color: "black" }}
                className={styles.moreInfoButton}
              >
                More Info
              </Button>
              <Button
                style={{ backgroundColor: "#d96c2c" }}
                className={styles.moreInfoButton}
              >
                Get Ticket
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.carouselHeight}>
          <img
            className={`d-block w-100 ${styles.carouselHeight}`}
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption
            className={`text-start hero-section ${styles.heroCaption}`}
          >
            <p className={styles.heroSign}>Adventure Movie</p>
            <h5 className={styles.heroTitle}>Love Nightmare</h5>
            <p className={styles.heroSubtitle}>
              Adventure Movie Written and Directed by Aleesha Rose <br />/
              Ireland 2023
            </p>
            <div>
              <Button
                style={{ backgroundColor: "white", color: "black" }}
                className={styles.moreInfoButton}
              >
                More Info
              </Button>
              <Button
                style={{ backgroundColor: "#d96c2c" }}
                className={styles.moreInfoButton}
              >
                Get Ticket
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.carouselHeight}>
          <img
            className={`d-block w-100 ${styles.carouselHeight}`}
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption
            className={`text-start hero-section ${styles.heroCaption}`}
          >
            <p className={styles.heroSign}>Adventure Movie</p>
            <h5 className={styles.heroTitle}>Love Nightmare</h5>
            <p className={styles.heroSubtitle}>
              Adventure Movie Written and Directed by Aleesha Rose <br />/
              Ireland 2023
            </p>
            <div>
              <Button
                style={{ backgroundColor: "white", color: "black" }}
                className={styles.moreInfoButton}
              >
                More Info
              </Button>
              <Button
                style={{ backgroundColor: "#d96c2c" }}
                className={styles.moreInfoButton}
              >
                Get Ticket
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
