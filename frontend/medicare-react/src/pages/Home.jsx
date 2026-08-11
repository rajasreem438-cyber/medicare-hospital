import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import API from "../services/api";

function Home() {
  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    API.get("/api/doctors/")
      .then((response) => {
        setDoctors(response.data.slice(0, 3));
      })
      .catch((error) => {
        console.log("Doctors Error:", error);
      });

    API.get("/api/services/")
      .then((response) => {
        setServices(response.data.slice(0, 3));
      })
      .catch((error) => {
        console.log("Services Error:", error);
      });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold">
            Welcome to Medicare Hospital
          </h1>

          <p className="lead">
            Providing Quality Healthcare with Compassion and Care
          </p>

          <Link
            to="/appointment"
            className="btn btn-primary btn-lg"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="container py-5">
        <h2 className="text-center mb-4">
          About Us
        </h2>

        <p className="text-center">
          Medicare Hospital provides quality healthcare with
          experienced doctors, advanced technology, and 24×7
          emergency care.
        </p>
      </section>

      {/* Doctors Preview */}
      <section className="container py-5">
        <h2 className="text-center mb-4">
          Our Doctors
        </h2>

        <div className="row">
          {doctors.map((doctor) => (
            <div
              className="col-md-4 mb-4"
              key={doctor.id}
            >
              <div className="card shadow h-100 text-center">
                {doctor.image && (
                  <img
                    src={`http://127.0.0.1:8000${doctor.image}`}
                    className="card-img-top"
                    alt={doctor.name}
                    style={{
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />
                )}

                <div className="card-body">
                  <h5>{doctor.name}</h5>
                  <p>{doctor.department}</p>
                  <p>
                    {doctor.qualification}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/doctors"
            className="btn btn-outline-primary"
          >
            View All Doctors
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">
            Our Services
          </h2>

          <div className="row">
            {services.map((service) => (
              <div
                className="col-md-4 mb-4"
                key={service.id}
              >
                <div className="card shadow h-100 text-center p-4">
                  <h3>🏥</h3>

                  <h5>{service.name}</h5>

                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="btn btn-outline-primary"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;