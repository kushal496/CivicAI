import "./SchemeCard.css";
import { FaArrowRight } from "react-icons/fa";

function SchemeCard({ scheme }) {
  const Icon = scheme.icon;

  return (
    <div className="scheme-card">

      <div className="scheme-top">

        <div
          className="scheme-icon"
          style={{
            background: scheme.color,
            color: scheme.iconColor,
          }}
        >
          <Icon />
        </div>

        <span className="match-badge">
          {scheme.match} Match
        </span>

      </div>

      <h3>{scheme.title}</h3>

      <p className="category">
        {scheme.category}
      </p>

      <p className="benefit">
        {scheme.benefit}
      </p>

      <div className="scheme-footer">
        <button>
          View Details
          <FaArrowRight />
        </button>
      </div>

    </div>
  );
}

export default SchemeCard;