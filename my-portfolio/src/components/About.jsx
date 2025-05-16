import Profile from "../assets/profile.png";
import "../../styles/About.scss";

function About() {
  return (
    <section id="about">
      <img className="profile" src={Profile} alt="profile-pic" />
      <div className="summary">
        <h2>
          Hello, <span className="highlight">Ale</span> here!
        </h2>
        <p>
          I&apos;m a full-stack web developer who took the scenic route into
          tech—starting out as a lawyer in Mexico, then pivoting into digital
          marketing after moving to Canada. That creative detour eventually led
          me to discover a real passion for coding.
        </p>
        <p>
          Today, I combine strategy, design, and clean code to build intuitive,
          user-friendly web apps. Whether it&apos;s crafting seamless front-end
          experiences or building robust back-end logic, I love turning ideas
          into interactive products—ideally with a tasty coffee and a good
          playlist by my side.
        </p>
      </div>
    </section>
  );
}

export default About;
