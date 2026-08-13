import axios from "axios";

const API = axios.create({
  baseURL: "https://medicare-hospital-zauc.onrender.com/",
});

export const bookAppointment = (data) => {
  return API.post("api/appointment/", data);
};

export default API;