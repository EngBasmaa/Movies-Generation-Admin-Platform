import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllMoviesAction } from "../ToolkitStore/movieSlice";
import { MoviesHeader } from "../components/MoviesHeader";
import { Row, Col, Card, Container } from "react-bootstrap";
import styles from "../css/movies.module.css";
import Table from "react-bootstrap/Table";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";
import { Link } from "react-router-dom";

export function MoviesDashboardPage() {
  const { movies = [], isLoading = false, errors = null } = useSelector(
    store => store.movieSlice || {}
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMoviesAction());
  }, []);

  const deleteHandler = id => {
    console.log(id);
    // dispatch action deleteMovie
    // setIsLoading(true);
    // deleteMovie(id)
    //   .then(() => {
    //     setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
    //   })
    //   .catch(err => setErrors(err))
    //   .finally(() => setIsLoading(false));
  };

  return (
    <Container className="my-5  mx-auto">
      test
      <Row className="w-100 my-5 m-auto my-5">
        <Col>
          <Card className="shadow-lg my-5 p-4 m-auto">
            <h3 className="text-center my-5 mb-4 text-dark fw-bold">
              Movie List
            </h3>

            <Container className="mb-5 p-5 mx-auto">
              <MoviesHeader />
            </Container>

            {isLoading && <Loading />}
            {errors && <Error />}

            {!isLoading && !errors && movies.length > 0
              ? <Table
                  striped
                  bordered
                  hover
                  responsive
                  className={styles.movieTable}
                >
                  <thead className="table-dark">
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Duration</th>
                      <th>Premier Date</th>
                      <th>Rating</th>
                      <th>Category</th>
                      <th>Director</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {movies.map((movie, index) =>
                      <tr key={movie.id}>
                        <td>
                          {index + 1}
                        </td>
                        <td>
                          {movie.name}
                        </td>
                        <td>
                          {movie.duration}
                        </td>
                        <td>
                          {movie.premier}
                        </td>
                        <td>
                          {movie.rating}
                        </td>
                        <td>
                          {Array.isArray(movie.category)
                            ? movie.category.join(", ")
                            : movie.category}
                        </td>
                        <td>
                          {movie.director}
                        </td>
                        <td>
                          <Link to={`/movies/${movie.id}`}>
                            <i className="fs-4 mx-1 text-warning bi bi-eye-fill" />
                          </Link>

                          <Link to={`/movies/${movie.id}/edit`}>
                            <i className="fs-4 mx-1 text-info bi bi-pencil-square" />
                          </Link>

                          <i
                            onClick={() => deleteHandler(movie.id)}
                            className="fs-4 mx-1 text-danger bi bi-trash3-fill"
                            style={{ cursor: "pointer" }}
                          />
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              : <p className="text-center text-muted">No movies available.</p>}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
