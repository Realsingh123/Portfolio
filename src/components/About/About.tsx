import { Container } from "./styles";
import Priyanshu from "../../assets/my pic.jpg";
import wordpress from "../../assets/wordpress.svg";
import Express from "../../assets/icons8-express-js.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import MongoDB from "../../assets/icons8-mongo-db-48.png";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import Figma from "../../assets/figma.png";
import Greensock from "../../assets/greensock.svg";


export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <div>
          <h2>About me</h2>
        </div>
        <div>
          <p>
            Hi there! I'm Priyanshu, a website developer with a passion and skill set including HTML, CSS, JavaScript, React, Express, and MongoDB. I have the tools to bring any website vision to life.
          </p>
        </div>
        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          {/* <p>
            But my services go beyond just custom development - I'm also proficient in using CMS systems like WordPress and Wix, making it easy to take control of their own websites and keep them up to date.
          </p> */}
        </div>
        <div>
          <p>
            So if you're in need of a new website or just looking to revamp your current online presence, I'd love to chat and see how I can help. Let's bring your website dreams to reality together!
          </p>
        </div>
        <div>
          <h3>Here are my main skills:</h3>
        </div>
        <div className="hard-skills">
          {[
            // { src: wordpress, alt: "Wordpress" },
            { src: Figma, alt: "Figma" },
            { src: reactIcon, alt: "React" },
            { src: typescriptIcon, alt: "Typescript" },
            { src: MongoDB, alt: "MongoDB" },
            { src: nodeIcon, alt: "Node" },
            { src: htmlIcon, alt: "Html" },
            { src: cssIcon, alt: "Css" },
            { src: boostrapIcon, alt: "Bootstrap" },
            { src: jsIcon, alt: "JavaScript" },
            { src: Express, alt: "Express" },
            { src: Greensock, alt: "Greensock" },
          ].map((skill, index) => (
            <div className="hability" key={index}>
              <img src={skill.src} alt={skill.alt} />
            </div>
          ))}
        </div>
      </div>
      <div className="about-image">
        <div>
          <img src={Priyanshu} alt="Priyanshu" />
        </div>
      </div>
    </Container>
  );
}
