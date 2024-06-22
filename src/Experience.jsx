import "./Experience.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { motion} from "framer-motion"
const experienceData = [
  {
    companyName: 'Inmakes Info Tech',
    timePeriod: 'May 2023 – Aug 2023',
    role: 'FullStack Developer - Intern',
    desc:"Developed expertise in website development as Java Full Stack Developer Intern. Successfully completed multiple projects showcasing proficiency in Java Spring Framework. and various web development technologies. Collaborated effectively with cross-functional teams to contribute to successful development of high quality websites"
  },
  {
    companyName: 'Guvi Geek Networks',
    timePeriod: 'Nov 2023 – Jan 2024',
    role: 'Zen Class Program - Project Based',
    desc:"Developed multiple full-stack web applications using the MERN stack demonstrating proficiency in MongoDB, Express, React, and Node.js Collaborated with peers to design and implement functional user interfaces while ensuring backend efficiency and database integrity. Practiced agile methodologies and version control using Git and GitHub, contributing to a consistent workflow and team synergy Engaged in continuous learning and skill enhancement, successfully completing all program milestones and projects"
  },
  // Add more experiences here
];

const ExperienceSection = () => {

  const fadeInVariantes = {
    initial:{
      opacity:0,
      y:100
    },
    animate:(index) => ({
      opacity:1,
      y:0,
      transition: {
        delay: 0.08 * index,
      }
    })
  }

  return (
    <div className="exe-sec">

      <h2 className="text-center exe-title">Experience</h2>
      <div className="container">
      {experienceData.map((exp, index) => (
        <motion.div key={index} className="company pb-5"
        variants={fadeInVariantes}
        initial="initial"
        whileInView="animate"
        viewport={{once:true}}
        custom={index}
        >
          <h3>{exp.companyName}</h3>
          <p>{exp.timePeriod}</p>
          <p>{exp.role}</p>
          <p>{exp.desc}</p>
        </motion.div>
      ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
