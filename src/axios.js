import axios from "axios";

const uri = "http://localhost:3001/";

const instance = axios.create({
  baseURL: uri,
});

export default instance;
