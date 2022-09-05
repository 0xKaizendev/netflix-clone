import React, { useEffect, useState } from "react";
import axios from "./axios";
import request from "./request";
const Banner = () => {
  const posterBaseUrl = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(request.fetchNetflixOriginals);
      var randomMovie = Math.floor(
        Math.random() * response.data.results.length - 1
      );
      setMovie(response.data.results[randomMovie]);
      return response;
    };
    fetchData();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${posterBaseUrl}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        {/* Title */}
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* Buton */}
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button space">My list</button>
        </div>
        <h1 className="banner-desc" style={{ paddingTop: "20px" }}>
          {movie.overview}
        </h1>
        {/* Description */}
      </div>
      <div className="banner-bot"></div>
    </header>
  );
};

export default Banner;
