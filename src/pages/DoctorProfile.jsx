import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function DoctorProfile() {
  const { id } = useParams();

  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get(`/api/doctors/${id}/`)
      .then((response) => {
        console.log("Doctor:", response.data);
        setDoctor(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <p>Loading doctor...</p>
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="container py-5 text-center">
        <p>Doctor not found.</p>
      </div>
    );
  }

  return (
    <div className="container py-5">

      <h2 className="text-center mb-5">
        Doctor Profile
      </h2>

      <div className="card shadow mx-auto" style={{ maxWidth: "600px" }}>

        <img
          src={`https://medicare-hospital-zauc.onrender.com/,${doctor.image}`}
          className="card-img-top"
          alt={doctor.name}
          style={{
            height: "350px",
            objectFit: "cover",
          }}
        />

        <div className="card-body text-center">

          <h3>{doctor.name}</h3>

          <p>
            <strong>Department:</strong>{" "}
            {doctor.department}
          </p>

          <p>
            <strong>Qualification:</strong>{" "}
            {doctor.qualification}
          </p>

          <p>
            <strong>Experience:</strong>{" "}
            {doctor.experience} years
          </p>

        </div>

      </div>

    </div>
  );
}

export default DoctorProfile;