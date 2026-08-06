import "./SchemeHero.css";
import ApplyCard from "../ApplyCard/ApplyCard";
import farmerIllustration from "../../assets/images/pm-kisan-illustration.png";

function SchemeHero() {
  return (
    <section className="scheme-hero">

      <div className="hero-image">
        <img
        src={farmerIllustration}
        alt="PM Kisan Illustration"
    />
      </div>

      <div className="hero-content">

        <span className="scheme-tag">
          Agriculture
        </span>

        <h1>
          PM Kisan Samman Nidhi
        </h1>

        <p>
          PM-KISAN provides income support of ₹6000
          every year to eligible farmers across India.
        </p>

        <div className="hero-info">

  <div className="info-card">
    <h4>Ministry</h4>
    <p>Agriculture & Farmers Welfare</p>
  </div>

  <div className="info-card">
    <h4>Beneficiaries</h4>
    <p>11+ Crore Farmers</p>
  </div>

  <div className="info-card">
    <h4>Launched</h4>
    <p>24 Feb 2019</p>
  </div>

    </div>

      </div>

        <ApplyCard />

    </section>
  );
}

export default SchemeHero;