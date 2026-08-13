import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import DoctorProfile from "./pages/DoctorProfile";
import Departments from "./pages/Departments";
import Services from "./pages/Services";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/doctors" element={<Doctors />} />

        <Route
          path="/doctors/:id"
          element={<DoctorProfile />}
        />

        <Route path="/departments" element={<Departments />} />

        <Route path="/services" element={<Services />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/appointment" element={<Appointment />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;