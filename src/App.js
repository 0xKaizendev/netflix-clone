import { useEffect } from "react";
import "./App.css";
import request from "./components/request";
import Row from "./components/Row";
import Banner from "./components/Banner";
function App() {
  return (
    <div className="App">
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        largeRow
      />
      <Row title="Trending Now" fetchUrl={request.fecthTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumetaries} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      {console.log(request.fetchDocumetaries)}
    </div>
  );
}

export default App;
