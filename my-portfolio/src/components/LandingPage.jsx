import Avatar from "../assets/avatar.png";
import "../../styles/LandingPage.scss";

function LandinPage() {
  return (
    <section className="landing-page" id="home">
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
    </section>
  );
}

export default LandinPage;
