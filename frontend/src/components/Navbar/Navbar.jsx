import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="navbar-logo">
          CivicAI
        </div>

        <ul className="navbar-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Schemes</a></li>
          <li><a href="#">Eligibility</a></li>
          <li><a href="#">Document Checker</a></li>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">About</a></li>
        </ul>

        <button className="signin-btn">
          Sign In
        </button>

      </div>
    </nav>
  );
}

export default Navbar;