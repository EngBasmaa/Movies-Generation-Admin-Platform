import { SharedCard } from "../shared/SharedCard";
import { Link, useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import {  useSelector } from "react-redux";
import { useEffect,useState } from "react";

export function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const { movies = [], isLoading = false, error = null } = useSelector(store => store.movieSlice || {});


  useEffect(() => {
    if (movies.length > 0) {

      setMovie(movies.find(movie => movie.id === id));  
    }
 
}, [id]);
  

  if (!movie) {
    return (
      <SharedCard title="Movie Not Found" textColor="text-danger">
        <p className="lead">Sorry, this movie does not exist.</p>
        <Link to="/Movies" className="btn btn-info mt-3">
          Back to Movies
        </Link>
      </SharedCard>
    );
  }

  // Safely handle undefined category and actors
  const categories = movie.category ? movie.category.join(", ") : "N/A";
  const actors = movie.actors ? movie.actors.join(", ") : "N/A";

  return (
   <>
      {isLoading && <Loading />}
      
      {error &&  <SharedCard title="Error" textColor="text-danger">
        <p className="lead">
          Something went wrong while fetching the movie details.
        </p>
        <Link to="/Movies" className="btn btn-info mt-3">
          Back to Movies
        </Link>
      </SharedCard>}

      {!error && !isLoading && movie && (
          <SharedCard
      className="bg-dark text-light"
      title={`Movie Details: ${id}`}
      textColor="text-warning"
    >
      <p className="lead fs-4 mt-3">
        Movie Name : <strong>{movie?.name}</strong>
      </p>
      <p className="lead fs-4 mt-3">
        Movie Duration : <strong>{movie?.duration}</strong>
      </p>
      <p className="lead fs-4 mt-3">
        Premier Date : <strong>{movie?.premier}</strong>
      </p>
      <p className="lead fs-4 mt-3">
        Rating : <strong>{movie?.rating}</strong>
      </p>
      <p className="lead fs-4 mt-3">
        Categories : <strong>{categories}</strong>
      </p>
      <p className="lead fs-4 mt-3">
        Director : <strong>{movie?.director}</strong>
      </p>
      <p className="lead fs-4 mt-3">
        Writer : <strong>{movie?.writer}</strong>
      </p>
      <p className="lead fs-4 mt-3">
        Actors : <strong>{actors}</strong>
      </p>
      <p className="lead fs-4 mt-3">
        Description : <strong>{movie?.description}</strong>
      </p>
      <Link to="/Movies" className="btn btn-info mt-5">
        Back to Movies
      </Link>
    </SharedCard>
      )}
  
    </>
  )
}
