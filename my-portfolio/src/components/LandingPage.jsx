import Avatar from "../assets/avatar.png";
import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";
import { BiLogoGithub } from "react-icons/bi";

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
        <a href="mailto:alexmarket43@gmail.com">
          <MdEmail />
        </a>
        <a
          href="https://www.linkedin.com/in/alexmarket43/"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoLinkedin />
        </a>
        <a
          href="https://github.com/alemolina43"
          target="_blank"
          rel="noreferrer"
        >
          <BiLogoGithub />
        </a>
      </footer>
    </section>
  );
}

export default LandinPage;
