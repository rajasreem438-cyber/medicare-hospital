import { useEffect, useState } from "react";
import API from "../services/api";

function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/api/gallery/")
      .then((response) => {
        console.log("Gallery:", response.data);
        setGallery(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Gallery Error:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container py-5">

      <h2 className="text-center mb-5">
        Gallery
      </h2>

      {loading ? (
        <p className="text-center">Loading gallery...</p>
      ) : (
        <div className="row">

          {gallery.map((item) => (
            <div
              className="col-md-6 col-lg-3 mb-4"
              key={item.id}
            >
              <div className="card shadow h-100">

                <img
                  src={`http://127.0.0.1:8000${item.image}`}
                  className="card-img-top"
                  alt={item.title}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body text-center">
                  <h5>{item.title}</h5>
                </div>

              </div>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Gallery;