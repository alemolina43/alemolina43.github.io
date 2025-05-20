import Flower from "../assets/flower.png";
import Eye from "../assets/eye.png";
import Star from "../assets/star.png";

import "../../styles/Contact.scss";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <>
      <section id="contact">
        <div className="column">
          <img src={Flower} />
          <img src={Eye} />
          <img src={Star} />
        </div>
        <div className="contact-info">
          <h2 className="highlight">Let&apos;s talk!</h2>
          <div className="contact-method">
            <MdEmail />
            <span>alexmarket43@gmail.com</span>
          </div>
          <footer>
            <FaLinkedin />
            <FaGithub />
            <FaDiscord />
          </footer>
        </div>
      </section>
    </>
  );
}

export default Contact;
