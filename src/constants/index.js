import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I’m a Full-Stack Developer and CS student skilled in Python, C++, and JavaScript, with expertise in building scalable web apps, API integration, and database management. Passionate about optimization and problem-solving, I thrive in industry projects and coding competitions to create innovative solutions.`;

export const navItems = [
  { label: "About", href: "hero" },
  { label: "Technologies", href: "tech" },
  { label: "Resume", href: "resume" },
  { label: "Projects", href: "projects" },
];


export const PROJECTS = [
  {
    title: "FlowSync Website",
    image: project1,
    description:
      "A fully functional automation website with features like signin, signup, admin login, Dashboard.",
    technologies: ["HTML", "CSS", "React", "TailWind CSS", "Recharts"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation and progress tracking.",
    technologies: ["HTML", "CSS", "React", "MySql"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "File Encoder Decoder",
    image: project4,
    description:
      "Created a file encoder-decoder system using Huffman encoding for file compression and decompression.",
    technologies: ["Python", "Tkinter", "SqlAlchemy"],
  },
];

export const CONTACT = {
  address: "Chanmuri, Bamutia Road, Agartala, Tripura, India",
  phoneNo: "+91 6009416189 ",
  email: "hridaybardhan18@gmail.com",
};
