import Slider from "../../components/Slider";
import "./Home.css";
export default function Home() {
  return (
    <main id="home-page">
      <section id="hero">
        <div className="text">
          <h1>Colorful Life</h1>
          <p>
            Welcome to my personal website, a small corner on the internet that
            I built with the hope of bringing you not only useful tools but also
            a bit of fun in everyday life. Here you can easily find different
            kinds of utilities designed to make your routines smoother, your
            experiences more colorful, and even help you discover new ideas you
            may not have thought of before. I am constantly creating,
            experimenting, and improving—adding new features on various topics,
            from practical everyday helpers to playful little experiments. The
            goal is simple: to offer you a place where creativity and utility
            meet, making life just a little more interesting and a lot easier.
          </p>
          <button
            className="btn-start"
            onClick={() => {
              document
                .getElementById("slider-features")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            Get Start
          </button>
        </div>
        <div className="img">
          <img src="./img/hero-bg.svg" alt="welcome" />
        </div>
      </section>
      <section id="slider-features">
        <div className="slider-features-title">
          <h1>Discover Amazing Features</h1>
          <p>
            Explore a wide collection of creative utilities carefully built to
            make your daily tasks faster, smarter, and more enjoyable. Each
            feature is designed with simplicity and clarity in mind, so you can
            focus on what matters most. Whether you’re searching for
            inspiration, solving everyday problems, or just having fun, our
            tools bring convenience, creativity, and excitement together in one
            place.
          </p>
        </div>
        <Slider />
      </section>
      <section className="video-container">
        <h1>Useful Video</h1>
        <div className="video-content">
          <div className="video-screen">
            <iframe
              src="https://www.youtube.com/embed/W1EqkmoUgDU"
              frameborder="0"
              title="YouTube video"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
          <div className="video-text">
            <div className="video-text-content">
              <img src="./img/tick-icon.png" alt="tick-icon" />
              <h2>Helpful tutorial</h2>
            </div>
            <div className="video-text-content">
              <img src="./img/tick-icon.png" alt="tick-icon" />
              <h2>Entertaining</h2>
            </div>
            <div className="video-text-content">
              <img src="./img/tick-icon.png" alt="tick-icon" />
              <h2>Practical tips</h2>
            </div>
            <div className="video-text-content">
              <img src="./img/tick-icon.png" alt="tick-icon" />
              <h2>Exciting</h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
