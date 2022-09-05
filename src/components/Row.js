import React, { useEffect, useState, largeRow } from "react";
import axios from "./axios";
import "../Row.css";
const posterBaseUrl = "https://image.tmdb.org/t/p/original";
const Row = ({ title, fetchUrl, largeRow }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    // fetching movies pic once the age load
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      {/*Title */}
      <h2>{title}</h2>
      {/* posters */}
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row-poster ${largeRow && "large-poster"}`}
            src={`${posterBaseUrl}${
              largeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
