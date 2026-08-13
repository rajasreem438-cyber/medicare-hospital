import { useEffect, useState } from "react";
import API from "../services/api";

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/api/services/")
      .then((response) => {
        console.log("Services:", response.data);
        setServices(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container py-5">

      <h2 className="text-center mb-5">
        Our Services
      </h2>

      {loading ? (
        <p className="text-center">Loading services...</p>
      ) : services.length === 0 ? (
        <p className="text-center">
          No services available.
        </p>
      ) : (
        <div className="row">

          {services.map((service) => (
            <div
              className="col-md-4 mb-4"
              key={service.id}
            >
              <div className="card shadow text-center p-4 h-100">

                <h3>🏥</h3>

                <h4>{service.name}</h4>

                <p>{service.description}</p>

              </div>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Services;