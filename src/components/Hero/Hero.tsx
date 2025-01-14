import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
// import ScrollAnimation from "react-animate-on-scroll"
// import { motion } from "framer-motion";
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        {/* Greeting */}
        <p>
          Hello <img src={Hello} alt="Hello" width="20px" />, I'm
        </p>

        {/* Name */}
        <h1>Priyanshu</h1>

        {/* Title */}
        <h3>Web Developer</h3>

        {/* Description */}
        <p className="small-resume">
          Passionate tech enthusiast eager to contribute to the tech world
        </p>

        {/* Contact Button */}
        <div>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
        </div>

        {/* Social Media */}
        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/priyanshu-singh-7b48242b7/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin" />
          </a>
          <a
            href="https://github.com/Realsingh123"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B919625256839&text=Hello+Priyanshu"
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsapp} alt="Whatsapp" />
          </a>
          <a
            href="https://t.me/singhreal"
            target="_blank"
            rel="noreferrer"
          >
            <img src={telegram} alt="telegram" />
          </a>
        </div>
      </div>

      {/* Hero Image */}
      <div className="hero-image">
        <img src={Illustration} alt="Illustration" />
      </div>
    </Container>
  );
}
