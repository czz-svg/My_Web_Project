import { useState } from "react";
import "./slider.css";
import { NavLink } from "react-router-dom";

export default function Slider(){
  const images = [
    "https://bayotech.vn/wp-content/uploads/2025/04/hinh-anh-cute-1.jpg",
    "https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/avatar-cute-3.jpg",
    "https://banobagi.vn/wp-content/uploads/2025/04/hinh-anh-cute-5-1.jpg",
  ];
  const [index, setIndex] = useState(0);
  const len = images.length;

  const prev = () => setIndex(i => (i - 1 + len) % len);
  const next = () => setIndex(i => (i + 1) % len);

  return (
    <div className="slider" aria-label="Image slider">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div className="slide" key={i}>
            <NavLink to="/features/weather" className="link"><img src={src} alt={`Slide ${i + 1}`} /></NavLink>
          </div>
        ))}
      </div>

      <button className="nav-btn prev" onClick={prev} aria-label="Previous" type="button">
        &#x276E;
      </button>
      <button className="nav-btn next" onClick={next} aria-label="Next" type="button">
        &#x276F;
      </button>
    </div>
  );
}

