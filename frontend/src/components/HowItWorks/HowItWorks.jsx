import "./HowItWorks.css";

import {
  FaSearch,
  FaRobot,
  FaFileAlt,
  FaRocket,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch />,
    title: "Explore Schemes",
    description:
      "Browse government schemes based on your needs and interests.",
    color: "#2563EB",
  },
  {
    icon: <FaRobot />,
    title: "Get Recommendations",
    description:
      "Receive personalized scheme recommendations powered by AI.",
    color: "#9333EA",
  },
  {
    icon: <FaFileAlt />,
    title: "Verify Documents",
    description:
      "Check the required documents before starting your application.",
    color: "#16A34A",
  },
  {
    icon: <FaRocket />,
    title: "Apply with Confidence",
    description:
      "Continue to the official government portal and complete your application securely.",
    color: "#F59E0B",
  },
];

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">

        <div className="journey-header">

          <span>Your Journey Starts Here</span>

          <h2>
            Everything You Need in Four Steps
          </h2>

          <p>
            From discovering the right government scheme to applying through
            the official government portal, CivicAI guides you every step of
            the way.
          </p>

        </div>

        <div className="journey">
             {steps.map((step) => (
    <div className="journey-step" key={step.title}>

      <div
        className="journey-icon"
        style={{
          background: `${step.color}15`,
          color: step.color,
        }}
      >
        {step.icon}
      </div>

      <h3>{step.title}</h3>

      <p>{step.description}</p>

    </div>
  ))}


       </div>

      </div>
    </section>
  );
}

export default HowItWorks;