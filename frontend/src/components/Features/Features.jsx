import "./Features.css";
import {
  FaRobot,
  FaClipboard,
  FaFileAlt,
  FaComments,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRobot />,
    title: "AI Recommendations",
    description:
      "Get personalized government schemes based on your profile and eligibility.",
  },
  {
    icon: <FaClipboard />,
    title: "Eligibility Simulator",
    description:
      "Instantly check your eligibility by adjusting age, income, category, and more.",
  },
  {
    icon: <FaFileAlt />,
    title: "Document Center",
    description:
      "Track required documents and view your document readiness score.",
  },
  {
    icon: <FaComments />,
    title: "AI Assistant",
    description:
      "Ask questions about government schemes in natural language.",
  },
];

function Features() {
  return (
    <section className="features">
      <div className="features-header">
        <h2>Why Choose CivicAI?</h2>
        <p>
          Smart AI-powered tools designed to simplify access to government
          schemes for every citizen.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;