import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";

export function useFilter(movieData = []) {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState(movieData);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [minRating, setMinRating] = useState(5);
  const [yearRange, setYearRange] = useState([]);
  const [maxRating, setMaxRating] = useState(10); // عشان كلهم يظهروا
  // const [minYear, setMinYear] = useState(1900);
  const [maxYear, setMaxYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setMovies(movieData);
    if (movieData.length > 0) {
      const years = movieData
        .map((m) => parseInt(m.year))
        .filter((y) => !isNaN(y));
      const minYear = Math.min(...years);
      const maxYear = Math.max(...years);
      setYearRange([minYear, maxYear]);
    }
  }, [movieData]);

  // const location = useLocation();
  // console.log(location.pathname); // يطبع المسار الحالي
  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesSearch = searchQuery
        ? (movie.name || movie.title || "")
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        : true;

      const matchesGenre = selectedGenre
        ? movie.category || movie.genre
          ? (movie.category || movie.genre)
              .toString()
              .split(",")
              .some(
                (g) => g.trim().toLowerCase() === selectedGenre.toLowerCase()
              )
          : false
        : true;

      const matchesRating =
        movie.rating || movie.imdbRating
          ? parseFloat(movie.rating || movie.imdbRating) >= minRating
          : true;

      const movieYear = parseInt(movie.year);
      const matchesYear =
        yearRange.length > 0 &&
        !isNaN(movieYear) &&
        movieYear >= yearRange[0] &&
        movieYear <= yearRange[1];

      return matchesSearch && matchesGenre && matchesRating && matchesYear;
    });
  }, [movies, searchQuery, selectedGenre, minRating, yearRange]);

  const handleGenreFilter = (genre) => {
    setSelectedGenre(genre);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleViewDetails = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  const handleDeleteMovie = (movieId) => {
    const updatedMovies = movies.filter((movie) => movie.imdbID !== movieId);
    setMovies(updatedMovies);
  };

  return {
    searchQuery,
    filteredMovies,
    showModal,
    selectedMovie,
    handleSearchChange,
    handleViewDetails,
    handleCloseModal,
    handleDeleteMovie,
    handleGenreFilter,
    minRating,
    selectedGenre,
    setMinRating,
    yearRange,
    setYearRange,
    setMaxRating,
    setMaxYear,
    maxRating,
    maxYear
  };
}
