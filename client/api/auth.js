import axios from "axios";

const API = "http://localhost:3000/api";

export const formRequest = (contact) =>
  axios.post(`${API}/contactForm`, contact);
