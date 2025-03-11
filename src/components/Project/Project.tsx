import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";
export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <div className="project">
          <header>
            <svg
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#23ce6b"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://github.com/Realsingh123/Lensroom" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site" />
              </a>
              <a href="https://lensroom-theta.vercel.app/" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>Lensroom</h3>
            <p>
              Developed a sleek and responsive photography service website using React.js. Designed to showcase portfolios, manage bookings, and provide seamless navigation for users. Implemented dynamic galleries, client testimonials, and an intuitive contact form. Ensured high performance, cross-browser compatibility, and a modern user experience.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>React</li>
            </ul>
          </footer>
        </div>

        <div className="project">
          <header>
            <svg
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#23ce6b "
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://github.com/Realsingh123/Eduweb-clone" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site" />
              </a>
              <a href="https://eduweb-clone.vercel.app/" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>Edu Web clone</h3>
            <p>
            EduLearn Clone is a simple, responsive educational website built using HTML and CSS. It features a clean design with sections for courses, about us, contact, and testimonials. The homepage showcases an attractive banner, course listings, and a footer with social media links. This project serves as a basic template for an e-learning platform, ideal for practice in frontend development. 🚀
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>HTML</li>
              <li>JavaScript</li>
              {/* <li>Gsap</li> */}
            </ul>
          </footer>
        </div>

        <div className="project">
          <header>
            <svg
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#23ce6b"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="#" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site" />
              </a>
              <a href="https://ashuswan3.wixsite.com/my-site-7" target="_blank" rel="noreferrer">
                <img src={externalLink} alt="Visit site" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>Educational website</h3>
            <p>
              Crafted a customized educational website on Wix technology. Made the required customized eye-catching components rather than predefined ones. Developed interactive maps, event calendars, and a mobile-friendly design, making your international academic journey at your fingertips.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Wix</li>
            </ul>
          </footer>
        </div>
      </div>
    </Container>
  );
}

export default Project;
