import Avatar from "../assets/avatar.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../../styles/LandingPage.scss";

function LandinPage() {
  return (
    <section className="landing-page" id="home">
      <div className="header-container">
        <div className="phrase-container">
          <h1>
            Building websites that won&apos;t crash—
            <span className="bolded-phrase">
              unless you&apos;re trying to break them!
            </span>
          </h1>
        </div>
        <div className="avatar">
          <img className="avatar" src={Avatar} alt="avatar" />
        </div>
      </div>
      <footer>
        <MdEmail />
        <a
          href="https://www.linkedin.com/in/alexmarket43/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/alemolina43"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </footer>
    </section>
  );
}

export default LandinPage;
