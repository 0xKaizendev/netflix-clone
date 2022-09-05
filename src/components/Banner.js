import React, { useEffect, useState } from "react";
import axios from "./axios";
import request from "./request";
const Banner = () => {
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
  console.log(movie);
  return (
    <header>
      {/* Title */}

      {/* Buton */}
      {/* Description */}
    </header>
  );
};

export default Banner;
