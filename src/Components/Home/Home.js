import React from 'react'
import '../Home/Home.css'
import Typewriter from 'typewriter-effect';
import Resume from '../../Assests/Front-End-Developer_Praveen.pdf'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const Home = ({theme,ChangeTheme}) => {
  return (
    <div className='container-fluid home' id='Home'>
      <div className='theme-change' onClick={ChangeTheme}>
        {
          theme === 'light' ? <BsFillMoonStarsFill size={25}/>:<BsFillSunFill size={25} className="sun-icon"/>
        }
      </div>
      <div className='container home-content'>

        <h1>Hi I'm a</h1>
        <h3>
          <Typewriter
            options={{
              strings: ['Frontend Developer😎','UX/UI Designer😎','MERN Stack Developer🥳','Web Developer😉'],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
        <div className='buttons'>
          <div>
            <button className='hire-me-btn'>Hire Me</button>
          </div>
          <div>
            <button className='download-cv-btn'> <a href={Resume} download='Praveen_Yaragatti_CV'>Get Resume </a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home