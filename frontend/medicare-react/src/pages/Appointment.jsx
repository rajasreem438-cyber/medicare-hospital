import { useState } from "react";
import API from "../services/api";

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    doctor: "",
    date: "",
    message: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Sending data:", formData);

    try {
      const response = await API.post(
        "/api/appointment/",
        formData
      );

      console.log("Success response:", response.data);

      if (response.data.status) {
        setMessage("Appointment Booked Successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          department: "",
          doctor: "",
          date: "",
          message: "",
        });
      }
    } catch (error) {
      console.log("ERROR:", error);
      console.log("RESPONSE:", error.response);
      console.log("DATA:", error.response?.data);

      setMessage(
        error.response?.data?.detail ||
        JSON.stringify(error.response?.data) ||
        "Appointment booking failed."
      );
    }
  };

  return (
    <div className="container py-5">

      <h2 className="text-center mb-5">
        Book Appointment
      </h2>

      <form
        className="col-md-8 mx-auto"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          className="form-control mb-3"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          className="form-control mb-3"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          className="form-control mb-3"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <select
          name="department"
          className="form-select mb-3"
          value={formData.department}
          onChange={handleChange}
          required
        >
          <option value="">Select Department</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Neurology">Neurology</option>
          <option value="Pediatrics">Pediatrics</option>
          <option value="General Medicine">
            General Medicine
          </option>
        </select>

        <select
          name="doctor"
          className="form-select mb-3"
          value={formData.doctor}
          onChange={handleChange}
          required
        >
          <option value="">Select Doctor</option>
          <option value="Dr. Anjali">Dr. Anjali</option>
          <option value="Dr. Arun">Dr. Arun</option>
          <option value="Dr. Meera">Dr. Meera</option>
        </select>

        <input
          type="date"
          name="date"
          className="form-control mb-3"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          className="form-control mb-3"
          rows="4"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Book Appointment
        </button>

        {message && (
          <div className="alert alert-info mt-3">
            {message}
          </div>
        )}

      </form>
    </div>
  );
}

export default Appointment;