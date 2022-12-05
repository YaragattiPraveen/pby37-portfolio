import React from 'react'
import '../Home/Home.css'
import Typewriter from 'typewriter-effect';
import Resume from '../../Assests/Front-End-Developer_Praveen.pdf'
import { BsFillMoonStarsFill, BsFillSunFill, BsGithub, BsLinkedin } from 'react-icons/bs';
import {SiGmail} from 'react-icons/si'
import { motion } from 'framer-motion';

const textAnimate = {
  offscreen: {
    x: 1500
  },
  onscreen: {
    x: 0
  }
}
const buttonAnimate = {
  offscreen: {
    x: -600
  },
  onscreen: {
    x: 0
  }
}
const socialMedia= {
  offscreen: {
    x: 1500
  },
  onscreen: {
    x: 0
  }
}
const Home = ({ theme, ChangeTheme }) => {

  return (
    <div className='container-fluid home' id='Home'>
      <div className='theme-change' onClick={ChangeTheme}>
        {
          theme === 'light' ? <BsFillMoonStarsFill size={25} /> : <BsFillSunFill size={25} className="sun-icon" />
        }
      </div>
      <div className='container home-content'>
        <motion.div initial="offscreen" whileInView="onscreen"
          viewport={{ once: false, amount: 0.1 }}
          className='home-text'>
          <motion.h1 transition={{ duration: 1.3, type: 'spring', bounce: 0.4 }} variants={textAnimate}>Hi I'm Praveen Yaragatti</motion.h1>
          <motion.h3 transition={{ duration: 1.3, type: 'spring', bounce: 0.4 }} variants={textAnimate}>
            <Typewriter
              options={{
                strings: ['Frontend Developer😎', 'UX/UI Designer😎', 'MERN Stack Developer🥳', 'Web Developer😉'],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.h3>
        </motion.div>

        <motion.div initial="offscreen" whileInView="onscreen"
          viewport={{ once: false, amount: 0.1 }} className='buttons'>

          <motion.button variants={buttonAnimate} transition={{ duration: .5, type: 'spring', bounce: 0.4 }}  className='hire-me-btn'>Hire Me</motion.button>

          <motion.button variants={buttonAnimate} transition={{ duration: .5, type: 'spring', bounce: 0.4 }} className='download-cv-btn'> <a href={Resume} download='Praveen_Yaragatti_CV'>Get Resume </a></motion.button>

        </motion.div>   
        
        <motion.div initial="offscreen" whileInView="onscreen"
          viewport={{ once: false, amount: 0.1 }} className="social-media">
          <motion.p variants={socialMedia} transition={{ duration: .5, type: 'spring', bounce: 0.4 }} className='git'> <a href="https://github.com/YaragattiPraveen" target='_'><BsGithub size={18}/></a></motion.p> 
          <motion.p variants={socialMedia} transition={{ duration: .5, type: 'spring', bounce: 0.4 }}  className='linkdin'><a href="https://www.linkedin.com/in/praveen-yaragatti-5a5a17193/" target='_'><BsLinkedin size={18}/></a></motion.p> 
          <motion.p variants={socialMedia} transition={{ duration: .5, type: 'spring', bounce: 0.4 }}  className='gmail'><a href="mailto:yaragattipraveen68@gmail.com"><SiGmail size={18}/></a></motion.p>    
        </motion.div>

      </div>
    </div>
  )
}

export default Home