import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import ExplorePrograms from "./pages/programs";
import PaymentPage from "./pages/PaymentPage";
import EventsPage from "./pages/events";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<ExplorePrograms />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
