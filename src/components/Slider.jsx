import { useEffect, useState } from "react";
import "./slider.css";
import { NavLink } from "react-router-dom";

export default function Slider() {
  const [data, setData] = useState(null);
  const [index,setIndex] = useState(0)
  useEffect(() => {
    const sliderDataFile = "sliderData/slider-data.json";
    fetch(`${import.meta.env.BASE_URL}${sliderDataFile}`)
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);


  // console.log(`lenght: ${data?.features.length}`);
  // console.log(`index ngoai: ${index}`)

  const length = data?.features?.length ?? 0;
  const handleNext = () =>
    setIndex(prev => (prev < length - 1 ? prev + 1 : 0));

  const handlePrev = () =>
    setIndex(prev => (prev > 0 ? prev - 1 : Math.max(length - 1, 0)));

  useEffect(() => {
    if (!length) return;
    const id = setInterval(() => {
      setIndex(prev => (prev < length - 1 ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(id);
  }, [length]);

  if (!data) return <div className="slider">Đang tải…</div>;
  return (
    <div className="slider">
      <div className="slider-track" style={{transform: `translateX(${-index*100}%)`}}>
        {data?.features.map((feature, i) => (

          <div className="slide" key={i}>
            <NavLink to={feature.link} className="link">
              <img src={feature.src} alt={`feature-${i}`} />
              <p id="title-slide">{feature.description}</p>
            </NavLink>
            
          </div>

        ))}
      </div>

        <button className="nav-btn prev" onClick={handlePrev}>
           &#129172; {/*HTML entity */}
        </button>
        <button className="nav-btn next" onClick={handleNext}>
          &#129174;{/*HTML entity */}
        </button>

    </div>
  );
}
