import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AIGenerator from "./pages/AIGenerator";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen text-white flex flex-col items-center">
        <Navbar />
        <div className="w-full flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-generator" element={<AIGenerator />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
