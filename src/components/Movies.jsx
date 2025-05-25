import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MovieCard } from "./MovieCard";
import styles from "../css/movies.module.css";
import movieImage1 from "../assets/imgs/movie-image-09-768x513.jpg";
import movieImage2 from "../assets/imgs/movie-image-08-768x513.jpg";
import movieImage3 from "../assets/imgs/movie-image-07-768x519.jpg";
import filmRoll from "../assets/imgs/film-roll.png";

// Correctly reference the image in the movieData
const movieData = [
  {
    title: "Speed Pursuit",
    Poster: movieImage1, // No curly braces around the image import
    imdbRating: "7.8",
    imdbVotes: "5000",
    released: "2025-01-01"
  },
  {
    title: "A Silent Cry",
    Poster: movieImage2,
    imdbRating: "8.2",
    imdbVotes: "12000",
    released: "2024-12-01"
  },
  {
    title: "Galactic Wars",
    Poster: movieImage3,
    imdbRating: "9.0",
    imdbVotes: "30000",
    released: "2026-02-15"
  }
];

export function Movies() {
  const handleViewDetails = (movieTitle) => {
    console.log("Viewing details of: ", movieTitle);
  };
  const handleDelete = (movieTitle) => {
    console.log("Deleting movie: ", movieTitle);
  };
  return (
    <section
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
        padding: "50px 0"
      }}
    >
      <Container>
        <div className="text-center">
          <img
            src={filmRoll}
            alt="Image"
            width="30"
            style={{ height: "auto", marginBottom: "1.5rem" }}
          />
          <p style={{ color: "grey" }}>New upcoming movies</p>
          <h2 className={`mb-5 fw-bold text-center ${styles.moviesTitle}`}>
            Movies Now Playing
          </h2>
        </div>
        <Row className="g-4">
          {movieData.map((movie, index) => (
            <Col md={4} key={index}>
              <MovieCard
                title={movie.title}
                Poster={movie.Poster}
                imdbRating={movie.imdbRating}
                imdbVotes={movie.imdbVotes}
                released={movie.released}
                onViewDetails={() => handleViewDetails(movie.title)}
                onDelete={() => handleDelete(movie.title)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
