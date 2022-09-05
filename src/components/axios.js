import axios from "axios";
// url for making requests
const requestInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export default requestInstance;
