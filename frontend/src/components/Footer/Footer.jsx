import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">

        <div className="footer-brand">
          <h2>CivicAI</h2>

          <p>
            Making government schemes easier to discover with the power of AI.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Schemes</a></li>
            <li><a href="#">Eligibility</a></li>
            <li><a href="#">Dashboard</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Support</h3>

          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 CivicAI. All Rights Reserved.</p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;