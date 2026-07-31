import {
  FaSeedling,
  FaGraduationCap,
  FaHospital,
  FaHome,
  FaBriefcase,
  FaFemale,
  FaChild,
  FaMoneyBillWave
} from "react-icons/fa";

export const schemes = [
  {
    id: 1,
    title: "PM Kisan Samman Nidhi",
    category: "Agriculture",
    benefit: "₹6,000 per year financial support.",
    match: "95%",
    icon: FaSeedling,
    color: "#EAF8EF",
    iconColor: "#16A34A"
  },

  {
    id: 2,
    title: "National Scholarship",
    category: "Education",
    benefit: "Scholarships for deserving students.",
    match: "92%",
    icon: FaGraduationCap,
    color: "#FFF4E8",
    iconColor: "#F97316"
  },

  {
    id: 3,
    title: "Ayushman Bharat",
    category: "Healthcare",
    benefit: "Health insurance up to ₹5 Lakhs.",
    match: "96%",
    icon: FaHospital,
    color: "#EEF4FF",
    iconColor: "#2563EB"
  },

  {
    id: 4,
    title: "PM Awas Yojana",
    category: "Housing",
    benefit: "Affordable housing assistance.",
    match: "91%",
    icon: FaHome,
    color: "#F7ECFF",
    iconColor: "#9333EA"
  },

  {
    id: 5,
    title: "Skill India Mission",
    category: "Employment",
    benefit: "Free skill development training.",
    match: "94%",
    icon: FaBriefcase,
    color: "#EEF6FF",
    iconColor: "#2563EB"
  },

  {
    id: 6,
    title: "Beti Bachao Beti Padhao",
    category: "Women & Child",
    benefit: "Empowering girls through education.",
    match: "90%",
    icon: FaFemale,
    color: "#FFF1F7",
    iconColor: "#DB2777"
  },

  {
    id: 7,
    title: "POSHAN Abhiyaan",
    category: "Women & Child",
    benefit: "Nutrition support for mothers & children.",
    match: "93%",
    icon: FaChild,
    color: "#FDF3E7",
    iconColor: "#EA580C"
  },

  {
    id: 8,
    title: "PM Jan Dhan Yojana",
    category: "Finance",
    benefit: "Zero balance bank accounts.",
    match: "95%",
    icon: FaMoneyBillWave,
    color: "#ECFDF5",
    iconColor: "#16A34A"
  }
];