
import movieTicket from "./img/MovieTicket.png"
import DressSuggestion from "./img/DressSuggestion.png"
import {  } from "../src/Project.css";
import {motion} from "framer-motion"
const Project = () => {

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
    <div className="project-sec">
      <h3 className='project-title'>Projects</h3>
      <div className="project-box">
        <motion.div className="project"
        variants={fadeInVariantes}
        initial="initial"
        whileInView="animate"
        viewport={{once:true}}
        custom={1}
        >
          <img src={movieTicket}  alt="" />
        </motion.div>
        <motion.div className="project"
        variants={fadeInVariantes}
        initial="initial"
        whileInView="animate"
        viewport={{once:true}}
        custom={2}
        >
          <img src={DressSuggestion} alt="" />
        </motion.div>
        <motion.div className="project"
        variants={fadeInVariantes}
        initial="initial"
        whileInView="animate"
        viewport={{once:true}}
        custom={3}
        >
          <img src={movieTicket}  alt="" />
        </motion.div>
        <motion.div className="project"
        variants={fadeInVariantes}
        initial="initial"
        whileInView="animate"
        viewport={{once:true}}
        custom={4}
        >
          <img src={movieTicket}  alt="" />
        </motion.div>
      </div>
    </div>
  )
}

export default Project
