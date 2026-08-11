import { useEffect, useState } from "react";
import API from "../services/api";

function Departments() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/api/departments/")
      .then((response) => {
        console.log("Departments:", response.data);
        setDepartments(response.data);
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
        Departments
      </h2>

      {loading ? (
        <p className="text-center">Loading departments...</p>
      ) : (
        <div className="row">

          {departments.map((department) => (
            <div
              className="col-md-3 mb-4"
              key={department.id}
            >
              <div className="card shadow text-center p-3 h-100">

                <h5>{department.name}</h5>

                <p>{department.description}</p>

              </div>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Departments;