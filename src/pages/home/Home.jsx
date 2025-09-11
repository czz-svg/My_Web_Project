import Slider from "../../components/Slider"
import "./Home.css"
export default function Home(){
    return(
        <div>
            <section id="hero">
                <div className="text">
                    <h1>colorful life</h1>
                    <p>
                        welcome to my website. It provides some utilities to make your life more interesting and easier.
                    </p>
                    <p>
                        I provide many utilities on many different topics, creative and constantly improving
                    </p>
                    <button>Get Start</button>
                </div>
                <div className="img">
                    <img src="./img/hero-bg.svg" alt="welcome" />
                </div>
            </section>
            <section className="slider-features">
                <Slider/>
            </section>
        </div>
    )
}