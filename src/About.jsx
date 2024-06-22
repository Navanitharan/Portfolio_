
import "../src/About.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {motion} from "framer-motion"
import NAVANITHARAN from "./NAVANITHARAN-Resume.pdf"
const About = () => {
    const initialVariants = {
        initial:{
            opacity:0,
            y:100
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                delay: 0.8,
                duration: .8,
            }
        },
        exit:{}
    }
  return (
    <div>
        <header className="header container-fluid d-flex justify-content-center">
            {/* <div className="logo-box">
                <img src="./img/logo-white.png" alt="Logo" className="logo"/>
            </div> */}
            <div  style={{height:"100%", width:"70vw"}} className="d-flex flex-column justify-content-center text-center">
                <div className="heading-primary">
                    <h2 className="heading-primary-main"><span >NAVANITHARAN</span></h2>
                    <h2 className="heading-primary-sub"><span >JUNIOR FULLSTACK DEVELOPER</span></h2>
                </div>
                <motion.p className="desc"
                    variants={initialVariants}
                    initial="initial"
                    animate="animate"
                >
                A dedicated Fullstack Developer with a passion for creating robust and user-friendly web applications.
                 With a strong foundation in both front-end and back-end technologies, 
                 I strive to deliver seamless digital solutions that enhance user experiences and drive business growth.
                 I have developed a deep understanding of the entire web development process.
                  From designing intuitive user interfaces to building scalable server-side applications,
                   my skill set covers a wide spectrum of technologies and tools.
                </motion.p>
                {/* <a href="" className="btn btn-hire">Hire me</a> */}
                <a
                href={NAVANITHARAN}
                download='NAVANITHARAN-Resume.pdf'
                // style={styles.downloadButton}
                >
                    Download Resume
                </a>
            </div>
        </header>
    </div>
  )
}
const styles = {
    downloadButton: {
      display: 'inline-block',
      padding: '10px 20px',
      margin: '10px',
      backgroundColor: '#0073b1',
      color: '#fff',
      borderRadius: '5px',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  };

export default About
