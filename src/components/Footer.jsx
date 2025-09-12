import "./Footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer">
      <nav>
        <div className="icon-footer-bar">
          <a href="https://github.com/czz-svg" target="_blank" className="icon-link-footer">
            <img src="./img/icon-footer/github-icon.png" alt="github-icon" className="icon-footer"/>
          </a>
          <a href="https://www.youtube.com/@HaHaHa-m7u" target="_blank" className="icon-link-footer" >
            <img src="./img/icon-footer/youtube-icon.png" alt="youtube-icon" className="icon-footer"/>
          </a>
          <a href="https://www.facebook.com/zuck" target="_blank" className="icon-link-footer">
            <img
              src="./img/icon-footer/facebook-icon.png"
              alt="facebook-icon"
              className="icon-footer"
            />
          </a>
        </div>
        <div className="link-footer-bar">
            <NavLink to="/" className="link-footer">Home</NavLink>
            <NavLink to="https://baomoi.com/" className="link-footer"  target="_blank">News</NavLink>
            <NavLink to="contact" className="link-footer">Contact</NavLink>
            <NavLink to="/about" className="link-footer">About</NavLink>
        </div>
      </nav>
      <div className="footer-bottom-bar">
        <p>Copyright ©2022; Designed by Vt</p>
      </div>
    </footer>
  );
}
