import './App.css';
import About from './Components/About/About';
import Sidebar from './Components/Sidebar/Sidebar';
import TechStack from './Components/Tech Stack/TechStack';
import Project from './Components/Projects/Project';
import Workexperience from './Components/WorkExperience/Workexperience';
import Education from './Components/Education/Education';
import Contact from './Components/Contact/contact';
import ScrollToTop from "react-scroll-to-top";
import MobileNav from './Components/Sidebar/MobileNav';
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null)

function App() {

  const [theme, setTheme] = useState('dark')

  const ChangeTheme = () => {
    setTheme((prev) => (prev === 'dark' ? "light" : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ theme, ChangeTheme }}>

      <div id={theme}>
        <MobileNav />
        <Sidebar theme={theme} ChangeTheme={ChangeTheme}/>
        <About />
        <TechStack />
        <Project />
        <Workexperience />
        <Education />
        <Contact />
      </div>

      <ScrollToTop className='scroll-btn' color='#fff' height='20px' width='20px' smooth='true' style={{ borderRadius: "10px", backgroundColor: '#0A2F51', padding: '5px' }} />
    </ThemeContext.Provider>
  );
}

export default App;
