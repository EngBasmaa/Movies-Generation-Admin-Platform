import React, { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import { Container, Row, Col, Form } from "react-bootstrap";
import { getAllMovies, deleteMovie } from "../API/movieAPI";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";
import { useFetch } from "../custom-hooks/UseFetch";
import myImage from "../assets/imgs/background-event-home-1.png";

export function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: movies, error, isLoading } = useFetch(getAllMovies);
  const [localMovies, setLocalMovies] = useState([]);

  // This useEffect is triggered whenever 'movies' is updated
  useEffect(() => {
    if (movies) {
      setLocalMovies(movies); // Update the local state with fetched data
    }
  }, [movies]);

  // Handle search query changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };


  const filterOutDeletedMovie = (deletedId) => {
    return (prevMovies) => prevMovies.filter((movie) => movie.id !== deletedId);
  };
  // Handle movie deletion
  const handleDeleteMovie = (id) => {
    deleteMovie(id)
      .then(() => {
        // Update local state to remove the deleted movie
        setLocalMovies(filterOutDeletedMovie(id));
      })
      .catch((err) => console.log(err));
  };

  // Filter movies based on the search query
  const filteredMovies = localMovies.filter((movie) =>
    movie.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {error && <Error />} {/* Show error if fetching fails */}

      <Container
        className="my-5 w-75 p-5"
        style={{
          background: "#0F2027",
          backgroundImage: "linear-gradient(to right, #2C5364, #203A43, #0F2027)",
        }}
      >
        <h2 className="text-center mb-4 text-light">Movies List</h2>

        <Form.Group controlId="search" className="my-5">
          <Form.Control
            type="text"
            placeholder="Search for a movie by name..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-50"
          />
        </Form.Group>

        {isLoading && <Loading />} 

        {!isLoading && !error && (
          <Row className="mt-5">
            
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie) => (
                <Col key={movie.id} md={4} className="mb-4">
                  <MovieCard
                    title={movie.name}
                    genre={
                      Array.isArray(movie.category)
                        ? movie.category.join(", ")
                        : movie.category
                    }
                    duration={movie.duration}
                    premier={movie.premier}
                    rating={movie.rating}
                    director={movie.director}
                    image={myImage}
                    id={movie.id}
                    onDelete={() => handleDeleteMovie(movie.id)}
                  />
                </Col>
              ))
            ) : (
              <p className="text-center text-muted">No movies available.</p> // Show if no movies match the search
            )}
          </Row>
        )}
      </Container>
    </>
  );
}
