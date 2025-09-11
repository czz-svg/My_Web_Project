import Header from "./Header";
import Weather from "./Weather";
import "./WeatherPage.css";
export default function WeatherPage() {
  return (
    <>
      <div className="weather-scope">
        <Header />
        <Weather />
      </div>
    </>
  );
}
