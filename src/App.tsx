import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Contact from "./components/Contact";
import GridBackground from "./components/GridBackground";
import "./styles/components.css";

function App() {
  return (
    <Router>
      <GridBackground />
      <header>
        <div className="header-content">
          <a href="/" className="logo">
            <img
              src="https://placehold.co/32x32/0099ff/ffffff?text=J"
              alt="Logo"
              className="logo-icon"
            />
            <span>Joshua Ham</span>
          </a>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/"
            element={
              <div className="container">
                <div className="content-section">
                  <h2>Welcome to Our Gallery</h2>
                  <p>
                    Discover our collection of beautiful images and inspiring
                    content.
                  </p>
                  <img
                    src="https://placehold.co/800x400/0099ff/ffffff?text=Featured+Image"
                    alt="Featured Image"
                    className="centered-image"
                  />
                </div>

                <div className="content-section">
                  <h2>Our Vision</h2>
                  <p>
                    Creating beautiful experiences through visual storytelling.
                  </p>
                  <img
                    src="https://placehold.co/600x400/ff6b6b/ffffff?text=Vision+Image"
                    alt="Vision Image"
                    className="centered-image"
                  />
                </div>

                <div className="content-section">
                  <h2>Latest Work</h2>
                  <p>
                    Explore our most recent projects and creative endeavors.
                  </p>
                  <img
                    src="https://placehold.co/700x400/4ecdc4/ffffff?text=Latest+Work"
                    alt="Latest Work"
                    className="centered-image"
                  />
                </div>
              </div>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
