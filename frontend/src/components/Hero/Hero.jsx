import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container">

        <div className="hero-left">

          <span className="hero-badge">
            AI-Powered Government Assistance
          </span>

          <h1>
            Find the Right Government Scheme with Confidence
          </h1>

          <p>
            CivicAI helps citizens discover government schemes,
            verify eligibility, check required documents, and
            access official resources through an intelligent,
            user-friendly platform.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Explore Schemes
            </button>

            <button className="secondary-btn">
              Check Eligibility
            </button>

          </div>

        </div>

        <div className="hero-right">

          <div className="hero-placeholder">
            Government services illustration
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;