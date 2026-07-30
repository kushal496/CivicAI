import "./PopularSchemes.css";

import {
  FaSeedling,
  FaHospital,
  FaHome,
  FaGraduationCap,
} from "react-icons/fa";

import { FiArrowRight } from "react-icons/fi";

const schemes = [
  {
    title: "PM Kisan Samman Nidhi",
    category: "Agriculture & Farmers",
    icon: <FaSeedling />,
    bg: "#ECFDF3",
    color: "#16A34A",
  },
  {
    title: "National Scholarship",
    category: "Education",
    icon: <FaGraduationCap />,
    bg: "#FFF7ED",
    color: "#F97316",
  },
  {
    title: "Ayushman Bharat",
    category: "Healthcare",
    icon: <FaHospital />,
    bg: "#EFF6FF",
    color: "#2563EB",
  },
  {
    title: "PM Awas Yojana",
    category: "Housing",
    icon: <FaHome />,
    bg: "#FAF5FF",
    color: "#9333EA",
  },
];

function PopularSchemes() {
  return (
    <section className="popular-schemes">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <h2>Featured Schemes</h2>

          <a href="#" className="view-all">
            <span>View All</span>
            <FiArrowRight />
          </a>
        </div>

        {/* Scheme Cards */}
        <div className="schemes-grid">
          {schemes.map((scheme) => (
            <div className="scheme-card" key={scheme.title}>

              <div
                className="scheme-icon"
                style={{
                  background: scheme.bg,
                  color: scheme.color,
                }}
              >
                {scheme.icon}
              </div>

              <div className="scheme-content">
                <h3>{scheme.title}</h3>
                <p>{scheme.category}</p>
              </div>

              <div className="card-footer">
                <span>Explore</span>
                <FiArrowRight className="arrow" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default PopularSchemes;