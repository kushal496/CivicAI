import "./TrustBar.css";

import {
  FaFileAlt,
  FaLandmark,
  FaRobot,
  FaBolt,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaFileAlt />,
    value: "1200+",
    label: "Government Schemes",
    color: "#2563EB",
    bg: "#EFF6FF",
  },
  {
    icon: <FaLandmark />,
    value: "Verified",
    label: "Scheme Information",
    color: "#16A34A",
    bg: "#ECFDF3",
  },
  {
    icon: <FaRobot />,
    value: "AI Powered",
    label: "Recommendations",
    color: "#9333EA",
    bg: "#FAF5FF",
  },
  {
    icon: <FaBolt />,
    value: "24/7",
    label: "AI Assistance",
    color: "#F59E0B",
    bg: "#FFF7ED",
  },
];

function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="container">
        <div className="trust-grid">
          {stats.map((item) => (
            <div className="trust-item" key={item.label}>
              <div
                className="trust-icon"
                style={{
                  background: item.bg,
                  color: item.color,
                }}
              >
                {item.icon}
              </div>

              <div className="trust-content">
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustBar;