// Project images — replace these with real screenshots
// Just drop your images in src/assets/projects/ and update the imports
import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/blockcert.png";
import project3 from "../assets/projects/mediq.png";
import project4 from "../assets/projects/project-4.webp";
import project5 from "../assets/projects/project-5.webp";
import project6 from "../assets/projects/project-6.webp";

export const HERO_CONTENT = `Full-Stack Developer and CS student who builds real-time systems, blockchain apps, and AI-powered solutions. I turn complex problems into clean, scalable products — from WebSocket chat platforms to decentralized credential verification.`;

export const navItems = [
  { label: "About", href: "hero" },
  { label: "Skills", href: "tech" },
  { label: "Experience", href: "experience" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];

export const PROJECTS = [
  {
    title: "Resolvify",
    image: project1, // Replace with real screenshot
    description:
      "Multi-shop customer support platform for 50+ users with real-time WebSocket chat, role-based access control, and a live dashboard that improved response time by 30%.",
    technologies: ["React", "FastAPI", "WebSockets", "REST API"],
    githubLink: "#", // Add your GitHub link
    liveLink: "", // Add live demo link or leave empty
  },
  {
    title: "BlockCert",
    image: project2, // Replace with real screenshot
    description:
      "Decentralized credential verification platform using Ethereum smart contracts and IPFS. SHA-256 hashing ensures 100% data immutability, deployed on Sepolia testnet.",
    technologies: ["React", "Solidity", "Hardhat", "IPFS"],
    githubLink: "https://github.com/Survine/BlockCert",
    liveLink: "https://block-cert-nu.vercel.app/",
  },
  {
    title: "Mediq",
    image: project3, // Replace with real screenshot
    description:
      "Medicine inventory management and billing system with automated stock updates reducing manual errors by 40%. Scalable CRUD APIs built with SQLAlchemy ORM.",
    technologies: ["React", "FastAPI", "SQLAlchemy", "MySQL"],
    githubLink: "https://github.com/Survine/Mediq", // Add your GitHub link
    liveLink: "https://mediq-inky.vercel.app/", // Add live demo link or leave empty
  },
  {
    title: "IntrusionIQ",
    image: project4,
    description:
      "AI-powered SOC platform for network intrusion detection trained on 2.8M+ CICIDS2017 flows. Two-stage pipeline: Voting Ensemble (RF + XGBoost + MLP) achieves 99.72% F1 with Isolation Forest for zero-day detection. FastAPI backend, React SOC dashboard, fully containerized with Docker.",
    technologies: ["Python", "FastAPI", "React", "XGBoost", "scikit-learn", "Docker"],
    githubLink: "https://github.com/Survine/IntrusionIQ",
    liveLink: "",
  },
  {
    title: "Face Recognition Attendance",
    image: project5, // Replace with real screenshot
    description:
      "AI-powered attendance system using CNN and OpenCV for facial recognition. Trained on 300+ samples achieving 95% accuracy, reducing manual processing time by 70%.",
    technologies: ["Python", "TensorFlow", "OpenCV", "CNN"],
    githubLink: "#", // Add your GitHub link
    liveLink: "", // Add live demo link or leave empty
  },
  {
    title: "VI Analysis",
    image: project6,
    description:
      "NLP pipeline analyzing 173K+ Instagram comments across virtual influencers (Lil Miquela, Imma, Naina, Kyra). Multilingual sentiment analysis with DistilBERT, topic modeling via BERTopic and LDA, and 17-chart visualization suite for engagement and trend insights.",
    technologies: ["Python", "DistilBERT", "BERTopic", "NLP", "Kaggle"],
    githubLink: "#",
    liveLink: "",
  },
];

export const CONTACT = {
  address: "Chanmuri, Bamutia Road, Agartala, Tripura, India",
  phoneNo: "+91 6009416189",
  email: "hridaybardhan18@gmail.com",
};