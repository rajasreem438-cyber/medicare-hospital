import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:8000/",
});

export const bookAppointment = (data) => {
    return API.post("api/appointment/", data);
};

export default API;