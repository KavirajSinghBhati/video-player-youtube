import axios from "axios";

const KEY = "AIzaSyA83YqCdU6XeiYPa1PUAS7EymyIgJ79278";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
