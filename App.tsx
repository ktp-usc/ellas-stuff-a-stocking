import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Home } from "./components/pages/Home";
import { About } from "./app/about/page";
import { GetInvolved } from "./app/get-involved/page";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-involved" element={<GetInvolved />} />
        </Routes>
      </div>
    </Router>
  );
}