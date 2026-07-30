import "./FAQ.css";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How does CivicAI recommend schemes?",
    answer:
      "CivicAI analyzes the information you provide and suggests government schemes that best match your profile and eligibility.",
  },
  {
    question: "Is CivicAI free to use?",
    answer:
      "Yes. CivicAI is completely free to use and is designed to help citizens easily discover relevant government schemes.",
  },
  {
    question: "Can I apply directly through CivicAI?",
    answer:
      "No. CivicAI guides you through the process and redirects you to the official government website to complete your application.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes. CivicAI follows secure development practices and only uses the information necessary to provide recommendations.",
  },
  {
    question: "How often is scheme information updated?",
    answer:
      "Scheme information is reviewed regularly to ensure users receive accurate and up-to-date information.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">

        <div className="faq-header">

          <span>FAQ</span>

          <h2>Frequently Asked Questions</h2>

        </div>

        <div className="faq-list">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
            >

              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >

                <span>{faq.question}</span>

                <FaChevronDown className="faq-icon" />

              </button>

              <div className="faq-answer">

                <p>{faq.answer}</p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;