import { useState } from "react";
import API from "../services/api";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post(
        "/api/contact/",
        formData
      );

      console.log("Success:", response.data);

      if (response.data.status) {
        setStatus("Message Sent Successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.log("ERROR:", error);
      console.log("RESPONSE:", error.response?.data);

      setStatus("Message sending failed.");
    }
  };

  return (
    <div className="container py-5">

      <h2 className="text-center mb-5">
        Contact Us
      </h2>

      <div className="row">

        <div className="col-md-6">
          <h4>Hospital Address</h4>

          <p>
            <strong>Address:</strong> Medicare Hospital, Kasaragod, Kerala
          </p>

          <p>
            <strong>Phone:</strong> +91 9876543210
          </p>

          <p>
            <strong>Email:</strong> info@medicare.com
          </p>

          <p>
            <strong>Working Hours:</strong> 24 × 7
          </p>
        </div>

        <div className="col-md-6">

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              className="form-control mb-3"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              className="form-control mb-3"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              className="form-control mb-3"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              className="form-control mb-3"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              className="form-control mb-3"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Send Message
            </button>

            {status && (
              <div className="alert alert-info mt-3">
                {status}
              </div>
            )}

          </form>

        </div>

      </div>
    </div>
  );
}

export default Contact;