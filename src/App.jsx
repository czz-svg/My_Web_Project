import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import ClockPage from "./pages/features/clock/ClockPage";
import WeatherPage from "./pages/features/weather/WeatherPage";
import QuizPage from "./pages/features/quiz/QuizPage";
import RandomPage from "./pages/features/random/RandomPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <nav className="nav">
          <NavLink to="/" end className="link">
            <div className="logo">
              <img src="./img/logo-cat.png" alt="logo" />
              <div className="logo-text">My Web</div>
            </div>
          </NavLink>
          <div className="links">
            <NavLink to="/" end className="link">
              Home
            </NavLink>
            <div className="dropdown">
              <NavLink className="link">Features ▾</NavLink>
              <div className="dropdown-content">
                <NavLink to="/features/quiz" className="link">
                  Quiz
                </NavLink>
                <NavLink to="/features/clock" className="link">
                  Clock
                </NavLink>
                <NavLink to="/features/weather" className="link">
                  Weather
                </NavLink>
                <NavLink to="/features/random" className="link">
                  Random
                </NavLink>
              </div>
            </div>
            <NavLink to="/contact" className="link">
              Contact
            </NavLink>
            <NavLink to="/about" className="link">
              About
            </NavLink>
          </div>
        </nav>
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/features/clock" element={<ClockPage />} />
            <Route path="/features/weather" element={<WeatherPage />} />
            <Route path="/features/quiz" element={<QuizPage />} />
            <Route path="/features/random" element={<RandomPage />} />
          </Routes>
        </main>
      </div>
        <Footer/>
    </>
  );
}

export default App;
