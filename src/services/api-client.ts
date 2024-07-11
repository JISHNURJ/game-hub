import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "d3bc42db60aa4bdbadea556c232b04dc",
  },
});
