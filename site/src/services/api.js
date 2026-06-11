// src/services/api.js

import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5171/api",
});