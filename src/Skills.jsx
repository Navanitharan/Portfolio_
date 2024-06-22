import "./Skills.css"
import { motion} from "framer-motion"
const Skills = () => {

    const skills = ["Html", "CSS", "Bootstrap", "Javascript", "React", "Vite", "Node.Js", "Express.Js", "Java", "Hibernate", "JSP", "Spring", "SpringBoot", "Maven","MySQL", "MongoDB", "Git"]
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
    <div className="skills-list">
      <h1 className='sec-skill'>Skills</h1>
    <ul >
      {skills.map((skill, index) => (
        <motion.li key={index}
        variants={fadeInVariantes}
        initial="initial"
        whileInView="animate"
        viewport={{once:true}}
        custom={index}
        >
          <p
            className="skill"
            style={{
              backgroundColor: "#fff",
              border: "1px solid #777",
              borderRadius:"8px", 
              padding: "10px",
              color: "#777",
              listStyle:"none"
            }}
          >
            {skill}
          </p>
        </motion.li>
      ))}
    </ul>
    </div>
  )
}

export default Skills
