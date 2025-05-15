import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

function Contact() {
  return (
    <>
      <section id="contact">
        <h2>
          <span className="highlight">Let&apos;s talk!</span>
        </h2>
        <p>website</p>
        <p>email</p>
        <p>phone</p>
        <footer>
          <FaLinkedin />
          <FaGithub />
          <FaDiscord />
        </footer>
      </section>
    </>
  );
}

export default Contact;
