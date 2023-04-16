import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Paginas
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Router>
    <Routes>
      <Route path="/porfolio_yellow/" element={<Home />}></Route>
      <Route path="/porfolio_yellow/home" element={<Home />}></Route>
      <Route path="/porfolio_yellow/about" element={<About />}></Route>
      <Route path="/porfolio_yellow/portfolio" element={<Portfolio />}></Route>
      <Route path="/porfolio_yellow/contact" element={<Contact />}></Route>
    </Routes>
  </Router>
  // </React.StrictMode>
);
